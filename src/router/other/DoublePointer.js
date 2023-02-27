/*
 * @Descripttion:双指针法
 * @Author: lazyly
 * @Date: 2023-01-28 13:44:35
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 18:46:22
 */
export const DoublePointer = [
	{
		path: "/doublepointer",
		name: "DoublePointer",
		redirect: "/DoublePointer",
		meta: {
			title: "双指针法"
		},
		children: [
			{
				path: "/doublepointer",
				name: "DoublePointer",
				component: () => import("@page/DoublePointer"),
				meta: {
					title: "双指针法"
				}
			}
		]
	}
]
