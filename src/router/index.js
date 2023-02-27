/*
 * @Descripttion:
 * @Author: lazyly
 * @Date: 2022-12-05 10:33:17
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 14:19:02
 */
import { createRouter, createWebHistory } from "vue-router"

import { globalRoutes } from "./modules/globalRoutes"
import { mainRoutes } from "./modules/mainRoutes"
console.log("mainRoutes", mainRoutes)
const routes = [...mainRoutes, ...globalRoutes]
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior() {
		return {
			el: "#app",
			top: 0,
			behavior: "smooth"
		}
	}
})

export default router
