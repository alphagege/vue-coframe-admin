/*
 * @Descriptions:
 * @Version:
 * @Author:
 * @Date: 2020-12-10 10:24:19
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-10 11:03:26
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
