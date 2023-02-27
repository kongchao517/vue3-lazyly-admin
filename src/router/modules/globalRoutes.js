/*
 * @Descripttion:登录和错误页面
 * @Author: lazyly
 * @Date: 2022-12-05 10:36:13
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-27 11:19:57
 */

export const globalRoutes = [
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/User/index.vue")
	},
	{
		path: "/Error",
		name: "Error",
		component: () => import("@/views/Error/index.vue")
	}
]
