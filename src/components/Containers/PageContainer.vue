<template>
  <section class="page">
    <slot />
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "PageContainer",
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.page {
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 80vmin;
  min-height: 70vmax;
  padding: 1.5rem 0;
  text-align: left;

  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    margin: 0.5rem 0;
  }

  > hr {
    background-color: $primary;
    border: 0;
    height: 1px;
    margin: 1.5rem 0;
    opacity: 0.6;
  }
}
</style>
