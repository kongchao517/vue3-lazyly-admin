<!--
 * @ description:随机数
 * @ author: kongchao
 * @ created_at: 2023-03-13 17:49:10
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 18:59:20
-->
<template>
  <div class="ValidCode disabled-select" :style="`width:${width}; height:${height}`" @click="refreshCode">
    <span v-for="(item, index) in codeList" :key="index" :style="getStyle()">{{ item }}</span>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

defineProps({
  codeList: {
    type: Array,
    default: () => [1234],
  },
  width: {
    type: String,
    default: '100px',
  },
  height: {
    type: String,
    default: '34px',
  },
});
const color = ref('');
const emits = defineEmits(['on-random']);
const onRandom = () => {
  emits('on-random');
};
const refreshCode = () => {
  onRandom();
};
// const createdCode = () => {
//   const codeList = [];
//   // 生成
//   for (let i = 0; i <= 4; i++) {
//     const rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)];
//     codeLists.value.push({
//       code: props.codeList[i],
//       color: `rgb(${rgb})`,
//       fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
//       padding: `${[Math.floor(Math.random() * 10)]}px`,
//       transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`,
//     });
//   }
//   // 指向
//   codeLists.value = codeList;
//   // 将当前数据派发出去
// };

const getStyle = () => {
  return `color: ${color.value}`;
};

onMounted(() => {
  onRandom();
  // createdCode();
});
</script>

<style scoped lang="scss">
.ValidCode {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    display: inline-block;
  }
}
</style>
