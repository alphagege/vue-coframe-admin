/*
 * @Descriptions:路由入口模块
 * @Version:
 * @Author:
 * @Date: 2020-12-10 11:14:40
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-17 14:25:07
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    component: () => import('../views/test'),
  },
]
const router = new VueRouter({
  routes,
})

export default router
