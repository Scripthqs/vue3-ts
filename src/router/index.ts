import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import localCache from "@/utils/cache";

import welcome from "./modules/welcome";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/index.vue"),
    children: [...welcome],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  console.log(to);
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      return "/login";
    }

    // if (to.path === "/main") {
    //   // console.log(firstRoute);
    //   // return firstRoute?.path;
    // }
  }
});

export default router;
