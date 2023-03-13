<!--
 * @ description: 表单组件
 * @ author: kongchao
 * @ created_at: 2023-03-06 14:30:38
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-09 18:33:54
-->
<template>
  <el-form ref="form" :model="formData" :inline="inline" :label-width="labelWidth">
    <el-row>
      <el-col v-for="(item, index) in formColumn" :key="index" :span="item.span" :offset="item.offset">
        <el-form-item :label="item.label" :prop="item.prop" :rules="item.rules">
          <component
            :is="componentsTypes[item.type]"
            v-model="formDataValue[item.prop]"
            :form-component="item.formComponent"
            @on-check="onCheck"
          ></component>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
import { computed, markRaw, ref } from 'vue';
import FormRadio from '@components/FormList/FormRadio';
import FormInput from '@components/FormList/FormInput';
import FormSelect from '@components/FormList/FormSelect';
import FormCheck from '@components/FormList/FormCheck';
import FormDate from '@components/FormList/FormDate';
import FormEditor from '@components/FormList/FormEditor';
import FormUpload from '@components/FormList/FormUpload';

const props = defineProps({
  // 表单label宽度
  labelWidth: {
    type: String,
    default: () => '100px',
  },
  // 是否行内显示
  inline: {
    type: Boolean,
    default: () => false,
  },
  // 表单数据格式
  formColumn: {
    type: Array,
    default: () => [],
  },
  // 表单结果
  formData: {
    type: Object,
    default: () => {},
  },
});
const form = ref(null);
const emits = defineEmits(['update:formData']);
const formDataValue = computed({
  get() {
    return props.formData;
  },
  set(val) {
    emits('update:formData', val);
  },
});
const componentsTypes = markRaw({
  FormRadio,
  FormInput,
  FormSelect,
  FormCheck,
  FormDate,
  FormEditor,
  FormUpload,
});
const onCheck = () => {
  console.log(' form.value', form.value.validate());
  form.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};
defineExpose({
  form,
});
</script>

<style lang="scss" scoped></style>
