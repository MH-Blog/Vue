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


