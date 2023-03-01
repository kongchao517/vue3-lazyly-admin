<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:47:24
-->
<template>
  <template v-for="item in routes" :key="item.path">
    <template v-if="item.children && item.children.length > 0">
      <el-sub-menu :index="item.path || ''" :disabled="!item.path">
        <template #title>
          <i v-if="item.icon" class="iconfont layout-icon-size" :class="item.icon" />
          <el-icon v-else><Check /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <MenuItem :routes="item.children" />
      </el-sub-menu>
    </template>
    <el-menu-item v-else :index="item.path || ''" :disabled="!item.path" :title="item.meta.title">
      <i v-if="item.icon" class="iconfont layout-icon-size" :class="item.icon" />
      <el-icon v-else><Check /></el-icon>
      <template #title>{{ item.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup>
import { Check } from '@element-plus/icons-vue';

defineProps({
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
