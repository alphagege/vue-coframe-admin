/*
 * @Descriptions:
 * @Version:
 * @Author:
 * @Date: 2020-12-10 10:24:19
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-11 15:54:09
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入插件
import './plugins'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#vue-admin-coframe')
