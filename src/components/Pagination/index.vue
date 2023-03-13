<!--
 * @ description: 分页组件
 * @ author: kongchao
 * @ created_at: 2023-03-09 15:37:53
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 10:25:52
-->
<template>
  <el-pagination
    v-model:current-page="currentPageValue"
    v-model:page-size="pageSizeValue"
    :page-sizes="[100, 200, 300, 400]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  pageSizes: {
    type: Array,
    default: () => [10, 20, 50, 100],
  },
  currentPage: {
    type: Number,
    default: () => 1,
  },
  pageSize: {
    type: Number,
    default: () => 100,
  },
  total: {
    type: Number,
    default: () => 100,
  },
});
const emits = defineEmits(['update:current-page', 'update:page-size']);
const currentPageValue = computed({
  get() {
    return props.currentPage;
  },
  set(val) {
    emits('update:current-page', val);
  },
});
const pageSizeValue = computed({
  get() {
    return props.pageSize;
  },
  set(val) {
    // 此处可加分页初始化头部筛选formData
    emits('update:page-size', val);
  },
});
</script>

<style lang="scss" scoped></style>
