import { defineComponent } from "@vue/runtime-core";
import ReachStore from "../reach/store";

const ReachStoreMixin = defineComponent({
  data(): any {
    return {
      reachStore: {},
      unsubscribeReachStore: null,
    };
  },

  mounted() {
    this.unsubscribeReachStore = ReachStore.subscribe(this.onReachStoreUpdate);
  },

  beforeUnmount() {
    this.unsubscribeReachStore();
  },

  methods: {
    /** Respond to updates from `Reach` store instance */
    onReachStoreUpdate(store: any, updatedKeys: string[]) {
      const keys = Object.keys(this.reachStore);
      const updates: any = {};

      keys.forEach((k) => {
        if (!updatedKeys.includes(k)) return;
        updates[k] = store[k];
      });

      if (Object.keys(updates).length > 0) {
        this.reachStore = { ...this.reachStore, ...updates };
      }
    },
  },
});

export default ReachStoreMixin;
