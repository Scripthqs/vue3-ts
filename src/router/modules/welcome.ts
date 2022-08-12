const route: Array<any> = [
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/components/welcome/index.vue"),
  },
];
export default route;
