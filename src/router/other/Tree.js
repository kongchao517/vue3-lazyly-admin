/*
 * @Descripttion:树
 * @Author: lazyly
 * @Date: 2023-01-28 13:44:58
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 19:02:07
 */
export const Tree = [
	{
		path: "/Tree",
		name: "Tree",
		redirect: "/Tree",
		meta: {
			title: "树"
		},
		children: [
			{
				path: "/Tree",
				name: "Tree",
				component: () => import("@page/Tree"),
				meta: {
					title: "树"
				}
			}
		]
	}
]
