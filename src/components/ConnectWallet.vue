<template>
  <styled-button @click="toggleConnect">{{ connectButtonText }}</styled-button>
</template>

<script>
import { checkSessionExists, truncateString } from "@jackcom/reachduck";
import { defineComponent } from "@vue/runtime-core";
import StoreMixin from "@/mixins/Store.mixin";
import {
  disconnectWallet,
  useMyAlgo,
  connectWallet,
  reconnectWallet,
} from "@/reach";
import StyledButton from "./Containers/StyledButton.vue";

export default defineComponent({
  name: "ConnectWallet",

  components: { StyledButton },

  mixins: [StoreMixin],

  data: () => ({
    store: { address: "" },
  }),

  computed: {
    connectButtonText() {
      return this.connected
        ? truncateString(this.store.address)
        : "Connect Wallet";
    },

    connected() {
      return this.store.address.length > 0;
    },
  },

  mounted() {
    const storeKeys = Object.keys(this.store);
    this.subscribe(storeKeys);
    // check for existing session
    const { exists, addr } = checkSessionExists();
    if (!exists) return;
    useMyAlgo();
    reconnectWallet(addr);
  },

  methods: {
    toggleConnect() {
      if (this.connected) return disconnectWallet();
      useMyAlgo();
      connectWallet();
    },
  },
});
</script>
