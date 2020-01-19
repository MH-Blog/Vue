<template>
  <div class="login-view">
    <div class="login-logo"></div>
    <div class="form-item">
      <input id="username" style v-model="userName" type="text" autocomplete="off" placeholder="邮箱" />
      <p class="tip" v-if="userNameError">请输入合法的邮箱地址</p>
    </div>
    <div class="form-item verifycode">
      <input id="username" v-model="verifyCode" type="text" autocomplete="off" placeholder="验证码" />
      <button @click="getCode">获取验证码</button>
      <p class="tip" v-if="userNameError">请输入合法的邮箱地址</p>
    </div>

    <div class="form-item">
      <input
        id="password"
        v-model="passWord"
        type="password"
        autocomplete="off"
        placeholder="登录密码"
        @keyup.enter="loginBtn"
      />
      <p class="tip" v-if="parseWordError">邮箱或密码不正确</p>
    </div>
    <div class="form-item">
      <button class="login-btn" @click="registerBtn">注 册</button>
    </div>
    <div class="reg-bar">
      <router-link to="/login" class="reg">立即登录</router-link>
      <router-link to="/forget" class="forget">忘记密码</router-link>
    </div>
  </div>
</template>
<script>
import cookie from "@/static/js/cookie";
import { register, getCode } from "@/api/api";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      verifyCode: "",
      userNameError: false,
      parseWordError: false,
      verifyCodeError: false
    };
  },
  methods: {
    getCode() {
      getCode({
        email: this.userName
      })
        .then(() => {
          alert("发送成功，请查看邮箱");
        })
        .catch(e => {
          alert(e["email"][0]);
        });
    },
    registerBtn() {
      var that = this;
      register({
        username: this.userName,
        password: this.passWord,
        code: this.verifyCode
      })
        .then(response => {
          //本地存储用户信息
          cookie.setCookie("username", this.userName, 7);
          cookie.setCookie("token", response.data.token, 7);
          that.$store.commit("setUserInfo");
          //跳转到首页页面
          this.$router.push({ name: "thing" });
        })
        .catch(function() {});
    }
  }
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
    display: flex;

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

  .verifycode button {
    border-radius: 40px;
    margin-left: 5px;
  }

  .reg-bar {
    width: 280px;
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

@media screen and (max-width: 600px) {
  .login-view {
    width: 300px;
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
      width: 260px;
      margin: 0 auto;
      padding-bottom: 30px;
      display: flex;

      input {
        width: 180px;
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
        width: 260px;
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

    .verifycode {
      button {
        width: 60px;
      }

      input {
        width: 120px;
      }
    }

    .reg-bar {
      width: 280px;
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
}
</style>