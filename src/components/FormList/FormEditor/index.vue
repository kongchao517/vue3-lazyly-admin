<!--
 * @ description: 富文本编辑器
 * @ author: kongchao
 * @ created_at: 2023-03-09 11:19:00
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-09 17:35:51
-->
<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :default-config="toolbarConfig" :mode="mode" />
    <Editor
      v-model="editValue"
      :mode="mode"
      style="height: 500px; overflow-y: hidden"
      :default-config="editorConfig"
      @on-created="handleCreated"
      @on-change="onChange"
    />
  </div>
</template>

<script setup>
import { onBeforeUnmount, shallowRef, onMounted, computed } from 'vue';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { ElMessage } from 'element-plus';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';

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
const emits = defineEmits(['update:modelValue', 'onCheck']);
const editValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits('update:modelValue', val);
  },
});
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const mode = 'default';
// 模拟 ajax 异步获取内容
onMounted(() => {
  // setTimeout(() => {
  //   value.value = '<p>模拟 Ajax 异步设置内容</p>';
  // }, 1500);
});

const toolbarConfig = {};
const editorConfig = {
  placeholder: '请输入内容...',
  MENU_CONF: {
    // 配置上传图片
    uploadImage: {
      // 请求路径
      server: 'api/sysUser/uploadImg',
      // 后端接收的文件名称
      fieldName: 'file',
      maxFileSize: 1 * 1024 * 1024, // 1M
      // 上传的图片类型
      allowedFileTypes: ['image/*'],
      // 小于该值就插入 base64 格式（而不上传），默认为 0
      base64LimitSize: 10 * 1024, // 10MB
      // 自定义插入返回格式【后端返回的格式】
      customInsert(res, insertFn) {
        if (res.code !== 200 && res.success === false) {
          ElMessage.error(`上传文件失败，${res.message}`);
          return;
        }
        insertFn(res.data.url, res.data.alt, res.data.href);
      },
      // 携带的数据
      meta: {
        token:
          'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NjM0MjQ5MzEsInN1YiI6ImFkbWluIiwiaWF0IjoxNjYzNDIzMTMxOTAyfQ.McM6MZ6N9dQnAKym-9_TqAv6gjRWqf72Q4MTnMlS9AeIM-DhCjaJJrUMYbB8hs5r-HXYSXbs5O5pk9f_KUbGQg',
      },
      // 将 meta 拼接到 url 参数中，默认 false
      metaWithUrl: true,
      // 单个文件上传成功之后
      onSuccess(file, res) {
        if (res.code === 200 && res.success) {
          ElMessage.success(`${file.name} 上传成功`);
        } else {
          ElMessage.warning(`${file.name} 上传出了点异常`);
        }
        // console.log(`${file.name} 上传成功`, res)
        // ElMessage.success(`${file.name} 上传成功`, res)
      },
      // 单个文件上传失败
      onFailed(file, res) {
        console.log(res);
        ElMessage.error(`${file.name} 上传失败`);
      },
      // 上传错误，或者触发 timeout 超时
      onError(file, err, res) {
        console.log(err, res);
        ElMessage.error(`${file.name} 上传出错`);
      },
    },
  },
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor === null || editor === '<p><br></p>') return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const onChange = () => {
  // editorRef.value.getText() 获取富文本编辑器的内容 .trim() 去掉空格
  if (editorRef.value.getText().trim().length === 0) {
    editValue.value = '';
  }
};
</script>

<style lang="scss" scoped></style>
