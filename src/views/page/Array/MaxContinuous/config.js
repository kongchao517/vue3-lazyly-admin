/*
 * @ description:配置
 * @ author: kongchao
 * @ created_at: 2023-03-01 22:52:30
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-09 18:23:14
 */
import Background from '@assets/image/home/background_1.png';
import CardBg from '@assets/image/home/card-bg.png';
import CardWangk from '@assets/image/home/card-wangk.png';
import Close from '@assets/image/home/close.png';
import DownIcon from '@assets/image/home/down_icon.png';

export class DragConfig {
  // 数据源
  tableData = [
    {
      id: 1,
      label: '张三',
      age: '25',
      sex: '男',
      image: Background,
      children: [{ id: 10, label: '嵌套', age: '25', sex: '男', image: CardBg }],
    },
    { id: 2, label: '李四', age: '25', sex: '男', image: CardBg },
    { id: 3, label: '王五', age: '25', sex: '男', image: CardWangk },
    { id: 4, label: '赵六', age: '25', sex: '男', image: Close },
    { id: 9, label: '哈哈', age: '25', sex: '男', image: DownIcon },
  ];

  // 表头
  columns = [
    { id: 1, props: 'id', label: 'id', attr: { align: 'center', sortable: true, type: 'selection' } },
    { id: 2, props: 'label', label: '姓名', attr: { align: 'center' } },
    { id: 3, props: 'age', label: '年龄', attr: { align: 'center' } },
    { id: 4, props: 'sex', label: '性别', attr: { align: 'center' } },
    {
      id: 5,
      props: 'image',
      label: '图片',
      slotType: 'image1',
      attr: { align: 'center', type: 'index', sortable: true },
    },
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
