/*
 * @Descripttion:二进制运算的应用
 * @Author: lazyly
 * @Date: 2023-01-28 13:47:44
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 18:38:08
 */
export const BinarySystem = [
	{
		path: "/binarysystem",
		name: "BinarySystem",
		redirect: "/BinarySystem",
		meta: {
			title: "二进制运算的应用"
		},
		children: [
			{
				path: "/binarysystem",
				name: "BinarySystem",
				component: () => import("@page/BinarySystem"),
				meta: {
					title: "二进制运算的应用"
				}
			}
		]
	}
]
