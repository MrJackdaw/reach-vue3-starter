<template>
  <span class="material-icons">{{ icon }}</span>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Icon",
  props: { icon: String },
});
</script>
