import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: { title: 'home', icon: 's-home', affix: true, noCache: true },
        component: () => import('@/views/home/index')
      }
    ]
  }
]
export const asyncRoutes = [
  {
    path: '/basic',
    component: Layout,
    redirect: '/basic/layout',
    meta: { title: 'basic', icon: 'menu' },
    children: [
      {
        path: 'layout',
        name: 'layout',
        component: () => import('@/views/basic/layout'),
        meta: {
          title: 'layout',
          roles: ['admin']
        }
      },
      {
        path: 'button',
        name: 'button',
        component: () => import('@/views/basic/button'),
        meta: {
          title: 'button',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/request',
    component: Layout,
    children: [
      {
        path: '',
        name: 'request',
        component: () => import('@/views/request/index'),
        meta: {
          title: 'request',
          icon: 's-promotion',
          noCache: true
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [...constantRoutes, ...asyncRoutes]
})
