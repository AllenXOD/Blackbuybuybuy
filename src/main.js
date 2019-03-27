import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 全局样式
import style from './assets/statics/site/css/style.css'

const router = new VueRouter({
  routes: [

  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
