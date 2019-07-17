import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'

// 引入公共scss
import './scss/reset.scss'; 

Vue.config.productionTip = false

Vue.prototype.$bus =new Vue()
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'img/timg.gif',
  loading: 'img/timg.gif',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
