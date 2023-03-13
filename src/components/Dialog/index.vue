<!--
 * @ description:弹窗组件
 * @ author: kongchao
 * @ created_at: 2023-03-06 12:49:24
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-08 17:17:30
-->
<template>
  <div>
    <el-dialog
      v-model="value"
      :title="title"
      :width="dialogWidth"
      :close-on-click-modal="false"
      :before-close="() => (value = false)"
    >
      <!--如弹窗里面需要嵌套别的，可自定义插槽-->
      <slot name="form"></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="onSubmit"> 确认 </el-button>
          <el-button @click="value = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: () => '',
  },
  isShow: {
    type: Boolean,
    default: () => false,
  },
  dialogWidth: {
    type: String,
    default: () => '',
  },
});
const emits = defineEmits(['update:isShow', 'on-submit']);

const value = computed({
  get() {
    return props.isShow;
  },
  set(val) {
    emits('update:isShow', val);
  },
});
const onSubmit = () => {
  emits('on-submit');
  // form.value.validate((valid, fields) => {
  //   if (valid) {
  //     emits('on-submit');

  //     console.log('submit!');
  //   } else {
  //     console.log('error submit!', fields);
  //   }
  // });
};
</script>

<style lang="scss" scoped></style>
