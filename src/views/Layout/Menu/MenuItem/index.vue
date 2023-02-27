<!--
 * @Descripttion:
 * @Author: lazyly
 * @Date: 2023-01-28 14:37:22
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 16:17:07
-->
<template>
  <template v-for="item in routes" :key="item.path">
    <template v-if="item.children && item.children.length > 0">
      <el-sub-menu :index="item.path || ''" :disabled="!item.path">
        <template #title>
          <i class="iconfont layout-icon-size" :class="item.icon" v-if="item.icon" />
          <el-icon v-else><Check /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <MenuItem :routes="item.children" />
      </el-sub-menu>
    </template>
    <el-menu-item :index="item.path || ''" :disabled="!item.path" :title="item.meta.title" v-else>
      <i class="iconfont layout-icon-size" :class="item.icon" v-if="item.icon" />
      <el-icon v-else><Check /></el-icon>
      <template #title>{{ item.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup>
import { ref } from 'vue';
import { Check } from '@element-plus/icons-vue';
const props = defineProps({
  routes: {
    type: Array,
    default: () => [],
  },
});
</script>
<script>
export default {
  name: 'MenuItem',
};
</script>
<style scoped lang="scss">
:deep(.el-sub-menu__title) {
  font-family: '微软雅黑', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: rgb(255 255 255 / 99.6%);
}
:deep(.el-menu) {
  background: none;
  border: none;
}
</style>
