import * as types from './mutation-types';
import cookie from '../static/js/cookie';
import {
  getThing
} from '../api/api'

export default {
  [types.SET_INFO](state) {
    state.userInfo = {
      username: cookie.getCookie('username'),
      token: cookie.getCookie('token')
    }
    console.log(state.userInfo);
  },
  getThingData(state) {
    if (cookie.getCookie('token') != null) {
      getThing().then((response) => {
        // 更新store数据
        state.thing_list = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
}
