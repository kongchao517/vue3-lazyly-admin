/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-15 14:51:15
 */
import { post } from '@/utils/request';

export const login = (params) => post('/login', params);

export const getMenu = (params) => post('/getMenuData', params);
