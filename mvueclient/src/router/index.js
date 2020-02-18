import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/msite"
  }, {
    path: "/msite",
    component: () => import("../views/MSite/MSite.vue")
  },
  {
    path: "/order",
    component: () => import("../views/Order/Order.vue")
  },
  {
    path: "/profile",
    component: () => import("../views/Profile/Profile.vue")
  },
  {
    path: "/search",
    component: () => import("../views/Search/Search.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
})

export default router