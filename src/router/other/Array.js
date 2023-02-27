/*
 * @Descripttion:数组
 * @Author: lazyly
 * @Date: 2023-01-28 13:40:22
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 17:49:20
 */
export const Array = [
	{
		path: "/array",
		name: "Array",
		redirect: "/max-continuous",
		meta: {
			title: "数组类型"
		},
		children: [
			{
				path: "/max-continuous",
				name: "MaxContinuous",
				component: () => import("@page/Array/MaxContinuous"),
				meta: {
					title: "最大连续1的个数"
				}
			}
		]
	}
]
