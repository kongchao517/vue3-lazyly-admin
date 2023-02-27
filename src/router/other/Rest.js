/*
 * @Descripttion:常用技巧与算法
 * @Author: lazyly
 * @Date: 2023-01-28 13:51:26
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 18:58:00
 */
export const Rest = [
	{
		path: "/rest",
		name: "Rest",
		redirect: "/Rest",
		meta: {
			title: "常用技巧与算法"
		},
		children: [
			{
				path: "/rest",
				name: "Rest",
				component: () => import("@page/Rest"),
				meta: {
					title: "常用技巧与算法"
				}
			}
		]
	}
]
