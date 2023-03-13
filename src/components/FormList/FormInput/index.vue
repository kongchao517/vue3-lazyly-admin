<!--
 * @ description: 输入框
 * @ author: kongchao
 * @ created_at: 2023-03-08 15:09:50
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-08 15:21:44
-->
<template>
  <el-input v-model="value" :placeholder="formComponent.placeholder" clearable />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: () => '',
  },
  formComponent: {
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
