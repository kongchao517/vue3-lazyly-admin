<!--
 * @ description:时间组件
 * @ author: kongchao
 * @ created_at: 2023-03-09 11:07:23
 * @ modified_record:对应属性 attr
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-09 11:12:29
-->
<template>
  <el-date-picker v-model="value" v-bind="attr" />
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
