<!--
 * @Descripttion:公共面包屑
 * @Author: lazyly
 * @Date: 2023-01-12 22:03:10
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 16:41:58
-->
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
console.log('面包屑', route);
</script>
<style scoped lang="scss">
.breadcrumb {
  padding: 5px;
}
</style>
