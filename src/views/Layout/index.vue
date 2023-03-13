<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 14:57:41
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="{ width: isCollapse ? '65px' : '200px' }">
        <Menu v-model:isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <Head />
          <Tabs />
        </el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Menu from './Menu';
import Head from './Head';
import Tabs from './Tabs';

const isCollapse = ref(false);
</script>
<style scoped lang="scss">
.el-header {
  padding: 0;
}

.el-container {
  display: flex;

  .el-container {
    flex: 1;
  }
}
.el-aside {
  transition: width 0.75s;
  -webkit-transition: width 0.75s;
  -moz-transition: width 0.75s;
  -webkit-transition: width 0.75s;
  -o-transition: width 0.75s;
}
</style>
