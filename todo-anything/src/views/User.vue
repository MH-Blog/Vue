<template>
  <div class="main">
    <Login v-if="userInfo.username == ''"></Login>
    <div v-else>
      <p>{{userInfo.username}}</p>
      <button @click="logout">退出</button>
    </div>
  </div>
</template>
<script>
import cookie from "../static/js/cookie";
import { mapState } from "vuex";
import Login from "../views/Login";
export default {
  data() {
    return {};
  },
  components: {
    Login
  },
  computed: {
    ...mapState({
      userInfo: "userInfo"
    })
  },
  methods: {
    logout() {
      cookie.delCookie("token");
      cookie.delCookie("username");
      //重新触发store
      //更新store数据
      this.$store.commit("setUserInfo");
      console.log(this.$store.state.userInfo);
    }
  }
};
</script>