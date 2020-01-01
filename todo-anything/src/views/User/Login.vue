<template>
  <div class="login-view">
    <div class="login-logo"></div>
    <div class="form-item">
      <input id="username" v-model="userName" type="text" autocomplete="off" placeholder="邮箱" />
      <p class="tip" v-if="userNameError">请输入合法的邮箱地址</p>
    </div>
    <div class="form-item">
      <input id="password" v-model="passWord" type="password" autocomplete="off" placeholder="登录密码" @click="loginBtn" />
      <p class="tip" v-if="passWordError">邮箱或密码不正确</p>
    </div>
    <div class="form-item">
      <button class="login-btn" @click="loginBtn">登 录</button>
    </div>
    <div class="reg-bar">
      <a class="reg" href="javascript:">立即注册</a>
      <a class="forget" href="javascript:">忘记密码</a>
    </div>
  </div>
</template>
<script>
import cookie from "@/static/js/cookie";
import { login } from "@/api/api";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      userNameError: false,
      parseWordError: false
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
          //本地存储用户信息
          cookie.setCookie("username", this.userName, 7);
          cookie.setCookie("token", response.data.token, 7);
          that.$store.commit("setUserInfo");
          //跳转到首页页面
          this.$router.push({ name: "thing" });
        })
        .catch(function(error) {
          if ("username" in error) {
            that.userNameError = true;
          }
          if ("password" in error) {
            that.parseWordError = true;
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
<style lang="stylus" scoped>
.login-view {
  width: 430px;
  height: 480px;
  border: 1px solid #fff;
  border-radius: 20px;
  margin: 50px auto;

  .login-logo {
    width: 104px;
    height: 104px;
    margin: 30px auto 30px;
    background: url('../../assets/images/login.png') 0 0 no-repeat;
  }

  .form-item {
    position: relative;
    width: 360px;
    margin: 0 auto;
    padding-bottom: 30px;

    input {
      width: 288px;
      height: 48px;
      padding-left: 70px;
      border: 1px solid #fff;
      border-radius: 25px;
      font-size: 18px;
      color: #fff;
      background-color: transparent;
      outline: none;
    }

    #username {
      background: url('../../assets/images/emil.png') 20px 14px no-repeat;
    }

    #password {
      background: url('../../assets/images/password.png') 23px 11px no-repeat;
    }

    .login-btn {
      width: 360px;
      height: 50px;
      border: 0;
      border-radius: 25px;
      font-size: 18px;
      color: #1f6f4a;
      outline: none;
      cursor: pointer;
      background-color: #fff;
    }
  }

  .reg-bar {
    width: 360px;
    margin: 20px auto 0;
    font-size: 14px;
    overflow: hidden;

    a {
      color: #fff;
      text-decoration: none;
    }

    .reg {
      float: left;
    }

    .forget {
      float: right;
    }
  }

  .tip {
    position: absolute;
    left: 20px;
    top: 42px;
    font-size: 14px;
    color: #f50;
  }
}
</style>