<template>
  <button @click="toggleConnect">{{ connectButtonText }}</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { disconnectUser, useMyAlgo } from "../../reach";
import StoreMixin from "../../mixins/Store.mixin";
import { truncateAccountString } from "../../reach/index";

export default defineComponent({
  name: "ConnectWallet",

  mixins: [StoreMixin],

  data: () => ({
    store: { address: "" },
  }),

  computed: {
    connectButtonText(): string {
      return this.connected
        ? truncateAccountString(this.store.address)
        : "Connect Wallet";
    },

    connected(): boolean {
      return this.store.address.length > 0;
    },
  },

  mounted() {
    const storeKeys = Object.keys(this.store);
    this.subscribe(storeKeys);
  },

  methods: {
    toggleConnect() {
      return this.connected ? disconnectUser() : useMyAlgo();
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../css/mixins.scss";

button {
  border: 0;
  border-radius: 4px;
  margin: 0 $md;
  padding: $xxs;
}
</style>
