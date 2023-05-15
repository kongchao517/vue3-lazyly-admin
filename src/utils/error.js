/*
 * @ description:后端返回错误状态码
 * @ author: kongchao
 * @ created_at: 2023-03-15 14:00:08
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-15 14:06:41
 */
export const errorData = [
  {
    code: 311,
    msg: 'cron表达式不正确',
  },
  {
    code: 312,
    msg: '调度异常',
  },
  {
    code: 313,
    msg: '请求次数过多',
  },
  {
    code: 400,
    msg: 'PARAMETER INVALID',
  },
  {
    code: 401,
    msg: '登录状态已失效，请重新登陆',
  },
  {
    code: 402,
    msg: '验证码失效',
  },
  {
    code: 403,
    msg: 'PERMISSION DENIED',
  },
  {
    code: 404,
    msg: 'NOT_FOUND',
  },
  {
    code: 405,
    msg: '参数校验公共错误',
  },
  {
    code: 406,
    msg: '数据库执行出错',
  },
  {
    code: 407,
    msg: '图数据库执行出错',
  },
  {
    code: 408,
    msg: '部分数据新增失败',
  },
  {
    code: 409,
    msg: '部分数据修改失败',
  },
  {
    code: 410,
    msg: '数据已存在',
  },
  {
    code: 411,
    msg: '数据库连接出错',
  },
  {
    code: 444,
    msg: '其他错误',
  },
  {
    code: 445,
    msg: '重复数据',
  },
  {
    code: 446,
    msg: '保存失败',
  },
  {
    code: 447,
    msg: '删除失败',
  },
  {
    code: 448,
    msg: '用户名已存在',
  },
  {
    code: 500,
    msg: 'FAIL',
  },
  {
    code: 501,
    msg: '用户信息错误',
  },
  {
    code: 502,
    msg: '设备信息错误',
  },
];
