<template>
  <div id="app">
    <div id="nav">
      <a @click="toThing" style="margin-left:0;">待办事项</a>
      <a @click="toArticle">文章清单</a>
      <a @click="toLink">网址导航</a>
      <a @click="toUserg" style="margin-right:0;">个人中心</a>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    toThing() {
      this.$router.push({ name: "thing" });
    },
    toArticle() {
      this.$router.push({ name: "article" });
    },
    toLink() {
      this.$router.push({ name: "link" });
    },
    toUserg() {
      this.$router.push({ name: "user" });
    }
  }
};
</script>
