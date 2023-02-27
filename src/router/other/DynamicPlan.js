/*
 * @Descripttion:动态规划
 * @Author: lazyly
 * @Date: 2023-01-28 13:48:22
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 18:48:15
 */
export const DynamicPlan = [
	{
		path: "/dynamicplan",
		name: "DynamicPlan",
		redirect: "/DynamicPlan",
		meta: {
			title: "动态规划"
		},
		children: [
			{
				path: "/dynamicplan",
				name: "DynamicPlan",
				component: () => import("@page/DynamicPlan"),
				meta: {
					title: "动态规划"
				}
			}
		]
	}
]
