import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Layout, Icon, Drawer, Radio, Menu } from 'ant-design-vue'
import Auth from './directives/auth'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(Menu)
Vue.use(Auth)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
