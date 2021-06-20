import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./views/Index.vue"),
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: () => import("./views/Home.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/order",
      name: "order",
      component: () => import("./views/Order.vue")
    },
    {
      path: "/me",
      name: "me",
      component: () => import("./views/Me.vue")
    },
    {
      path: "/TheSlot",
      name: "TheSlot",
      component: () => import("./views/TheSlot.vue")
    },
    {
      path: "/Address",
      name: "Address",
      component: () => import("./views/Address.vue")
    }
  ]
});
// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false;
//   if (to.path == '/login') {
//     next();
//   } else {
//     // 是否在登录状态下
//     isLogin ? next() : next('/login');
//   }
// });

export default router;
