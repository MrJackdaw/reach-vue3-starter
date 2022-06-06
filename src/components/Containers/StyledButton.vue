<template>
  <button><slot /></button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "StyledButton",
});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

button {
  background: $primary;
  border: 0;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin: 0 $md;
  padding: $xxs;
}
</style>
