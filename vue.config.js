/*
 * @Descriptions:
 * @Version:
 * @Author:
 * @Date: 2020-12-10 11:14:40
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-11 14:16:22
 */
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const { donation } = require('./src/config')

const {
  webpackBarName,
  webpackBanner,
  donationConsole,
} = require('./src/py-layouts')
if (donation) donationConsole()

const Webpack = require('webpack')
const WebpackBar = require('webpackbar')

const dayjs = require('dayjs')
const time = dayjs().format('YYYY-M-D HH:mm:ss')

module.exports = {
  lintOnSave: false,
  configureWebpack() {
    return {
      resolve: {
        alias: {
          '@': resolve('src'),
        },
      },
      plugins: [
        new WebpackBar({
          name: webpackBarName,
        }),
      ],
    }
  },
  chainWebpack(config) {
    config.when(process.env.NODE_ENV !== 'development', (config) => {
      config.performance.set('hints', false)
      config.devtool('none')
      config
        .plugin('banner')
        .use(Webpack.BannerPlugin, [`${webpackBanner}${time}`]) // 打包版权声明
        .end()
    })
  },
}
