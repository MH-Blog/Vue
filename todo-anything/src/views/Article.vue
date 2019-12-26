<template>
  <div class="main">
    <!-- 输入框 -->

    <!-- 列表区域 -->
    <section>
      <h3>
        正在进行
        <span id="todocount">{{todo_list.length}}</span>
      </h3>
      <ul class="todo-list">
        <li class="todo" v-for="(item,index) in todo_list" :key="index">
          <button class="complete" @click="update(item.id)"></button>
          <a :href="item.link">{{ item.title }}</a>
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
      list: [
        {
          id: 0,
          title: "Django模型类Meta元数据详解 - heylucky - 博客园",
          link: "https://www.cnblogs.com/yelin/p/6253810.html",
          done: false
        },
        {
          id: 0,
          title: "Django模型类Meta元数据详解 - heylucky - 博客园",
          link: "https://www.cnblogs.com/yelin/p/6253810.html",
          done: false
        }
      ],
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
          link: "",
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
