<!--
 * @Descripttion:公共菜单
 * @Author: lazyly
 * @Date: 2023-01-12 21:54:39
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 19:09:23
-->
<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
		<el-radio-button :label="false">expand</el-radio-button>
		<el-radio-button :label="true">collapse</el-radio-button>
	</el-radio-group> -->
  <div class="menu">
    <div class="menu_logo" @click="(isCollapse = !isCollapse), emit('update:isCollapse', isCollapse);">
      <el-icon class="icon"><Ship /></el-icon>
      <div v-if="!isCollapse">力扣</div>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
      :default-active="defaultActive"
      text-color="#1d1d1fcc"
      :collapse-transition="false"
    >
      <MenuItem :routes="routes[0].children" />
    </el-menu>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Ship } from '@element-plus/icons-vue';
import MenuItem from './MenuItem';
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: () => false,
  },
});
const emit = defineEmits(['update:isCollapse']);
const route = useRoute();
//深层解构出路由地址
const {
  options,
  options: { routes },
} = useRouter();
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
    position: relative;
    top: 25px;
    width:50px;
    height: 115px;
    margin: auto;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    z-index: 1;
    width: 200px;
    height: calc(100vh - 115px);
  }
}
:deep(.el-menu) {
  background: none;
  border: none;
}
:deep(.el-sub-menu__title) {
  font-family: '微软雅黑', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: rgb(255 255 255 / 99.6%);
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #00000033;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}
</style>
