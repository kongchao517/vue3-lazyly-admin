/*
 * @ description:浏览器返回错误状态码
 * @ author: kongchao
 * @ created_at: 2023-03-15 14:00:08
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-15 14:06:28
 */
export const browserData = [
  {
    code: 100,
    msg: '请求者应当继续提出请求。服务器返回此代码表示已收到请求的第一部分，正在等待其余部分',
  },
  {
    code: 101,
    msg: '请求者已要求服务器切换协议，服务器已确认并准备切换',
  },
  {
    code: 201,
    msg: '请求成功并且服务器创建了新的资源',
  },
  {
    code: 202,
    msg: '服务器已接受请求，但尚未处理',
  },
  {
    code: 203,
    msg: '服务器已成功处理了请求，但返回的信息可能来自另一个源',
  },
  {
    code: 204,
    msg: '服务器成功处理了请求，但没有返回任何内容',
  },
  {
    code: 205,
    msg: '服务器成功处理了请求，内容被重置',
  },
  {
    code: 206,
    msg: '服务器成功处理了部分请求',
  },
  {
    code: 300,
    msg: ' 针对请求，服务器可执行多种操作',
  },
  {
    code: 301,
    msg: '请求的网页已永久移动到新位置，即永久重定向',
  },
  {
    code: 302,
    msg: '请求的网页暂时跳转到其他页面，即暂时重定向',
  },
  {
    code: 303,
    msg: '如果原来的请求是POST，重定向目标文档应该通过GET提取',
  },
  {
    code: 304,
    msg: '此次请求返回的网页未修改，继续使用上次的资源',
  },
  {
    code: 305,
    msg: '请求者应该使用代理访问该网页',
  },
  {
    code: 307,
    msg: '请求的资源临时从其他位置响应',
  },
  {
    code: 400,
    msg: '服务器无法解析该请求',
  },
  {
    code: 401,
    msg: '请求没有进行身份验证或验证未通过',
  },
  {
    code: 403,
    msg: '服务器拒绝此次请求',
  },
  {
    code: 404,
    msg: '服务器找不到请求的网页',
  },
  {
    code: 405,
    msg: '服务器禁用了请求中指定的方法',
  },
  {
    code: 406,
    msg: '无法使用请求的内容响应请求的网页',
  },
  {
    code: 407,
    msg: '请求者需要使用代理授权',
  },
  {
    code: 408,
    msg: '服务器请求超时',
  },
  {
    code: 409,
    msg: '服务器在完成请求时发生冲突',
  },
  {
    code: 410,
    msg: '请求的资源已永久删除',
  },
  {
    code: 411,
    msg: '服务器不接受不含有效长度标头字段的请求',
  },
  {
    code: 412,
    msg: '服务器未满足请求者在请求中设置的其中一个前提条件',
  },
  {
    code: 413,
    msg: '请求实体过大，超出服务器的处理能力',
  },
  {
    code: 414,
    msg: '请求网址过长，服务器无法处理',
  },
  {
    code: 415,
    msg: '请求的格式不被请求页面支持',
  },
  {
    code: 416,
    msg: '页面无法提供请求的范围',
  },
  {
    code: 417,
    msg: '服务器未满足期望请求标头字段的要求',
  },
  {
    code: 500,
    msg: '服务器遇到错误，无法完成请求',
  },
  {
    code: 501,
    msg: '服务器不具备完成请求的能力',
  },
  {
    code: 502,
    msg: '服务器作为网关或代理，从上游服务器收到无效响应',
  },
  {
    code: 503,
    msg: '服务器目前无法使用',
  },
  {
    code: 504,
    msg: '服务器作为网关或代理，但是没有及时从上游服务器收到请求',
  },
  {
    code: 505,
    msg: '服务器不支持请求中所用的HTTP协议版本',
  },
];
