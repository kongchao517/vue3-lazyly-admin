<!--
 * @ description:复选框组件
 * @ author: kongchao
 * @ created_at: 2023-03-09 10:33:50
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-09 17:53:23
-->
<template>
  <el-checkbox-group v-model="value">
    <el-checkbox v-for="(item, index) in attr.checkData" :key="index" :label="item.value">
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
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
