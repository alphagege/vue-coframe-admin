/*
 * @Descriptions: 代码模板生成
 * @Version:
 * @Author:
 * @Date: 2020-12-10 14:33:07
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-11 10:44:36
 */
const componentGenerator = require('py-templates/component/prompt')
const viewGenerator = require('py-templates/view/promot')
const vuexGenerator = require('py-templates/vuex/promot')

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('vuex', vuexGenerator)
}
