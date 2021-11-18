import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import store from '@/store'

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/newBooks',
    name: 'newBooks',
    meta: {
      title: '新书上市'
    },
    component: () => import('../components/BooksNew.vue')
  },
  {
    path: '/category/:id',
    name: 'category',
    meta: {
      title: '图书分类'
    },
    component: () => import('../views/Books.vue')
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      title: '搜索结果'
    },
    component: () => import('../views/Books.vue')
  },
  {
    path: '/book/:id',
    name: 'book',
    meta: {
      title: '图书'
    },
    component: () => import('../views/Book.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车'
    },
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    component: () => import(/* webpackChunkName: "user" */'../components/UserRegister.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "user" */'../components/UserLogin.vue')
  },
  {
    path: '/check',
    name: 'check',
    meta: {
      title: '结算',
      requiresAuth: true
    },
    component: () => import('../views/Checkout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//设置页面的标题
router.afterEach((to) => {
  document.title = to.meta.title;
})

router.beforeEach(to => {
  // 判断该路由是否需要登录权限
  if (to.matched.some(record => record.meta.requiresAuth))
  {
    // 路由需要验证，判断用户是否已经登录
    if(store.state.user.user){
      return true;
    }
    else{
      return {
        path: '/login',
        query: {redirect: to.fullPath}
      };
    }
  }
  else
    return true;
})

export default router
