<template>
  <div>
    <div class="c-box bg-box">
      <div class="login-box clearfix" style="margin-top:10px">
        <div class="fr form-box">
          <h2>帐号登录</h2>
          <form id="jsLoginForm" autocomplete="off">
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              value="ywSlOHdiGsK6VFB6iyhnB1B30khmz8SU"
            />

            <div class="form-group marb20">
              <label>用&nbsp;户&nbsp;名</label>
              <input
                name="account_l"
                id="account_l"
                type="text"
                v-model="userName"
                @focus="errorUnshow"
                placeholder="手机号/账号"
              />
            </div>
            <p class="error-text" v-show="userNameError">{{userNameError}}</p>
            <div class="form-group marb8">
              <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
              <input
                name="password_l"
                id="password_l"
                type="password"
                v-model="parseWord"
                @focus="errorUnshow"
                placeholder="请输入您的密码"
              />
            </div>
            <p class="error-text" v-show="parseWordError">{{parseWordError}}</p>
            <!--        <div class="error btns login-form-tips" id="jsLoginTips" v-show="error"><p>用户名或密码错误</p></div> -->
            <div class="auto-box marb38"></div>
            <p class="error-text" v-show="error">{{error}}</p>
            <input
              class="btn btn-green"
              id="jsLoginBtn"
              type="button"
              @click="login"
              value="立即登录 &gt; "
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cookie from "../static/js/cookie";
import { loginApi } from "../api/api";
export default {
  data() {
    return {
      userName: "",
      parseWord: "",
      autoLogin: false,
      error: false,
      userNameError: "",
      parseWordError: ""
    };
  },
  methods: {
    login() {
      var that = this;
      loginApi({
        username: this.userName,
        password: this.parseWord
      })
        .then(response => {
          console.log(response);
          //本地存储用户信息
          cookie.setCookie("username", this.userName, 7);
          cookie.setCookie("token", response.data.token, 7);
          that.$store.dispatch("setInfo");
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

      //      this.$http.post('/login', {
      //   params: {
      //     userName:this.userName,
      //     parseWord:this.parseWord,
      //   }
      // })
      //   .then((response)=> {
      //     console.log(response);
      //     //本地存储用户信息
      //     cookie.setCookie('name',response.data.info.name,7);
      //     cookie.setCookie('id',response.data.info.id,7)
      //     //存储在store
      //     // 更新store数据
      //     this.$store.dispatch('setInfo');

      //     //跳转到首页页面
      //     this.$router.push({ name: 'index'})

      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },
    errorUnshow() {
      this.error = false;
    }
  },
  created() {
    //清除缓存
    cookie.delCookie("token");
    cookie.delCookie("name");
    //重新触发store
    //更新store数据
    this.$store.dispatch("setInfo");
  }
};
</script>
