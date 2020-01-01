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
          <button class="complete" @click="update(item)"></button>
          <label>{{ item.title }}</label>
          <button class="destroy" @click="remove(item)"></button>
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
          <button class="complete" @click="update(item)"></button>
          <label>{{ item.title }}</label>
          <button class="destroy" @click="remove(item)"></button>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { createThing, delThing, updateThing } from "../api/api";

export default {
  data() {
    return {
      inputValue: "",
      removeMsg: "您确定要删除当前事项嘛？"
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
    ...mapMutations({
      setThingList: "setThingList"
    }),
    // 添加代办事项
    addItem() {
      if (this.inputValue == "") {
        alert("内容不能为空");
      } else {
        let todo = { title: this.inputValue };
        createThing(todo)
          .then(() => {
            this.inputValue = "";
            this.setThingList();
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    update(item) {
      let that = this;
      updateThing(item.id, { done: item.done })
        .then(() => {
          // 更新store数据
          that.setThingList();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    remove(item) {
      let that = this;
      if (confirm(that.removeMsg) == true) {
        delThing(item.id)
          .then(() => {
            // 更新store数据
            that.setThingList();
          })
          .catch(function(error) {
            console.log(error);
            alert("删除失败");
          });
      } else {
        return false;
      }
    }
  }
};
</script>

