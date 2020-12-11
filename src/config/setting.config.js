/*
 * @Descriptions:
 * @Version:
 * @Author:
 * @Date: 2020-12-11 09:21:28
 * @LastEditors: dongwenjie
 * @LastEditTime: 2020-12-11 15:00:07
 */
const setting = {
  // 开发以及部署时的URL
  publicPath: '',
  // 生产环境构建文件的目录名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: false,
  // 标题 （初次加载标题 页面的标题 浏览器的标题）
  title: 'vue-admin-coframe',
  // 简写
  abbreviation: 'coframe',
  // 开发环境端口号
  devPort: '9999',
  // npm run build时是否自动生成7z压缩包
  build7z: true,
  // 代码生成机生成在view下的文件夹名称
  templateFolder: 'project',
  // 是否显示终端donation打印
  donation: true,
}

module.exports = setting
