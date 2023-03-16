<!--
 * @ description:表格组件
 * @ author: kongchao
 * @ created_at: 2023-03-02 13:55:10
 * @ modified_record:表格的属性都是父组件传过来，方法子传父
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-15 16:12:15
-->
<template>
  <el-table
    v-loading="loading"
    :data="tableData"
    :row-style="rowStyle"
    :header-cell-style="headerCellStyle"
    row-key="id"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    @sort-change="onSort"
    @row-click="onRow"
    @select="onSelect"
  >
    <template v-for="item in columns" :key="item.id">
      <!--自定义插槽-->
      <template v-if="item.slotType">
        <el-table-column :prop="item.prop" :label="item.label" v-bind="item.attr">
          <template #default="scope">
            <slot :name="item.slotType" :row="scope.row" />
          </template>
        </el-table-column>
      </template>
      <el-table-column v-else :prop="item.props" :label="item.label" v-bind="item.attr" />
    </template>
    <!--操作栏属性及按钮-->
    <el-table-column v-if="btnData" v-bind="btnData.attr">
      <template #default="scope">
        <el-button
          v-for="item in btnData.btn"
          :key="item.id"
          size="small"
          round
          :type="item.type"
          @click="item.handle(scope.$index, scope.row)"
          >{{ item.label }}
        </el-button>
      </template>
    </el-table-column>
    <!--自定义空样式-->
    <template #empty> 空 </template>
  </el-table>
</template>

<script setup>
defineProps({
  // 数据源
  tableData: {
    type: Array,
    default: () => [],
  },
  // el-table-column绑定属性
  columns: {
    type: Array,
    default: () => [],
  },
  // 行样式
  rowStyle: {
    type: Function,
    default: () => {},
  },
  // 表头样式
  headerCellStyle: {
    type: Function,
    default: () => {},
  },
  // 按钮配置
  btnData: {
    type: Object,
    default: () => {},
  },
  // 加载动画
  loading: {
    type: Boolean,
    default: () => false,
  },
});
const emits = defineEmits(['on-sort', 'on-row', 'on-select']);
// 排序
const onSort = (column, prop, order) => {
  emits('on-sort', column, prop, order);
};
// 行数据
const onRow = (row, column, event) => {
  emits('on-row', row, column, event);
};
// 选择的复选框 Array
const onSelect = (row) => {
  emits('on-select', row);
};
</script>

<style lang="scss" scoped></style>
