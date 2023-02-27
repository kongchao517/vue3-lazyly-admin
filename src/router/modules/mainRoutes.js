/*
 * @Descripttion:主要功能路由
 * @Author: lazyly
 * @Date: 2022-12-20 10:07:03
 * @LastEditors: lazyly
 * @LastEditTime: 2023-01-28 19:02:33
 */
import { Array } from '../other/Array';
import { String } from '../other/String';
import { NumberAndBit } from '../other/NumberAndBit';
import { StackAndRecursion } from '../other/StackAndRecursion';
import { Linked } from '../other/Linked';
import { BinarySearch } from '../other/BinarySearch';
import { BinarySystem } from '../other/BinarySystem';
import { ComputationGeometry } from '../other/ComputationGeometry';
import { DataStructure } from '../other/DataStructure';
import { DoublePointer } from '../other/DoublePointer';
import { DynamicPlan } from '../other/DynamicPlan';
import { GraphAndSearch } from '../other/GraphAndSearch';
import { Greed } from '../other/Greed';
import { HashTable } from '../other/HashTable';
import { Rest } from '../other/Rest';
import { Sampling } from '../other/Sampling';
import { Tree } from '../other/Tree';
export const mainRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@views/Layout'),
    redirect: { path: '/array' },
    children: [
      ...Array,
      ...String,
      ...NumberAndBit,
      ...StackAndRecursion,
      ...Linked,
      ...BinarySearch,
      ...BinarySystem,
      ...ComputationGeometry,
      ...DataStructure,
      ...DoublePointer,
      ...DynamicPlan,
      ...GraphAndSearch,
      ...Greed,
      ...HashTable,
      ...Rest,
      ...Sampling,
      ...Tree,
    ],
  },
];
