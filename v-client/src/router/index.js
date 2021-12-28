import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const home = () => import('@/pages/home')
const follow = () => import('@/pages/home/follow')
const hotRank = () => import('@/pages/home/hot-rank')
const video = () => import('@/pages/home/video')
const recommend = () => import('@/pages/home/recommend')

const discover = () => import('@/pages/discover')
const vip = () => import('@/pages/vip')
const answer = () => import('@/pages/answer')


const login = () => import('@/pages/login')
const myHomePage = () => import('@/pages/myHomePage')
const creation = () => import('@/pages/creation')
const setting = () => import('@/pages/setting')
const register = () => import('@/pages/register')

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: "/login",
    name: "登录",
    component: login
  },
  {
    path: "/home",
    name: "主页",
    component: home,
    children: [
      {
        path: "/home",
        name: "推荐",
        component: recommend,
      },
      {
        path: "/follow",
        name: "关注",
        component: follow,
      },
      {
        path: "/hot-rank",
        name: "热榜",
        component: hotRank,
      },
      {
        path: "/video",
        name: "视频",
        component: video,
      }
    ]
  },
  {
    path: '/vip',
    name: "会员",
    component: vip
  },
  {
    path: '/discover',
    name: "发现",
    component: discover
  },
  {
    path: '/answer',
    name: "等你来答",
    component: answer
  },
  {
    path: '/myHomePage',
    name: "我的主页",
    component: myHomePage
  },
  {
    path: '/creation',
    name: "创作中心",
    component: creation
  },
  {
    path: '/setting',
    name: "设置",
    component: setting
  },
  {
    path: '/register',
    name: "注册",
    component: register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router