import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 组件
import index from "./components/index.vue";
import shopCart from "./components/shopCart.vue";
import detail from "./components/detail.vue";
import userVip from "./components/userVip.vue";
import userIndex from "./components/userIndex.vue";
import userOrder from "./components/userOrder.vue";
import userDetail from "./components/userDetail.vue";

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

export default router;