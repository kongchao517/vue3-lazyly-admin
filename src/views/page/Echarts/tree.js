/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-03-16 16:18:33
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-16 16:39:15
 */
export const treeData = {
  name: 'flare',
  children: [
    {
      name: 'analytics',
      children: [
        {
          name: 'cluster',
          children: [
            {
              name: 'AgglomerativeCluster',
              value: 3938,
            },
            {
              name: 'CommunityStructure',
              value: 3812,
            },
            {
              name: 'HierarchicalCluster',
              value: 6714,
            },
            {
              name: 'MergeEdge',
              value: 743,
            },
          ],
        },
        {
          name: 'graph',
          children: [
            {
              name: 'BetweennessCentrality',
              value: 3534,
            },
            {
              name: 'LinkDistance',
              value: 5731,
            },
            {
              name: 'MaxFlowMinCut',
              value: 7840,
            },
            {
              name: 'ShortestPaths',
              value: 5914,
            },
            {
              name: 'SpanningTree',
              value: 3416,
            },
          ],
        },
        {
          name: 'optimization',
          children: [
            {
              name: 'AspectRatioBanker',
              value: 7074,
            },
          ],
        },
      ],
    },
    {
      name: 'display',
      children: [
        {
          name: 'DirtySprite',
          value: 8833,
        },
        {
          name: 'LineSprite',
          value: 1732,
        },
        {
          name: 'RectSprite',
          value: 3623,
        },
        {
          name: 'TextSprite',
          value: 10066,
        },
      ],
    },
    {
      name: 'flex',
      children: [
        {
          name: 'FlareVis',
          value: 4116,
        },
      ],
    },
  ],
};
