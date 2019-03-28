import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 导入ui插件
import ElementUI from "element-ui";
// 导入样式
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 全局样式
import "./assets/statics/site/css/style.css";
// 导入格式化时间插件moment.js
import moment from "moment";
// 全局过滤器
Vue.filter("globalFormatTime", function(value, fmtpl) {
  if (fmtpl) {
    return moment(value).format(fmtpl);
  } else {
    return moment(value).format("YYYY-MM-DD");
  }
});

// 组件
import index from "./components/index.vue";
import shopCart from "./components/shopCart.vue";
import detail from "./components/detail.vue";
import userVip from "./components/userVip.vue";
import userIndex from "./components/userIndex.vue";
import userOrder from "./components/userOrder.vue";
import userDetail from "./components/userDetail.vue";
import axios from "axios";
// 设置默认Url前缀
axios.defaults.baseURL = "http://111.230.232.110:8899";
// 抽取axios 通过原型全局化
Vue.prototype.$axios = axios;

import jx from "./components/jx.vue";

// 配置路由
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: index
    },
    {
      path: "/index",
      component: index
    },
    {
      path: "/jx",
      component: jx
    },
    {
      path: "/shopCart",
      component: shopCart
    },
    {
      path: "/detail/:id", // 传入商品 id
      component: detail
    },
    {
      path: "/userVip",
      component: userVip,
      children: [
        {
          path: "userIndex",
          component: userIndex
        },
        {
          path: "userOrder",
          component: userOrder
        },
        {
          path: "userDetail",
          component: userDetail
        }
      ]
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
