/*
 * @Descripttion:
 * @Author: lazyly
 * @Date: 2022-12-05 11:17:53
 * @LastEditors: lazyly
 * @LastEditTime: 2022-12-05 11:21:05
 */
import { post } from "@/utils/request "

export const login = params => post("/login", params)
