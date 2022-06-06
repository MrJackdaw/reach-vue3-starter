<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "BlockQuote",
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

blockquote {
  border-left: 0.4rem solid $primary;
  padding-left: 0.4rem;
  border: 0.01rem solid #ccc1;
}
</style>
