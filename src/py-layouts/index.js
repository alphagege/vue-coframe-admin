module.exports = {
  webpackBarName: 'vue-admin-coframe',
  webpackBanner:
    ' build: vue-admin-coframe \n copyright: dongwenjie dongwj@primeton.com \n time: ',
  donationConsole() {
    const chalk = require('chalk')
    console.log(
      chalk.green(
        `> 欢迎使用vue-admin-coframe（本框架技术栈采用vue2.x、elementui、vue-router、vuex等火热技术搭建）`
      )
    )
    console.log(
      chalk.green(`> vue中文官方文档（https://cn.vuejs.org/v2/guide/）`)
    )
    console.log(chalk.green(`> vuex中文官方文档（https://vuex.vuejs.org/zh/）`))
    console.log(
      chalk.green(
        `> elementui官方文档（https://element.eleme.cn/#/zh-CN/component/installation）`
      )
    )
    console.log(
      chalk.green(
        `> 使用中出现任何问题可加邮箱反馈（dongwj@primeton.com）获取文档`
      )
    )
    console.log(chalk.green(`> 如果您不希望显示以上信息，可在设置中配置关闭`))
    console.log('\n')
  },
}
