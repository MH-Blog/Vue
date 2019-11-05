import Vue from 'vue'
import Router from 'vue-router'
import findLast from 'lodash/findLast'
import {
  notification
} from 'ant-design-vue'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import NotFound from '../views/404.vue'
import Forbidden from '../views/403.vue'

import {
  check,
  isLogin
} from '../utils/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/user',
      hideInMenu: true,
      hideChildrenInMenu: true,
      component: () => import( /* webpackChunkName:"layout" */ '../layouts/UserLayout.vue'),
      children: [{
        path: '/user',
        redirect: '/user/login'
      }, {
        path: '/user/login',
        name: 'login',
        component: () =>
          import( /* webpackChunkName:"user" */ '../views/User/Login.vue')
      }, {
        path: '/user/register',
        name: 'register',
        component: () =>
          import( /* webpackChunkName:"user" */ '../views/User/Register.vue')
      }]
    },
    {
      path: '/',
      meta: {
        authority: ['user', 'admin']
      },
      component: () => import( /* webpackChunkName:"layout" */ '../layouts/BasicLayout.vue'),
      children: [{
          path: '/',
          redirect: '/dashboard/analysis'
        },
        // dashboard
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: {
            icon: 'dashboard',
            title: '仪表盘'
          },
          component: {
            render: h => h('router-view')
          },
          children: [{
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: {
              title: '分析页'
            },
            component: () => import( /* webpackChunkName:"dashboard" */ '../views/Dashboard/Analysis.vue')
          }]
        },
        // form
        {
          path: '/form',
          name: 'form',
          meta: {
            icon: 'form',
            title: '表单',
            authority: ['admin']
          },
          component: {
            render: h => h('router-view')
          },
          children: [{
              path: '/form/basic-form',
              name: 'basicform',
              meta: {
                title: '基础表单'
              },
              component: () => import( /* webpackChunkName:"form" */ '../views/Forms/BasicForm.vue')
            },
            {
              path: '/form/step-form',
              name: 'stepform',
              meta: {
                title: '分步表单'
              },
              hideChildrenInMenu: true,
              component: () => import( /* webpackChunkName:"form" */ '../views/Forms/StepForm'),
              children: [{
                  path: '/form/step-form',
                  redirect: '/form/step-form/info'
                },
                {
                  path: '/form/step-form/info',
                  name: 'info',
                  component: () => import( /* webpackChunkName:"form" */ '../views/Forms/StepForm/StepOne.vue')
                },
                {
                  path: '/form/step-form/confirm',
                  name: 'confirm',
                  component: () => import( /* webpackChunkName:"form" */ '../views/Forms/StepForm/StepTwo.vue')
                },
                {
                  path: '/form/step-form/result',
                  name: 'result',
                  component: () => import( /* webpackChunkName:"form" */ '../views/Forms/StepForm/StepThree.vue')
                }
              ]
            }
          ]
        },
        {
          path: '/about',
          name: 'about',
          meta: {
            icon: 'form',
            title: '关于我们'
          },
          component: () =>
            import( /* webpackChunkName:"user" */ '../views/About.vue')
        }
      ]
    },
    {
      path: '/403',
      name: '403',
      hideInMenu: true,
      component: Forbidden
    },
    {
      path: '*',
      name: '404',
      hideInMenu: true,
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    Nprogress.start()
  }
  const record = findLast(to.matched, record => record.meta.authority)
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== '/user/login') {
      next({
        path: '/user/login'
      })
    } else if (to.path !== '/403') {
      notification.error({
        message: '403',
        description: '你没有权限，请联系管理员'
      })
      next({
        path: '/403'
      })
    }
    Nprogress.done()
  }
  next()
})

router.afterEach(() => {
  Nprogress.done()
})

export default router
