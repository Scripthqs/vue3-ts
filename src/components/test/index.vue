<template>
  <a-space direction="vertical">
    <a-typography-text>Ant Design Vue (default)</a-typography-text>
    <a-typography-text type="secondary">Ant Design Vue (secondary)</a-typography-text>
    <a-typography-text type="success">Ant Design Vue (success)</a-typography-text>
    <a-typography-text type="warning">Ant Design Vue (warning)</a-typography-text>
    <a-typography-text type="danger">Ant Design Vue (danger)</a-typography-text>
    <a-typography-text disabled>Ant Design Vue (disabled)</a-typography-text>
    <a-typography-text mark>Ant Design Vue (mark)</a-typography-text>
    <a-typography-text code>Ant Design Vue (code)</a-typography-text>
    <a-typography-text keyboard>Ant Design Vue (keyboard)</a-typography-text>
    <a-typography-text underline>Ant Design Vue (underline)</a-typography-text>
    <a-typography-text delete>Ant Design Vue (delete)</a-typography-text>
    <a-typography-text strong>Ant Design Vue (strong)</a-typography-text>
    <a-typography-link href="https://antdv.com" target="_blank">
      Ant Design Vue (Link)
    </a-typography-link>
  </a-space>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
