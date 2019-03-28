import Vue from "vue";
import App from "./App.vue";

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


import axios from "axios";
// 设置默认Url前缀
axios.defaults.baseURL = "http://111.230.232.110:8899";
// 抽取axios 通过原型全局化
Vue.prototype.$axios = axios;

// 导入路由
import router from './router.js'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
