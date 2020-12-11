/*
 * @Descriptions: 代码模板生成
 * @Version:
 * @Author:
 * @Date: 2020-12-10 14:33:07
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-11 08:34:09
 */
const componentGenerator = require('py-templates/component/prompt')
module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
}
