import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  // persis: true, // 开启持久化
  state: () => ({
    count: 1,
  }),
  actions: {
    accumulate() {
      this.count++;
    },
  },
});
