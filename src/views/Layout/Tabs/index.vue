<!--
 * @ description:公共面包屑
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-14 17:34:48
-->
<template>
  <el-scrollbar style="height: 50px">
    <div class="tabs">
      <el-tag
        v-for="(item, index) in tabData.tabMenuData"
        :key="item.path + index"
        class="mx-1"
        :effect="item.path === route.path ? 'dark' : 'light'"
        closable
        :type="item.path === route.path ? '' : 'success'"
        :disable-transitions="false"
        @click="onTag(item.path)"
        @close="handleClose(item.path)"
      >
        {{ item.meta.title }}
      </el-tag>
    </div>
  </el-scrollbar>
</template>

<script setup>
import useStore from '@store';
import { useRoute, useRouter } from 'vue-router';

const { tabData } = useStore();

const route = useRoute();
const router = useRouter();
console.log('route', route);
const handleClose = (path) => {
  tabData.removeTab(path);
};
const onTag = (path) => {
  router.push(path);
};
</script>
<style scoped lang="scss">
.tabs {
  display: flex;
  padding: 5px 0;
  cursor: pointer;
  .mx-1 {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
  }
}
</style>
