const route: Array<any> = [
  {
    path: "/upImg",
    name: "upImg",
    component: () => import("@/components/upImg/index.vue"),
  },
  {
    path: "/cropper",
    name: "cropper",
    component: () => import("@/components/upImg/cropper.vue"),
  },
];
export default route;
