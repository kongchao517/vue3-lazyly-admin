/*
 * @ description:标签路由切换
 * @ author: kongchao
 * @ created_at: 2023-03-14 14:35:40
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-14 17:27:26
 */
import { defineStore } from 'pinia';

export const useTagStore = defineStore('tag', {
  persis: true, // 开启持久化
  state: () => ({
    tabMenuData: [],
  }),
  actions: {
    addTab(tabItem) {
      console.log('this.tabMenuData', this.tabMenuData.length);
      this.tabMenuData.push(tabItem);
      const hash = {};
      this.tabMenuData = this.tabMenuData.reduce((item, next) => {
        if (!hash[next.path]) {
          hash[next.path] = true && item.push(next);
        }
        return item;
      }, []);
    },
    removeTab(tabItemPath) {
      this.tabMenuData = this.tabMenuData.filter((el) => el.path !== tabItemPath);
    },
  },
});
