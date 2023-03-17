<!--
 * @ description: 树图
 * @ author: kongchao
 * @ created_at: 2023-03-16 15:22:51
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-16 18:27:51
-->
<template>
  <div ref="main" style="width: 100vw; height: 100vh"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { treeData } from './tree';

const main = ref(null);
const init = () => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(main.value);
  // 指定图表的配置项和数据
  const option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
    },
    series: [
      {
        type: 'tree',
        data: [treeData],
        top: '1%',
        left: '10%',
        bottom: '1%',
        right: '20%',
        symbolSize: 24,
        symbol: 'circle',
        // 是否缩放
        // roam: true,
        label: {
          position: [-70, 10],
          verticalAlign: 'middle',
          align: 'center',
          fontSize: 9,
          width: 130,
          height: 35,
          backgroundColor: 'rgba(7, 68, 151)',
          borderWidth: 1,
          borderRadius: 15,
          color: '#FFFFFF',
          borderType: 'solid',
        },
        select: {
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'center',
            fontSize: 9,
            width: 130,
            height: 35,
            backgroundColor: 'red',
            borderWidth: 1,
            color: 'red',
            borderType: 'solid',
          },
        },
        // curve、polyline曲线和折线
        edgeShape: 'polyline',
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};
onMounted(() => {
  init();
});
console.log(treeData);
</script>

<style lang="scss" scoped></style>
