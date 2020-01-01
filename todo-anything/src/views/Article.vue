<template>
  <div class="main">
    <!-- 输入框 -->
    <header class="header">
      <input
        v-model="inputTitle"
        autofocus="autofocus"
        autocomplete="off"
        placeholder="请输入标题"
        class="new-todo left-todo"
      />
      <input
        v-model="inputLink"
        @keyup.enter="addItem"
        autofocus="autofocus"
        autocomplete="off"
        placeholder="请输入连接"
        class="new-todo right-todo"
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
          <a :href="item.link" target="_blank">{{ item.title }}</a>
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
          <a :href="item.link" target="_blank">{{ item.title }}</a>
          <button class="destroy" @click="remove(item)"></button>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { createArticle, updateArticle, delArticle } from "../api/api";

export default {
  data() {
    return {
      inputTitle: "",
      inputLink: "",
      removeMsg: "您确定要删除当前事项嘛？"
    };
  },
  computed: {
    ...mapState({
      article_list: "article_list"
    }),
    todo_list() {
      return this.article_list.filter(item => item.done == false);
    },
    done_list() {
      return this.article_list.filter(item => item.done == true);
    }
  },
  mounted() {
    this.setArticleList();
  },
  methods: {
    ...mapMutations({
      setArticleList: "setArticleList"
    }),
    // 添加待读文章
    addItem() {
      if (this.inputTitle == "" || this.inputLink == "") {
        alert("内容不能为空");
      } else {
        let todo = { title: this.inputTitle, link: this.inputLink };
        createArticle(todo)
          .then(() => {
            this.inputTitle = "";
            this.inputLink = "";
            this.setArticleList();
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    update(item) {
      let that = this;
      updateArticle(item.id, { done: item.done })
        .then(() => {
          // 更新store数据
          that.setArticleList();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    remove(item) {
      let that = this;
      if (confirm(that.removeMsg) == true) {
        delArticle(item.id)
          .then(() => {
            // 更新store数据
            that.setArticleList();
            alert("删除成功");
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

<style lang="stylus" scoped>
.header {
  overflow: hidden;

  .new-todo {
    width: 48%;
  }

  .left-todo {
    float: left;
  }

  .right-todo {
    float: right;
  }
}
</style>