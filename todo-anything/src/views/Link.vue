<template>
  <div class="main">
    <!-- 输入框 -->
    <header class="header">
      <input
        v-model="inputTitle"
        autofocus="autofocus"
        autocomplete="off"
        placeholder="请输入标题"
        class="new-todo"
      />
      <input
        v-model="inputLink"
        autofocus="autofocus"
        autocomplete="off"
        placeholder="请输入连接"
        class="new-todo middle-todo"
      />
      <input
        v-model="inputType"
        autofocus="autofocus"
        autocomplete="off"
        placeholder="请输入类型"
        class="new-todo"
        @keyup.enter="addItem"
      />
    </header>
    <!-- 列表区域 -->
    <section>
      <h3>
        博客类
        <span id="todocount">{{blog_list.length}}</span>
      </h3>
      <div class="view">
        <a :href="item.link" v-for="(item,index) in blog_list" :key="index">{{item.title}}</a>
      </div>
    </section>
    <section>
      <h3>
        论坛类
        <span id="todocount">{{forum_list.length}}</span>
      </h3>
      <div class="view">
        <a :href="item.link" v-for="(item,index) in forum_list" :key="index">{{item.title}}</a>
      </div>
    </section>
    <section>
      <h3>
        资源类
        <span id="todocount">{{material_list.length}}</span>
      </h3>
      <div class="view">
        <a :href="item.link" v-for="(item,index) in material_list" :key="index">{{item.title}}</a>
      </div>
    </section>
  </div>
</template>
<script>
import { createLink } from "../api/api";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      inputTitle: "",
      inputLink: "",
      inputType: ""
    };
  },
  computed: {
    ...mapState({
      link_list: "link_list"
    }),
    blog_list() {
      return this.link_list.filter(item => item.type == 1);
    },
    forum_list() {
      return this.link_list.filter(item => item.type == 2);
    },
    material_list() {
      return this.link_list.filter(item => item.type == 3);
    }
  },
  mounted() {
    this.setLinkList();
  },
  methods: {
    ...mapMutations({
      setLinkList: "setLinkList"
    }),
    // 添加待读文章
    addItem() {
      if (this.inputTitle == "" || this.inputLink == "") {
        alert("内容不能为空");
      } else {
        let todo = {
          title: this.inputTitle,
          link: this.inputLink,
          type: this.inputType
        };
        createLink(todo)
          .then(() => {
            this.inputTitle = "";
            this.inputLink = "";
            this.inputType = "";
            this.setLinkList();
          })
          .catch(()=> {
            alert("添加失败")
          });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.view {
  display: flex;
  font-size: 18px;
  flex-wrap: wrap;
  justify-content: left;

  a {
    color: #000;
    max-width: 100px;
    min-width: 40px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #fff;
    position: relative;
    margin: 0 5px 10px 10px;
    padding: 0 10px;
    border-radius: 3px;
    border-left: 5px solid #629a9c;
    border-right: 5px solid #629a9c;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  }
}

.header {
  overflow: hidden;

  .new-todo {
    width: 32%;
  }

  .middle-todo {
    margin: 0 2%;
  }
}
</style>
