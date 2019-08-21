// https://webpack.js.org/guides/dependency-management/#requirecontext
const apiFiles = require.context('./apis', true, /\.js$/)
const apiObj = apiFiles.keys().reduce((apiObj, objPath) => {
  // set './app.js' => 'app'
  const apiName = objPath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = apiFiles(objPath)
  apiObj[apiName] = value
  return apiObj
}, {})
const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  // 定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get () {
        return apiObj
      }
    }
  })
}

export default {
  install
}
