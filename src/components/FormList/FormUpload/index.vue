<!--
 * @ description: 上传组件
 * @ author: kongchao
 * @ created_at: 2023-03-09 14:43:04
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-09 15:32:32
-->
<template>
  {{ value }}
  <el-upload v-model:file-list="value" list-type="picture-card" :on-success="handleAdd" :on-remove="handleRemove">
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>
<script setup>
import { computed, ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
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
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const handleAdd = (file) => {
  console.log('file', file);
};
const handleRemove = () => {};
</script>
<style lang="scss" scoped></style>
