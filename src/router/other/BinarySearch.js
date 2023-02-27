/*
 * @Descripttion:二分查找
 * @Author: lazyly
 * @Date: 2023-01-28 13:46:25
 * @LastEditors: lazyly
 * @LastEditTime: 2023-02-12 13:30:43
 */
export const BinarySearch = [
	{
		path: "/binarysearch",
		name: "BinarySearch",
		redirect: "/binarysearch",
		meta: {
			title: "二分查找"
		},
		children: [
			{
				path: "/binarysearch",
				name: "BinarySearch",
				component: () => import("@page/BinarySearch"),
				meta: {
					title: "二分查找"
				}
			}
		]
	}
]
