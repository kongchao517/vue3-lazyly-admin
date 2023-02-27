/*
 * @Descripttion:哈希表
 * @Author: lazyly
 * @Date: 2023-01-28 13:43:29
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 18:55:50
 */
export const HashTable = [
	{
		path: "/hashtable",
		name: "HashTable",
		redirect: "/HashTable",
		meta: {
			title: "哈希表"
		},
		children: [
			{
				path: "/hashtable",
				name: "HashTable",
				component: () => import("@page/HashTable"),
				meta: {
					title: "哈希表"
				}
			}
		]
	}
]
