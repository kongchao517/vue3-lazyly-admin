<!--
 * @ description:公共菜单
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 21:34:59
-->

<template>
  <div class="menu">
    <div class="menu_logo" @click="emit('update:isCollapse', isCollapse ? false : true)">
      <el-icon class="icon"><Ship /></el-icon>
      <div v-if="!isCollapse">lazyly-admin</div>
    </div>
    <el-menu :collapse="isCollapse" router :default-active="defaultActive" text-color="#1d1d1f">
      <MenuItem :routes="routes[0].children" />
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Ship } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
import MenuItem from './MenuItem';

defineProps({
  isCollapse: {
    type: Boolean,
    default: () => false,
  },
});
const emit = defineEmits(['update:isCollapse']);
const route = useRoute();
//  深层解构出路由地址
const {
  options,
  options: { routes },
} = useRouter();
console.log(options);
const defaultActive = computed(() => route.path);
</script>
<style scoped lang="scss">
.menu {
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  background: url('@assets/image/menu_bg.svg') no-repeat;
  background-size: cover;
  .menu_logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
    padding: 20px 0;
    .icon {
      font-size: 36px;
    }
    div {
      font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
    }
  }
}
:deep(.el-menu) {
  background: none;
  border: none;
  width: 100%;
  margin: 0 auto !important;
}
:deep(.el-menu--collapse) {
  padding-left: 15px;
}

:deep(.el-menu-item:hover) {
  background-color: rgba(250, 38, 90, 0.1);
}
:deep(.el-menu-item) {
  color: #ffffff;
}
:deep(.el-menu-item.is-active) {
  background-color: rgba(250, 38, 90, 0.1);
}
:deep(.el-sub-menu__title) {
  font-family: '微软雅黑', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: rgb(255 255 255 / 99.6%) !important;
  &:hover {
    background-color: rgba(250, 38, 90, 0.1);
  }
}

::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-thumb {
  background-color: #00000033;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}
</style>
