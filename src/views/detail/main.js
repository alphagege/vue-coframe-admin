/*
 * @Descriptions:
 * @Version:
 * @Author:
 * @Date: 2020-12-18 15:42:19
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-18 15:53:55
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入插件
import '../../plugins'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#detail')
