/*
 * @Descripttion: 计算几何
 * @Author: lazyly
 * @Date: 2023-01-28 13:50:49
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 18:41:25
 */
export const ComputationGeometry = [
	{
		path: "/computationgeometry",
		name: "ComputationGeometry",
		redirect: "/ComputationGeometry",
		meta: {
			title: "计算几何"
		},
		children: [
			{
				path: "/computationgeometry",
				name: "ComputationGeometry",
				component: () => import("@page/ComputationGeometry"),
				meta: {
					title: "计算几何"
				}
			}
		]
	}
]
