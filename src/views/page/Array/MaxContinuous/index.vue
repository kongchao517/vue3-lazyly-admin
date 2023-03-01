<!--
 * @ description: 
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record: 
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:53:44
-->
<!--
 * @Descripttion:
 * @Author: lazyly
 * @Date: 2022-12-05 10:34:43
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-21 14:48:57
-->
<template>
  <h2>最大连续1个个数</h2>
  <p>给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。</p>
  <p>示例 1： 输入：nums = [1,1,0,1,1,1] 输出：3 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.</p>
  <p>示例 2: 输入：nums = [1,0,1,1,0,1] 输出：2</p>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {});
const findMaxConsecutiveOnes = (nums) => {
  return Math.max(...nums.join('').split('0')).toString().length;
};
console.log('findMaxConsecutiveOnes([1,1,0,1,1,1])', findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
</script>
<style scoped lang="scss">
.echartsBox {
  width: 400px;
  height: 400px;
}
</style>
