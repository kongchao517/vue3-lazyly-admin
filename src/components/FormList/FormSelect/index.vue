<!--
 * @ description: 下拉组件
 * @ author: kongchao
 * @ created_at: 2023-03-08 16:02:08
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-08 16:07:35
-->
<template>
  <el-select v-model="value" :placeholder="attr.placeholder" clearable>
    <el-option v-for="item in attr.selectData" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: () => '',
  },
  attr: {
    type: Object,
    default: () => {},
  },
});
const emits = defineEmits(['update:modelValue']);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits('update:modelValue', val);
  },
});
</script>

<style lang="scss" scoped></style>
