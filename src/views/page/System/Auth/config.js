/*
 * @ description:配置
 * @ author: kongchao
 * @ created_at: 2023-03-01 22:52:30
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-15 16:10:23
 */
import { ref } from 'vue';

export class DragConfig {
  // 数据源
  tableData = ref([]);

  // 表头
  columns = [
    { id: 1, props: 'id', label: 'id', attr: { align: 'center', sortable: true } },
    { id: 2, props: 'menuName', label: '菜单名称', attr: { align: 'center' } },
    { id: 3, props: 'menuRoute', label: '菜单路由', attr: { align: 'center' } },
    { id: 4, props: 'date', label: '时间', attr: { align: 'center' } },
    {
      id: 5,
      props: 'image',
      label: '图片',
      slotType: 'image1',
      attr: { align: 'center' },
    },
    { id: 6, props: 'icon', label: '图标', slotType: 'icon', attr: { align: 'center', width: '40px' } },
  ];

  /*
   * formOpt:el-form-item属性配置
   * formComponent: component绑定type组件里面的自定义属性
   */
  // 表单数据
  formColumn = [
    {
      id: 1,
      type: 'FormInput',
      span: 12,
      label: '姓名',
      prop: 'label',
      rules: { required: true, message: '请输入姓名', trigger: 'blur' },
      formComponent: {
        placeholder: '请输入姓名',
      },
    },
    {
      id: 2,
      type: 'FormInput',
      span: 12,
      label: '年龄',
      prop: 'age',
      rules: { required: true, message: '请输入年龄', trigger: 'blur' },
      formComponent: {
        placeholder: '请输入年龄',
      },
    },
    {
      id: 3,
      type: 'FormRadio',
      span: 12,
      label: '性别',
      prop: 'sex',
      rules: { required: true, message: '请选择性别', trigger: 'change' },
      formComponent: {
        radioData: [
          { label: '男', value: '1' },
          { label: '女', value: '2' },
        ],
      },
    },
    {
      id: 4,
      type: 'FormSelect',
      span: 12,
      label: '下拉选择框',
      prop: 'select',
      rules: { required: true, message: '请选择下拉', trigger: 'change' },
      formComponent: {
        placeholder: '请选择下拉',
        selectData: [
          { label: '测试1', value: '1' },
          { label: '测试2', value: '2' },
        ],
      },
    },
    {
      id: 5,
      type: 'FormCheck',
      span: 12,
      label: '复选框',
      prop: 'check',
      rules: { required: true, message: '请选择', trigger: 'change' },
      formComponent: {
        checkData: [
          { label: '测试1', value: '1' },
          { label: '测试2', value: '2' },
        ],
      },
    },
    {
      id: 6,
      type: 'FormDate',
      span: 12,
      label: '时间',
      prop: 'date',
      rules: { required: true, message: '请选择时间', trigger: 'change' },
      formComponent: {
        type: 'date',
        format: 'YYYY/MM/DD',
        valueFormat: 'YYYY-MM-DD',
        placeholder: '请选择时间',
      },
    },
    {
      id: 7,
      type: 'FormEditor',
      span: 24,
      label: '富文本',
      prop: 'editor',
      rules: { required: true, message: '请输入', trigger: 'blur' },
      formComponent: {},
    },
    // {
    //   id: 8,
    //   type: 'FormUpload',
    //   span: 24,
    //   label: '上传图片',
    //   prop: 'upload',
    //   rules: { required: true, message: '请输入', trigger: 'blur' },
    //   formComponent: {},
    // },
  ];
}
