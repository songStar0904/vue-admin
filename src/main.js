import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/index'
import '@/styles/index.scss' // global css
import './permission' // permission control

import api from './api'

import elementUI from 'element-ui'
import './styles/element-variables.scss'
Vue.use(api)
Vue.use(elementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
