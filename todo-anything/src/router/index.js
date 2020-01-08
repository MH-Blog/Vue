import Vue from 'vue'
import VueRouter from 'vue-router'
import Thing from '../views/Thing.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'thing',
    component: Thing
  },
  {
    path: "/article",
    name: "article",
    component: () => import('../views/Article.vue')
  },
  {
    path: "/link",
    name: "link",
    component: () => import('../views/Link.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue'),
    children: [{
      path: '/login',
      name: 'login',
      component: () => import('../views/User/Login.vue')
    }, {
      path: '/register',
      name: 'register',
      component: () => import('../views/User/Register.vue')
    }, {
      path: '/forget',
      name: 'forget',
      component: () => import('../views/User/Forget.vue')
    }, {
      path: '/usercenter',
      name: 'usercenter',
      component: () => import('../views/User/UserCenter.vue')
    }]
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router