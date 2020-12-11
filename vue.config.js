/*
 * @Descriptions:
 * @Version:
 * @Author:
 * @Date: 2020-12-10 11:14:40
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-11 15:02:03
 */
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  title,
  abbreviation,
  devPort,
  build7z,
  donation,
} = require('./src/config')

const {
  webpackBarName,
  webpackBanner,
  donationConsole,
} = require('./src/py-layouts')
if (donation) donationConsole()

const { version, author } = require('./package.json')

const Webpack = require('webpack')
const WebpackBar = require('webpackbar')

const FileManagerPlugin = require('filemanager-webpack-plugin')

const dayjs = require('dayjs')
const date = dayjs().format('YYYY_M_D')
const time = dayjs().format('YYYY-M-D HH:mm:ss')

process.env.VUE_APP_TITLE = title || 'vue-admin-coframe'
process.env.VUE_APP_AUTHOR = author || 'dongwj@primeton.com'
process.env.VUE_APP_UPDATE_TIME = time
process.env.VUE_APP_VERSION = version

module.exports = {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  devServer: {
    hot: true,
    port: devPort,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
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
    // 移除 preload 插件
    config.plugins.delete('preload')
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    config.when(process.env.NODE_ENV !== 'development', (config) => {
      config.performance.set('hints', false)
      config.devtool('none')
      config
        .plugin('banner')
        .use(Webpack.BannerPlugin, [`${webpackBanner}${time}`]) // 打包版权声明
        .end()
    })

    if (build7z) {
      config.when(process.env.NODE_ENV === 'production', (config) => {
        config
          .plugin('fileManager')
          .use(FileManagerPlugin, [
            {
              onEnd: {
                archive: [
                  {
                    source: `./${outputDir}`,
                    destination: `./${outputDir}/${abbreviation}_${outputDir}_${date}.7z`,
                  },
                ],
              },
            },
          ])
          .end()
      })
    }
  },
  runtimeCompiler: true,
  productionSourceMap: false,
}
