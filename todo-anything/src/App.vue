<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">待办事项</router-link>
      <router-link to="/article">文章清单</router-link>
      <router-link to="/link">网址导航</router-link>
      <router-link to="/user">个人中心</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#nav {
  padding: 10px 0;
  font-size: 24px;
  background: rgba(47, 47, 47, 0.98);
  font-weight: bold;
  text-align: center;
  color: #fff;
}

#nav a {
  color: #fff;
  margin: 0 33px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
@media screen and (max-width: 600px) {
  #nav a {
    color: #fff;
    margin: 0 5px;
    font-size: 18px;
  }
}
</style>
