/*
 * @Descriptions:
 * @Version:
 * @Author:
 * @Date: 2020-12-10 10:24:19
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-18 15:55:21
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from '../../store'
// 引入插件
import '../../plugins'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#vue-admin-coframe')
