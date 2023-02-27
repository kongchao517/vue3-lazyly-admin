/*
 * @Descripttion:图与搜索
 * @Author: lazyly
 * @Date: 2023-01-28 13:44:35
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 18:50:07
 */
export const GraphAndSearch = [
	{
		path: "/graphandsearch",
		name: "GraphAndSearch",
		redirect: "/GraphAndSearch",
		meta: {
			title: "图与搜索"
		},
		children: [
			{
				path: "/graphandsearch",
				name: "GraphAndSearch",
				component: () => import("@page/GraphAndSearch"),
				meta: {
					title: "图与搜索"
				}
			}
		]
	}
]
