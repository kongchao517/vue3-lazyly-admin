<!--
 * @ description:公共头部
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-15 10:28:08
-->
<template>
  <div class="head_box">
    <div class="head_box_item">
      <i :class="isCollapse ? 'iconfont icon-zhankai-' : 'iconfont icon-shouqi'" @click="toggle" />
    </div>
    <div class="head_box_item">
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="onExit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import useStore from '@store';
import { computed } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: () => false,
  },
});

const store = useStore();
const emits = defineEmits(['update:isCollapse']);
const isColl = computed({
  get() {
    return props.isCollapse;
  },
  set(val) {
    return emits('update:isCollapse', val);
  },
});
const router = useRouter();
const toggle = () => {
  isColl.value = !isColl.value;
};
const onExit = () => {
  router.push('/login');
  store.tabData.tabMenuData = [];
};
</script>
<style scoped lang="scss">
.head_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 0 20px;
  border-bottom: 1px solid rgb(233 233 233);
  cursor: pointer;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
:focus {
  outline: 0;
}
</style>
