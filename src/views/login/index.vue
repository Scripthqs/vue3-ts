<template>
  <div class="main">
    <login class="login"></login>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "./components/login.vue";

export default defineComponent({
  components: {
    Login,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
.login {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
