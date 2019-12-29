<template>
  <div>
    <h3>帐号登录</h3>
    <div>
      <label>用&nbsp;户&nbsp;名</label>
      <input type="text" v-model="userName" placeholder="手机号/账号" />
    </div>
    <div>
      <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
      <input type="password" v-model="passWord" placeholder="请输入您的密码" />
    </div>
    <input type="button" @click="loginBtn" value="立即登录" />
  </div>
</template>
<script>
import cookie from "../static/js/cookie";
import { login } from "../api/api";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      error: "",
      userNameError: "",
      parseWordError: ""
    };
  },
  methods: {
    loginBtn() {
      var that = this;
      login({
        username: this.userName,
        password: this.passWord
      })
        .then(response => {
          console.log(response);
          //本地存储用户信息
          cookie.setCookie("username", this.userName, 7);
          cookie.setCookie("token", response.data.token, 7);
          that.$store.commit("setUserInfo");
          //跳转到首页页面
          this.$router.push({ name: "thing" });
        })
        .catch(function(error) {
          if ("non_field_errors" in error) {
            that.error = error.non_field_errors[0];
          }
          if ("username" in error) {
            that.userNameError = error.username[0];
          }
          if ("password" in error) {
            that.parseWordError = error.password[0];
          }
        });
    }
  }
  // created() {
  //   //清除缓存
  //   cookie.delCookie("token");
  //   cookie.delCookie("name");
  //   //重新触发store
  //   //更新store数据
  //   this.$store.dispatch("setInfo");
  // }
};
</script>
