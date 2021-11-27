import { defineComponent } from "@vue/runtime-core";
import store from "../state/index";

const StoreMixin = defineComponent({
  data(): any {
    return {
      store: {},
      unsubscribeStore: null,
    };
  },

  beforeUnmount() {
    if (!this.unsubscribeStore) return;
    this.unsubscribeStore();
  },

  methods: {
    /** Respond to updates from global store instance */
    onStoreUpdate(updates: any) {
      this.store = { ...this.store, ...updates };
    },

    subscribe(keys: string[]) {
      this.unsubscribeStore = store.subscribeToKeys(this.onStoreUpdate, keys);
    },
  },
});

export default StoreMixin;
