const route: Array<any> = [
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/components/test/welcome.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/test/index.vue"),
  },
];
export default route;
