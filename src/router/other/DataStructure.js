/*
 * @Descripttion:数据结构
 * @Author: lazyly
 * @Date: 2023-01-28 13:49:13
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 18:44:46
 */
export const DataStructure = [
	{
		path: "/datastructure",
		name: "DataStructure",
		redirect: "/DataStructure",
		meta: {
			title: "数据结构"
		},
		children: [
			{
				path: "/datastructure",
				name: "DataStructure",
				component: () => import("@page/DataStructure"),
				meta: {
					title: "数据结构"
				}
			}
		]
	}
]
