<template>
  <div class="thing">
    <!-- 输入框 -->
    <header class="header">
      <input
        v-model="inputValue"
        @keyup.enter="addItem"
        autofocus="autofocus"
        autocomplete="off"
        placeholder="请输入任务"
        class="new-todo"
      />
    </header>
    <!-- 列表区域 -->
    <section>
      <h3>
        正在进行
        <span id="todocount">{{todo_list.length}}</span>
      </h3>
      <ul class="todo-list">
        <li class="todo" v-for="(item,index) in todo_list" :key="index">
          <button class="complete" @click="update(item.id)"></button>
          <label>{{ item.title }}</label>
          <button class="destroy" @click="remove(item.id)"></button>
        </li>
      </ul>
    </section>
    <section>
      <h3>
        已经完成
        <span id="todocount">{{done_list.length}}</span>
      </h3>
      <ul class="do-list">
        <li class="done" v-for="(item,index) in done_list" :key="index">
          <button class="complete" @click="update(item.id)"></button>
          <label>{{ item.title }}</label>
          <button class="destroy" @click="remove(item.id)"></button>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      inputValue: "好好学习,天天向上"
    };
  },
  computed: {
    todo_list() {
      return this.list.filter(item => item.done == false);
    },
    done_list() {
      return this.list.filter(item => item.done == true);
    }
  },
  methods: {
    // 添加代办事项
    addItem() {
      if (this.inputValue == "") {
        alert("内容不能为空");
      } else {
        let todo = {
          id: this.list.length + 1,
          title: this.inputValue,
          done: false
        };
        this.list.push(todo);
        this.inputValue = "";
      }
    },
    update(id) {
      this.list.some((item, i) => {
        if (item.id == id) {
          this.list[i].done = !this.list[i].done;
          return true;
        }
      });
    },
    remove(id) {
      this.list.some((item, i) => {
        if (item.id == id) {
          this.list.splice(i, 1);
          return true;
        }
      });
    }
  }
};
</script>
<style scoped>
.thing {
  margin: 10px auto;
  max-width: 600px;
}
.thing li {
  height: 32px;
  text-align: center;
  line-height: 32px;
  background: #fff;
  position: relative;
  margin-bottom: 10px;
  padding: 0 45px;
  border-radius: 3px;
  border-left: 5px solid #629a9c;
  border-right: 5px solid #629a9c;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}

header {
  text-align: center;
}
header input {
  width: 100%;
  height: 36px;
  text-indent: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
    0 1px 6px rgba(0, 0, 0, 0.45) inset;
  border: none;
}
.thing h3 {
  position: relative;
}
.thing h3 span {
  position: absolute;
  top: 2px;
  right: 5px;
  display: inline-block;
  padding: 0 5px;
  height: 20px;
  border-radius: 20px;
  background: #e6e6fa;
  line-height: 22px;
  text-align: center;
  color: #666;
  font-size: 14px;
}

li .complete {
  display: none;
  position: absolute;
  top: 0px;
  left: 10px;
  bottom: 0px;
  font-size: 30px;
  color: #98cecb;
  border: 0;
  background: 0;
  line-height: 30px;
  transition: color 0.2s ease-out;
}

li .complete:hover {
  color: #8cebe6;
}

li .complete:after {
  content: "√";
}

li:hover .complete {
  display: block;
}

li .destroy {
  display: none;
  position: absolute;
  top: 0px;
  right: 10px;
  bottom: 0px;
  font-size: 30px;
  color: #cc9a9a;
  border: 0;
  background: 0;
  line-height: 30px;
  transition: color 0.2s ease-out;
}

li .destroy:hover {
  color: #af5b5e;
}

li .destroy:after {
  content: "×";
}

li:hover .destroy {
  display: block;
}
.done {
  border-left: 5px solid #999 !important;
  border-right: 5px solid #999 !important;
  opacity: 0.5;
}
@media screen and (max-width: 600px) {
  .thing h3 {
    margin-left: 10px;
  }
  header input {
    width: 80%;
  }
}
</style>
