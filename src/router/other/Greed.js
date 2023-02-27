/*
 * @Descripttion: 贪心算法
 * @Author: lazyly
 * @Date: 2023-01-28 13:44:02
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 18:52:28
 */
export const Greed = [
	{
		path: "/greed",
		name: "Greed",
		redirect: "/Greed",
		meta: {
			title: "贪心算法"
		},
		children: [
			{
				path: "/greed",
				name: "Greed",
				component: () => import("@page/Greed"),
				meta: {
					title: "贪心算法"
				}
			}
		]
	}
]
