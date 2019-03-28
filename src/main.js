import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 全局样式
import './assets/statics/site/css/style.css'

// 组件
import index from './components/index.vue'
import shopCart from './components/shopCart.vue'
import detail from './components/detail.vue'
import axios from 'axios'
// 设置默认Url前缀
axios.defaults.baseURL = "http://111.230.232.110:8899";
Vue.prototype.$axios = axios;

import jx from './components/jx.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/jx',
      component: jx
    },
    {
      path: '/shopCart',
      component: shopCart
    },
    {
      path: '/detail/:id', // 传入商品 id
      component: detail
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
