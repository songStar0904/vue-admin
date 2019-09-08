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
        meta: { title: 'home', icon: 's-home', affix: true },
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
    path: '/test',
    component: Layout,
    redirect: '/test/component',
    meta: { title: 'test', icon: 'menu' },
    children: [{
      path: 'component',
      name: 'component',
      component: () => import('@/views/test/component'),
      meta: {
        title: 'component',
        roles: ['admin']
      }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...constantRoutes, ...asyncRoutes]
})
