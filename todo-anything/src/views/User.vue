<template>
  <div class="main">
    <Login v-if="!userInfo.token"></Login>
    <div v-else>
      <UserCenter></UserCenter>
    </div>
  </div>
</template>
<script>
import cookie from "../static/js/cookie";
import { mapState } from "vuex";
import Login from "../views/User/Login";
import UserCenter from "../views/User/UserCenter";
export default {
  data() {
    return {};
  },
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    };
  },
  components: {
    Login,
    UserCenter
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
    }
  }
};
</script>
<style lang="stylus" scoped>
.header {
}
</style>
