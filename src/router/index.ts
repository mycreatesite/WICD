import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import top from "@/views/top.vue";
import designs from "@/views/designs.vue";
import cordings from "@/views/cordings.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "top",
    component: top,
  },
  {
    path: "/designs",
    name: "designs",
    component: designs,
  },
  {
    path: "/cordings",
    name: "cordings",
    component: cordings,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  // base: "/wp-content/themes/mycreate/pages/wicd/",
  base: process.env.BASE_URL,
  routes,
});

export default router;
