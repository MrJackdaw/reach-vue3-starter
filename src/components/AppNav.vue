<template>
  <header>
    <img class="logo" alt="Vue logo" src="../assets/logo.png" />

    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <connect-wallet />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConnectWallet from "./Reach/ConnectWallet.vue";

export default defineComponent({
  name: "AppNav",

  components: { ConnectWallet },
});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

header {
  @include flex($content-align: space-between);
  background-color: #000;
  height: 10vmin;
  padding: 0.4rem;
  width: 100vw;

  .logo {
    height: 8vmin;
    width: 8vmin;
  }

  a {
    font-weight: bolder;
  }
}
</style>
