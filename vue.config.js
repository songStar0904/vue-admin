// vue.config.js
// 自定义vue配置
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  productionSourceMap: false,

  devServer: {
    // 端口
    port: 8000,

    // 配置代理
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true
      }
    }
  },
  // webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
