<!--
 * @ description:公共头部
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 22:46:29
-->
<template>
  <div class="head_box">
    <div class="head_box_item">
      <i :class="isCollapse ? 'iconfont icon-zhankai-' : 'iconfont icon-shouqi'" @click="toggle" />
    </div>
    <div class="head_box_item">2</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: () => false,
  },
});
const emits = defineEmits(['update:isCollapse']);
const isColl = computed({
  get() {
    return props.isCollapse;
  },
  set(val) {
    return emits('update:isCollapse', val);
  },
});
const toggle = () => {
  isColl.value = !isColl.value;
};
</script>
<style scoped lang="scss">
.head_box {
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 0 5px;
  line-height: 50px;
  border-bottom: 1px solid rgb(233 233 233);
  cursor: pointer;
}
</style>
