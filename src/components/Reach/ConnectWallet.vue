<template>
  <button @click="toggleConnect">{{ connectButtonText }}</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { connectWallet } from "../../reach";
import ReachStoreMixin from "../../mixins/ReachStore.mixin";
import { truncateAccountString } from "../../reach/utils";
import ReachStore from "../../reach/store";

export default defineComponent({
  name: "ConnectWallet",

  mixins: [ReachStoreMixin],

  data: () => ({
    reachStore: {
      address: "",
    },
  }),

  computed: {
    connectButtonText(): string {
      return this.connected
        ? truncateAccountString(this.reachStore.address)
        : "Connect Wallet";
    },

    connected(): boolean {
      return this.reachStore.address.length > 0;
    },
  },

  methods: {
    toggleConnect() {
      if (!this.connected) {
        return connectWallet();
      }

      return ReachStore.reset();
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
