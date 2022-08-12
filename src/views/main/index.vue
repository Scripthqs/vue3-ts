<template>
  <a-layout>
    <a-layout-header class="header">
      <appHeader></appHeader>
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="sider" v-model:collapsed="collapsed" collapsible>
        <appMenu></appMenu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <appBreadcrumb></appBreadcrumb>
        <a-layout-content class="content">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import appHeader from "@/components/header/index.vue";
import appMenu from "@/components/menu/index.vue";
import appBreadcrumb from "@/components/breadcrumb/index.vue";
export default defineComponent({
  components: {
    appHeader,
    appMenu,
    appBreadcrumb,
  },
  setup() {
    return {
      collapsed: ref<boolean>(false),
    };
  },
});
</script>
<style scoped lang="scss">
.content {
  background: #fff;
  padding: 24px;
  margin: 0;
  height: 100%;
}
.sider {
  overflow: auto;
  height: 100vh;
  width: 200px;
}

.header {
  background: #fff;
}
</style>
