<!--
 * @ description:单选框
 * @ author: kongchao
 * @ created_at: 2023-03-07 14:24:12
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-08 15:09:24
-->
<template>
  <el-radio-group v-model="value">
    <el-radio v-for="(item, index) in attr.radioData" :key="index" :label="item.value" size="small">{{
      item.label
    }}</el-radio>
  </el-radio-group>
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
const emits = defineEmits(['update:model-value']);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits('update:model-value', val);
  },
});
</script>

<style lang="scss" scoped></style>
