<template>
  <styled-button type="button" @click="increment">
    <b>Clicked</b> <span>{{ count }}&nbsp;</span>
    <b>{{ timesPlural }}</b>
  </styled-button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import StoreMixin from "@/mixins/Store.mixin";
import store from "@/state";
import StyledButton from "./Containers/StyledButton.vue";

export default defineComponent({
  name: "GlobalCountButton",

  components: { StyledButton },

  mixins: [StoreMixin],

  data: () => ({ store: { count: store.getState().count } }),

  computed: {
    count() {
      return this.store.count;
    },
    timesPlural() {
      return this.count === 1 ? "time" : "times";
    },
  },

  mounted() {
    const storeKeys = Object.keys(this.store);
    this.subscribe(storeKeys);
  },

  methods: {
    increment() {
      const { count } = this.store;
      store.count(count + 1);
    },
  },
});
</script>
