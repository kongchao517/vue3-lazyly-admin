/*
 * @Descripttion:采样
 * @Author: lazyly
 * @Date: 2023-01-28 13:50:05
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 19:00:21
 */
export const Sampling = [
	{
		path: "/sampling",
		name: "Sampling",
		redirect: "/Sampling",
		meta: {
			title: "采样"
		},
		children: [
			{
				path: "/sampling",
				name: "Sampling",
				component: () => import("@page/Sampling"),
				meta: {
					title: "采样"
				}
			}
		]
	}
]
