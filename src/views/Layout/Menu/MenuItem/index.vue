<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-14 18:47:25
-->
<template>
  <template v-for="item in routes" :key="item.path">
    <template v-if="item.children && item.children.length > 0">
      <el-sub-menu :index="item.path || ''" :disabled="!item.path">
        <template #title>
          <i :class="item.meta.icon ? 'iconfont ' + item.meta.icon : 'iconfont icon-liucheng-moren'" />
          <span class="title">{{ item.meta.title }}</span>
        </template>
        <MenuItem :routes="item.children" />
      </el-sub-menu>
    </template>
    <el-menu-item v-else :index="item.path || ''" :disabled="!item.path" :title="item.meta.title" @click="onTag(item)">
      <i :class="item.meta.icon ? 'iconfont ' + item.meta.icon : 'iconfont icon-liucheng-moren'" />
      <template #title>
        <span class="title">
          {{ item.meta.title }}
        </span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup>
import useStore from '@store';

defineProps({
  routes: {
    type: Array,
    default: () => [],
  },
});
const { tabData } = useStore();
const onTag = (item) => {
  tabData.addTab(item);
};
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
.title {
  padding: 0 10px;
}
.iconfont {
  font-size: 24px;
  color: #333333;
}
</style>
