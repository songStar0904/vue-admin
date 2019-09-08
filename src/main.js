import Vue from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import router from '@/router'
import store from '@/store/index'
import '@/styles/index.scss' // global css
import './permission' // permission control

import elementUI from 'element-ui'
import './styles/element-variables.scss'
Vue.use(elementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
