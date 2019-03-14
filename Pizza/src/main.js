import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
// 打开 main.js
import Bmob from "hydrogen-js-sdk";

// 初始化
Bmob.initialize("be085c920a6a1bd81be424fbcc0fc32f", "050f90d9d82b345783830b6cb1005cee");

// 挂载到全局使用
Vue.prototype.Bmob = Bmob

Vue.use(VueRouter)

// 配置数据传输地址
axios.defaults.baseURL = "https://wd2468178309upkmpi.wilddogio.com/"
// 1.创建组件
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

// 2.配置路由 注意名字
const routes = [{
		path: '/',
		name: 'homeLink',
		components: {
			default: Home,
			'orderingGuide': OrderingGuide,
			'delivery': Delivery,
			'history': History
		}
	},
	{
		path: '/menu',
		name: 'menuLink',
		component: Menu
	},
	{
		path: '/admin',
		name: 'adminLink',
		component: Admin,
		// 路由独享守卫
		// 		beforeEnter:(to,from,next)=>{
		// 			alert('非登录状态,不能访问此页面!');
		// 			next(false);
		// }
	},
	{
		path: '/login',
		name: 'loginLink',
		component: Login
	},
	{
		path: '/register',
		name: 'registerLink',
		component: Register
	},
	{
		path: '/about',
		name: 'aboutLink',
		redirect: '/contact',
		component: About,
		children: [{
				path: '/contact',
				name: 'contactLink',
				component: Contact,
				redirect: '/phone',
				children: [{
						path: '/phone',
						name: 'phoneNumber',
						component: Phone
					},
					{
						path: '/personname',
						name: 'personName',
						component: PersonName
					}
				]
			},
			{
				path: '/history',
				name: 'historyLink',
				component: History
			},
			{
				path: '/delivery',
				name: 'deliveryLink',
				component: Delivery
			},
			{
				path: '/orderingGuide',
				name: 'orderingGuideLink',
				component: OrderingGuide
			}
		]
	},
	{
		path: '*',
		redirect: '/'
	}


]

// 3.实例化VueRouter
const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savePosition) {
// 		return {
// 			//通过坐标值选择
// 			x: 0,
// 			y: 100
// 		}
// 		return {
// 			//通过标签选择
// 			selector: '.btn'
// 		}
// 		if (savePosition) {
// 			return savePosition
// 		} else {
// 			return {
// 				x: 0,
// 				y: 0
// 			};
// 		}

	}
})


//全局守卫
// router.beforeEach((to, from, next) => {
// 	// 	alert('还没有登录,请先登录!');
// 	// 	next();
// 	// 	console.log(to);
// 
// 	// 判断store.gettes.isLogin === false
// 	if (to.path == '/login' || to.path == '/register') {
// 		next();
// 	} else {
// 		alert('还没有登录,请先登录!');
// 		next('/login');
// 	}
// })

// 后置钩子
// router.afterEach((to,from)=>{
// 	alert('after each')
// })



new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
