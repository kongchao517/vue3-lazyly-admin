<!--
 * @ description:公共面包屑
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-16 15:31:32
-->
<template>
  <el-scrollbar class="tab-box">
    <TransitionGroup key="dd" tag="ul" name="fade" class="tabs">
      <el-tag
        v-for="(item, index) in tabData"
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
    </TransitionGroup>
  </el-scrollbar>
</template>

<script setup>
import useStore from '@store';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const tabData = computed(() => store.tabData.tabMenuData);
const route = useRoute();
const router = useRouter();
const onTag = (path) => {
  router.push(path);
};
const handleClose = (path) => {
  store.tabData.removeTab(path);
  const presentTab = route.matched?.slice(-1)[0]?.path;
  if (presentTab === path) router.push(tabData.value[0]?.path || '/');
};
</script>
<style scoped lang="scss">
.tab-box {
  position: relative;
  top: -10px;
  .tabs {
    display: flex;
    padding: 5px 15px;
    cursor: pointer;
    .mx-1 {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
    }
  }
}
:deep(.el-scrollbar__bar.is-horizontal) {
  height: 3px;
}
:deep(.el-scrollbar__bar.is-vertical) {
  width: 0;
}
:deep(.el-scrollbar__wrap) {
  height: none;
}
/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
          以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
