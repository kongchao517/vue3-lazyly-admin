<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-14 10:42:20
-->
<template>
  <div class="drag-box">
    <i class="iconfont icon-navicon-jsgl" />
    <TableList
      :table-data="dragConfig.tableData"
      :columns="dragConfig.columns"
      :row-style="rowStyle"
      :header-cell-style="headerCellStyle"
      :btn-data="btnData"
      :loading="loading"
      @on-sort="onSort"
      @on-row="onRow"
      @on-select="onSelect"
    >
      <template #image1="scope">
        <el-image :src="scope.row.image" style="width: 50px; height: 50px" />
      </template>
    </TableList>
    <Pagination
      v-model:currentPage="currentPage"
      v-model:pageSize="pageSize"
      :total="100"
      class="pagination"
    ></Pagination>
    <Dialog v-model:is-show="isShow" :dialog-width="'60%'" :title="title" @on-submit="onSubmit">
      <template #form>
        {{ formData }}
        <FormList
          ref="formRef"
          :label-width="'120px'"
          :inline="true"
          :form-column="dragConfig.formColumn"
          :form-data="formData"
          @oncheck="formRef.form.validate()"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TableList from '@components/TableList';
import Pagination from '@components/Pagination';
import Dialog from '@components/Dialog';
import FormList from '@components/FormList';
import { DragConfig } from './config';

const dragConfig = new DragConfig();
const isShow = ref(false);
const title = ref('');
const formData = ref({});
const formRef = ref(null);
const currentPage = ref(1);
const pageSize = ref(10);
const loading = ref(false);

const onSort = (column) => {
  console.log('值', column);
};
const onRow = (row) => {
  console.log('行', row);
};
const rowStyle = (row) => {
  console.log('rowStyle', row);
  // return row.rowIndex % 2 === 0 ? 'background:#FFFFF3' : 'background:#FFFFF9';
  return {};
};
const headerCellStyle = (row) => {
  console.log('headerRowStyle', row);
  // return { background: '#FFFF99' };
  return {};
};
const onEdit = (index, row) => {
  console.log('修改', index, row);
  isShow.value = true;
  title.value = '修改';
};
const onDelete = (index, row) => {
  isShow.value = true;
  console.log('删除', index, row);
};
const btnData = {
  attr: { label: '操作', fixed: 'right' },
  btn: [
    { id: 1, type: 'primary', label: '修改', handle: (index, row) => onEdit(index, row) },
    { id: 2, type: 'danger', label: '删除', handle: (index, row) => onDelete(index, row) },
  ],
};
const onSelect = (row) => {
  console.log('复选框选择', row);
};
const onSubmit = () => {
  formRef.value.form.validate((valid, fields) => {
    console.log('formRef.value', formData.value);
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>

<style lang="scss" scoped>
.drag-box {
  width: 100%;
}
.pagination {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
