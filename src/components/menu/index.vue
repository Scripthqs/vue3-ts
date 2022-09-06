<template>
  <!-- <div>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <span>User</span>
          </span>
        </template>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <span>Team</span>
          </span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </div> -->

  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <div v-for="item in menuData" :key="item.id">
      <a-sub-menu :key="item.path" v-if="item.children && item.children.length">
        <template #title>
          <span>
            <span>{{ item.name }}</span>
          </span>
        </template>
        <div v-for="s in item.children" :key="s.id">
          <a-menu-item :key="s.path" @click="pathTo(s.path)">
            {{ s.name }}
          </a-menu-item>
        </div>
      </a-sub-menu>

      <a-menu-item :key="item.path" @click="pathTo(item.path)" v-else>
        <span>{{ item.name }}</span>
      </a-menu-item>
    </div>
  </a-menu>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    const menuData = [
      {
        name: "测试",
        id: "1",
        children: [
          { name: "欢迎", path: "/welcome", id: "1-1" },
          { name: "测试", path: "/test", id: "1-2" },
        ],
      },
      {
        name: "上传图片",
        id: "2",
        children: [
          { name: "说明", path: "/cropper", id: "2-1" },
          { name: "测试", path: "/upImg", id: "2-2" },
        ],
      },
    ];

    const pathTo = (path: string) => {
      router.push(path);
    };
    return {
      selectedKeys: ref<string[]>(["1"]),
      openKeys: ref<string[]>(["sub1"]),
      menuData,
      pathTo,
    };
  },
});
</script>

<style lang="scss" scoped></style>
