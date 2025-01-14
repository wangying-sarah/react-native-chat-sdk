import type { ApiParams } from '../__internal__/DataTypes';

export const MN = {
  publishPresenceWithDescription: 'publishPresenceWithDescription',
  presenceSubscribe: 'presenceSubscribe',
  presenceUnsubscribe: 'presenceUnsubscribe',
  fetchSubscribedMembersWithPageNum: 'fetchSubscribedMembersWithPageNum',
  fetchPresenceStatus: 'fetchPresenceStatus',
};

export const metaDataList = new Map<string, ApiParams>([
  [
    MN.publishPresenceWithDescription,
    {
      methodName: MN.publishPresenceWithDescription,
      params: [
        {
          paramName: 'description',
          paramType: 'string',
          paramDefaultValue: 'test presence',
        },
      ],
    },
  ],
  [
    MN.presenceSubscribe,
    {
      methodName: MN.presenceSubscribe,
      params: [
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk003'],
        },
        {
          paramName: 'expiry',
          paramType: 'number',
          paramDefaultValue: 2000,
        },
      ],
    },
  ],
  [
    MN.presenceUnsubscribe,
    {
      methodName: MN.presenceUnsubscribe,
      params: [
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['zhangsan', 'lisi', 'asterisk003'],
        },
      ],
    },
  ],
  [
    MN.fetchSubscribedMembersWithPageNum,
    {
      methodName: MN.fetchSubscribedMembersWithPageNum,
      params: [
        {
          paramName: 'pageNum',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 10,
        },
      ],
    },
  ],
  [
    MN.fetchPresenceStatus,
    {
      methodName: MN.fetchPresenceStatus,
      params: [
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk003', 'lisi'],
        },
      ],
    },
  ],
]);
