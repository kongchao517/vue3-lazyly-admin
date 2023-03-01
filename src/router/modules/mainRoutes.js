/*
 * @ description:主要功能路由
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-01 17:03:51
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
