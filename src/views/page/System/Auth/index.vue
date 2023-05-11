<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-11 11:42:32
-->
<template>
  <div class="drag-box">
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
        <el-image :src="scope.row.image" style="width: 30px; height: 30px" />
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
        >
        </FormList>
      </template>
    </Dialog>
    <Swiper />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import TableList from '@components/TableList';
import Pagination from '@components/Pagination';
import Dialog from '@components/Dialog';
import FormList from '@components/FormList';
import { getMenu } from '@api/user';
import Swiper from '@components/Swiper';
import { DragConfig } from './config';

const dragConfig = reactive(new DragConfig());
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
  attr: { label: '操作', fixed: 'right', align: 'center' },
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
const init = async () => {
  const page = { page: 1, size: 10 };
  const res = await getMenu(JSON.stringify(page));
  console.log('Res', res);
  dragConfig.tableData = res.list;
};
init();
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>
