/*
 * @ description:数据
 * @ author: kongchao
 * @ created_at: 2023-03-15 13:49:09
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-15 14:57:16
 */
// import Mock from 'mockjs';
// // 导入mockjs
// Mock.mock('/getMenuData', 'get', {
//   code: 200, // 请求成功状态码
//   'data|50-100': [
//     {
//       id: '@increment',
//       menuName: '@cname',
//       menuRoute: "@string('aeiou', 5)",
//       sort: '@integer(1,10)',
//       date: '@datetime',
//       image: '@dataImage',
//       icon: "info @string('aeiou', 5)",
//     },
//   ], // 模拟的请
// });

// 引入mockjs
import Mock from 'mockjs';
// 获取 mock.Random 对象
const { Random } = Mock;

// 使用mockjs模拟数据
// const moreList = [];
// for (let i = 0; i < 100; i++) {
//   const newObject = {
//     mtime: Random.datetime(), // 随机生成日期时间
//     score: Random.natural(1, 800), // 随机生成1-800的数字
//     rank: Random.natural(1, 100), // 随机生成1-100的数字
//     stars: Random.natural(0, 5), // 随机生成1-5的数字
//     nickname: Random.cname(), // 随机生成中文名字
//   };
//   moreList.push(newObject);
// }
// Mock.mock('/api/getMenuData', () => {
//   return {
//     code: 200,
//     data: moreList,
//   };
// });

// 用于接受生成数据的数组
const tableList = [];
for (let i = 0; i < 100; i++) {
  const newObject = {
    id: Random.increment(),
    menuName: Random.cname(),
    menuRoute: Random.string('aeiou', 5),
    sort: Random.integer(1, 10),
    date: Random.datetime(),
    image: Random.dataImage(),
    icon: `iconfont ${Random.string('aeiou', 5)}`,
  };
  tableList.push(newObject);
}
// }
// console.log(tableList, 'tableList')
// 拦截ajax请求，配置mock的数据
// get请求
// Mock.mock('/api/mockGetList', 'get', tableList);

// post请求分页
Mock.mock('/api/getMenuData', 'post', (params) => {
  const [index, size, total] = [JSON.parse(params.body).page, JSON.parse(params.body).size, tableList.length];
  // console.log(params, index, size, total, 'params');
  const len = total / size;
  // console.log(index, size, total, 'index, size, total')
  const totalPages = len - len > 0 ? len + 1 : len;
  // 截取list
  // const newProduceNewsData = tableList.slice(index * size, (index + 1) * size)
  const newProduceNewsData = tableList.slice((index - 1) * size, index * size);
  // console.log(newProduceNewsData, 'newProduceNewsData')
  return {
    code: 200,
    message: 'success',
    data: {
      page: index,
      size,
      list: newProduceNewsData,
      total,
      totalPages,
    },
  };
});
