import cookie from '../static/js/cookie';
import {
  getThing,
  getArticle,
  getLink
} from '../api/api'

export default {
  // 设置用户信息数据
  setUserInfo(state) {
    state.userInfo = {
      username: cookie.getCookie('username'),
      token: cookie.getCookie('token')
    }
  },
  // 设置待办事项数据
  setThingList(state) {
    if (cookie.getCookie('token') != null) {
      getThing().then((response) => {
        // 更新store数据
        state.thing_list = response.data;
      }).catch(() => {});
    }
  },
  // 设置文章清单数据
  setArticleList(state) {
    if (cookie.getCookie('token') != null) {
      getArticle().then((response) => {
        // 更新store数据
        state.article_list = response.data;
      }).catch(() => {});
    }
  },

  // 设置网址导航数据
  setLinkList(state) {
    if (cookie.getCookie('token') != null) {
      getLink().then((response) => {
        // 更新store数据
        state.link_list = response.data;
      }).catch(() => {});
    }
  },
}