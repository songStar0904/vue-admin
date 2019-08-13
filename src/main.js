import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import '@/styles/index.scss' // global css

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
