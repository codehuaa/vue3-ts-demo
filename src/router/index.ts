import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '/goods',
        name: 'goods',
        meta: {
          isShow: true,    // 控制该路由是否要在主界面侧边栏生成导航  
          title: '商品列表' 
        },
        component: () => import('../views/GoodsView.vue')
      },
      {
        path: '/users',
        name: 'users',
        meta: {
          isShow: true,    // 控制该路由是否要在主界面侧边栏生成导航   
          title: '用户列表'
        },
        component: () => import('../views/UserView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  let isAuth = true
  if (!localStorage.getItem('token')) isAuth = false
  /**
   * 未登录用户前往非login页，强制跳转至login
   * 已登录用户前往login页，返回上一页
   * "/"与"/home"绑定
   */
  if (to.name != 'login' && !isAuth) return "/login"
  if (to.name == 'login' && isAuth) history.back()
  if (to.path == '/') return '/home'

  return true;
})

export default router
