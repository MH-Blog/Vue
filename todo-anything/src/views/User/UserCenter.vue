<template>
  <div class="main">
    <table width="100%" border="0" cellpadding="5" cellspacing="1">
      <tbody>
        <tr>
          <td width="28%" align="right">昵 称：</td>
          <td width="72%" align="left">
            <input
              name="email"
              type="text"
              placeholder
              size="25"
              class="inputBg"
              v-model="userInfo.nick_name"
            />
          </td>
        </tr>
        <tr>
          <td width="28%" align="right">性 别：</td>
          <td width="72%" align="left">
            <input
              type="radio"
              id="male"
              value="male"
              v-model="userInfo.gender"
            />
            <label for="male">男</label>
            <input
              type="radio"
              id="female"
              value="female"
              v-model="userInfo.gender"
            />
            <label for="female">女</label>
          </td>
        </tr>
        <tr>
          <td width="28%" align="right">邮 箱：</td>
          <td width="72%" align="left">
            <input
              disabled
              name="email"
              type="text"
              placeholder="xxxx@xx.com"
              size="25"
              class="inputBg"
              v-model="userInfo.email"
            />
          </td>
        </tr>
        <tr>
          <td width="28%" align="right">格 言：</td>
          <td width="72%" align="left">
            <input
              name="email"
              type="text"
              placeholder
              size="25"
              class="inputBg"
              v-model="userInfo.desc"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <!-- <input name="act" type="hidden" value="act_edit_profile"> -->
            <button class="btn_blue" style="border:none;" @click="logout">
              退出
            </button>
            <button
              class="btn_blue"
              style="border:none;"
              @click="confirmModify"
            >
              确认修改
            </button>
            <!-- <input name="submit" type="submit" value="确认修改" class="btn_blue_1" style="border:none;"> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import cookie from "../../static/js/cookie";
import { getUserDetail, updateUserInfo } from "../../api/api";
export default {
  data() {
    return {
      userInfo: {
        nick_name: "",
        gender: "",
        email: "",
        desc: ""
      }
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    logout() {
      var r = confirm("是否退出？");
      if (r == true) {
        cookie.delCookie("token");
        cookie.delCookie("username");
        //重新触发store
        //更新store数据
        this.$store.commit("setUserInfo");
      } else {
        alert("取消退出");
      }
    },
    getUserInfo() {
      //请求用户信息
      getUserDetail().then(response => {
        this.userInfo = response.data;
      });
    },
    confirmModify() {
      // 确认修改
      updateUserInfo(this.userInfo).then(() => {
        alert("修改成功");
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.avatar {
  width: 50px;
  border-radius: 25px;
}

.btn_blue {
  margin: 0 10px;
}
</style>
