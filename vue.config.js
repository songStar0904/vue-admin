// vue.config.js
// 自定义vue配置
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // 基本路径
  publicPath: '/',

  // 输出文件目录
  // outputDir: 'dist',

  // eslint-loader 是否在保存的时候检查
  // lintOnSave: true,

  // 单/多页面
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'vue-admin'
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },

  // css相关配置
  // css: {
  //   // 是否使用css分离插件 ExtractTextPlugin
  //   extract: true,
  //   // 开启 CSS source maps?
  //   sourceMap: false,
  //   // css预设器配置项
  //   loaderOptions: {},
  //   // 启用 CSS modules for all css / pre-processor files.
  //   modules: false
  // },

  pluginOptions: {},

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
