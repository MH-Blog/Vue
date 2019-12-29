<template>
  <div class="main">
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  computed: {
    ...mapState({
      thing_list: "thing_list"
    }),
    todo_list() {
      return this.thing_list.filter(item => item.done == false);
    },
    done_list() {
      return this.thing_list.filter(item => item.done == true);
    }
  },
  mounted() {
    this.$store.commit("setThingList");
  },
  methods: {
    // 添加代办事项
    addItem() {
      if (this.inputValue == "") {
        alert("内容不能为空");
      } else {
        // let todo = {
        //   title: this.inputValue
        // };
        // this.$store.commit("addThingData", todo);
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

