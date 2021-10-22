import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)

let Login = () => import('../page/login/login.vue')

// 动态添加的组件路由
let Layout = () => import("../page/layout")
let Home = () => import("../page/home")

// 跟路由
let routes = [
  {
    path: '/login',
    component: Login,
    meta: {
      requireAuth: false
    }
  }
]

// 动态加载的路由
let dynamicRoute = [
  {
    path: '',
    name: 'Container',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: Home,
        component: Home,
        meta: {
          requireAuth: true,
          name:'首页'
        }
      }
    ]
  }
]

let router = new VueRouter({
  routes
})

// 判断是否登录是否有token
router.beforeEach((to, from, next) => {
  let token = store.state.userToken
  if (!token) {
    // 未登录
    if (to.matched.length !== 0 && !to.matched.some(item => item.meta.requireAuth)) {
      next()
    } else {
      next({ path: '/login' })
    }

  } else {
    // 用户登录 请求权限数据
    if (!store.state.menu.permissionsList) {
      store.dispatch('menu/GET_PERMISSIONS')
    }
    next()
  }
})
export {
  dynamicRoute
}

export default router