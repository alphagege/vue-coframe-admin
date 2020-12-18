/*
 * @Descriptions:路由入口模块
 * @Version:
 * @Author:
 * @Date: 2020-12-10 11:14:40
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-18 16:21:07
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/detail',
    component: () => import('../pages/list.vue'),
  },
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
