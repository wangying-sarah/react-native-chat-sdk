import { ChatMessageType, ChatMessageChatType } from 'react-native-chat-sdk';
import { datasheet } from '../__default__/Datasheet';
import type { ApiParams } from '../__internal__/DataTypes';
import { ChatManagerCache } from './ChatManagerCache';

export const MN = {
  sendMessage: 'sendMessage',
  resendMessage: 'resendMessage',
  sendMessageReadAck: 'sendMessageReadAck',
  sendGroupMessageReadAck: 'sendGroupMessageReadAck',
  sendConversationReadAck: 'sendConversationReadAck',
  recallMessage: 'recallMessage',
  getMessage: 'getMessage',
  markAllConversationsAsRead: 'markAllConversationsAsRead',
  getUnreadMessageCount: 'getUnreadMessageCount',
  updateMessage: 'updateMessage',
  importMessages: 'importMessages',
  downloadAttachment: 'downloadAttachment',
  downloadThumbnail: 'downloadThumbnail',
  fetchHistoryMessages: 'fetchHistoryMessages',
  searchMsgFromDB: 'searchMsgFromDB',
  fetchGroupAcks: 'fetchGroupAcks',
  deleteRemoteConversation: 'deleteRemoteConversation',
  getConversation: 'getConversation',
  loadAllConversations: 'loadAllConversations',
  getConversationsFromServer: 'getConversationsFromServer',
  deleteConversation: 'deleteConversation',
  getLatestMessage: 'getLatestMessage',
  getLastReceivedMessage: 'getLastReceivedMessage',
  unreadCount: 'unreadCount',
  markMessageAsRead: 'markMessageAsRead',
  markAllMessagesAsRead: 'markAllMessagesAsRead',
  insertMessage: 'insertMessage',
  appendMessage: 'appendMessage',
  updateConversationMessage: 'updateConversationMessage',
  deleteMessage: 'deleteMessage',
  deleteAllMessages: 'deleteAllMessages',
  getMessageById: 'getMessageById',
  getMessagesWithMsgType: 'getMessagesWithMsgType',
  getMessages: 'getMessages',
  getMessagesWithKeyword: 'getMessagesWithKeyword',
  getMessagesFromTime: 'getMessagesFromTime',
  translateMessage: 'translateMessage',
  fetchSupportLanguages: 'fetchSupportLanguages',
  setConversationExtension: 'setConversationExtension',
  addReaction: 'addReaction',
  removeReaction: 'removeReaction',
  fetchReactionList: 'fetchReactionList',
  fetchReactionDetail: 'fetchReactionDetail',
  reportMessage: 'reportMessage',
  getReactionList: 'getReactionList',
  groupAckCount: 'groupAckCount',
  createChatThread: 'createChatThread',
  joinChatThread: 'joinChatThread',
  leaveChatThread: 'leaveChatThread',
  destroyChatThread: 'destroyChatThread',
  updateChatThreadName: 'updateChatThreadName',
  removeMemberWithChatThread: 'removeMemberWithChatThread',
  fetchMembersWithChatThreadFromServer: 'fetchMembersWithChatThreadFromServer',
  fetchJoinedChatThreadFromServer: 'fetchJoinedChatThreadFromServer',
  fetchJoinedChatThreadWithParentFromServer:
    'fetchJoinedChatThreadWithParentFromServer',
  fetchChatThreadWithParentFromServer: 'fetchChatThreadWithParentFromServer',
  fetchLastMessageWithChatThread: 'fetchLastMessageWithChatThread',
  fetchChatThreadFromServer: 'fetchChatThreadFromServer',
  getMessageThread: 'getMessageThread',
};

export const metaDataList = new Map<string, ApiParams>([
  [
    MN.sendMessage,
    {
      methodName: MN.sendMessage,
      params: [
        {
          paramName: 'targetId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'targetType',
          paramType: 'object',
          paramDefaultValue: ChatMessageChatType.PeerChat,
        },
        {
          paramName: 'content',
          paramType: 'object',
          paramDefaultValue: Date.now().toString(),
        },
        {
          paramName: 'messageType',
          paramType: 'object',
          paramDefaultValue: ChatMessageType.TXT,
        },
      ],
    },
  ],
  [
    MN.resendMessage,
    {
      methodName: MN.resendMessage,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().createTextMessage(),
        },
      ],
    },
  ],
  [
    MN.sendMessageReadAck,
    {
      methodName: MN.sendMessageReadAck,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastRecvMessage(),
        },
      ],
    },
  ],
  [
    MN.sendGroupMessageReadAck,
    {
      methodName: MN.sendGroupMessageReadAck,
      params: [
        {
          paramName: 'msgId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '179992049811458',
        },
        {
          paramName: 'opt',
          paramType: 'object',
          paramDefaultValue: { content: 'test' },
        },
      ],
    },
  ],
  [
    MN.sendConversationReadAck,
    {
      methodName: MN.sendConversationReadAck,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
      ],
    },
  ],
  [
    MN.recallMessage,
    {
      methodName: MN.recallMessage,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1003235378737449004',
        },
      ],
    },
  ],
  [
    MN.getMessage,
    {
      methodName: MN.getMessage,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '165122593166911045',
        },
      ],
    },
  ],
  [
    MN.markAllConversationsAsRead,
    {
      methodName: MN.markAllConversationsAsRead,
      params: [],
    },
  ],
  [
    MN.getUnreadMessageCount,
    {
      methodName: MN.getUnreadMessageCount,
      params: [],
    },
  ],
  [
    MN.updateMessage,
    {
      methodName: MN.updateMessage,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
      ],
    },
  ],
  [
    MN.importMessages,
    {
      methodName: MN.importMessages,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
      ],
    },
  ],
  [
    MN.downloadAttachment,
    {
      methodName: MN.downloadAttachment,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastRecvMessage(),
        },
        {
          paramName: 'callback', // 创建新的回调接收
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().createCallback(),
        },
      ],
    },
  ],
  [
    MN.downloadThumbnail,
    {
      methodName: MN.downloadThumbnail,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastRecvMessage(),
        },
        {
          paramName: 'callback', // 创建新的回调接收
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().createCallback(),
        },
      ],
    },
  ],
  [
    MN.fetchHistoryMessages,
    {
      methodName: MN.fetchHistoryMessages,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'chatType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'startMsgId',
          paramType: 'string',
          paramDefaultValue: '',
        },
      ],
    },
  ],
  [
    MN.searchMsgFromDB,
    {
      methodName: MN.searchMsgFromDB,
      params: [
        {
          paramName: 'keywords', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: 'r',
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'maxCount',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'from',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 1,
        },
      ],
    },
  ],
  [
    MN.fetchGroupAcks,
    {
      methodName: MN.fetchGroupAcks,
      params: [
        {
          paramName: 'msgId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '1003592625892100148',
        },
        {
          paramName: 'startAckId',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '179992049811458',
        },
      ],
    },
  ],
  [
    MN.deleteRemoteConversation,
    {
      methodName: MN.deleteRemoteConversation,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'isDeleteMessage',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getConversation,
    {
      methodName: MN.getConversation,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'createIfNeed',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.loadAllConversations,
    {
      methodName: MN.loadAllConversations,
      params: [],
    },
  ],
  [
    MN.getConversationsFromServer,
    {
      methodName: MN.getConversationsFromServer,
      params: [],
    },
  ],
  [
    MN.deleteConversation,
    {
      methodName: MN.deleteConversation,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'withMessage',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getLatestMessage,
    {
      methodName: MN.getLatestMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.getLastReceivedMessage,
    {
      methodName: MN.getLastReceivedMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.unreadCount,
    {
      methodName: MN.unreadCount,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.markMessageAsRead,
    {
      methodName: MN.markMessageAsRead,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '0',
        },
      ],
    },
  ],
  [
    MN.markAllMessagesAsRead,
    {
      methodName: MN.markAllMessagesAsRead,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.insertMessage,
    {
      methodName: MN.insertMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msg',
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
      ],
    },
  ],
  [
    MN.appendMessage,
    {
      methodName: MN.appendMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msg',
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
      ],
    },
  ],
  [
    MN.updateConversationMessage,
    {
      methodName: MN.updateConversationMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msg',
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
      ],
    },
  ],
  [
    MN.deleteMessage,
    {
      methodName: MN.deleteMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msgId',
          paramType: 'object',
          paramDefaultValue: '1003599319195977800',
          paramValue: () => ChatManagerCache.getInstance().getLastRecvMessage(),
        },
      ],
    },
  ],
  [
    MN.deleteAllMessages,
    {
      methodName: MN.deleteAllMessages,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.getMessageById,
    {
      methodName: MN.getMessageById,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1003598147630401664',
        },
      ],
    },
  ],
  [
    MN.getMessagesWithMsgType,
    {
      methodName: MN.getMessagesWithMsgType,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msgType',
          paramType: 'string',
          paramDefaultValue: 'txt',
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'count',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'sender',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[0].id,
        },
      ],
    },
  ],
  [
    MN.getMessages,
    {
      methodName: MN.getMessages,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'startMsgId',
          paramType: 'string',
          paramDefaultValue: '1003607445513177152',
        },
        {
          paramName: 'loadCount',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.getMessagesWithKeyword,
    {
      methodName: MN.getMessagesWithKeyword,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'keywords',
          paramType: 'string',
          paramDefaultValue: '0',
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'count',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'sender',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[0].id,
        },
      ],
    },
  ],
  [
    MN.getMessagesFromTime,
    {
      methodName: MN.getMessagesFromTime,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'startTime',
          paramType: 'number',
          paramDefaultValue: 1651233202699,
        },
        {
          paramName: 'endTime',
          paramType: 'number',
          paramDefaultValue: 1651234714623,
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'count',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.translateMessage,
    {
      methodName: MN.translateMessage,
      params: [
        {
          paramName: 'msg',
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
        {
          paramName: 'languages',
          paramType: 'object',
          paramDefaultValue: ['yue', 'en', 'fr', 'de', 'ca'],
        },
      ],
    },
  ],
  [
    MN.fetchSupportLanguages,
    {
      methodName: MN.fetchSupportLanguages,
      params: [],
    },
  ],
  [
    MN.setConversationExtension,
    {
      methodName: MN.setConversationExtension,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'ext',
          paramType: 'object',
          paramDefaultValue: { key: 'value' },
        },
      ],
    },
  ],
  [
    MN.addReaction,
    {
      methodName: MN.addReaction,
      params: [
        {
          paramName: 'reaction',
          paramType: 'string',
          paramDefaultValue: 'reaction1',
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1017652723916474936',
        },
      ],
    },
  ],
  [
    MN.removeReaction,
    {
      methodName: MN.removeReaction,
      params: [
        {
          paramName: 'reaction',
          paramType: 'string',
          paramDefaultValue: 'reaction1',
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1017560360250509880',
        },
      ],
    },
  ],
  [
    MN.fetchReactionList,
    {
      methodName: MN.fetchReactionList,
      params: [
        {
          paramName: 'msgIds',
          paramType: 'object',
          paramDefaultValue: ['1017652723916474936'],
        },
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '183504266657793',
        },
        {
          paramName: 'chatType',
          paramType: 'object',
          paramDefaultValue: ChatMessageChatType.GroupChat,
        },
      ],
    },
  ],
  [
    MN.fetchReactionDetail,
    {
      methodName: MN.fetchReactionDetail,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1017220072558561848',
        },
        {
          paramName: 'reaction',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.reportMessage,
    {
      methodName: MN.reportMessage,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1017220072558561848',
        },
        {
          paramName: 'tag',
          paramType: 'string',
          paramDefaultValue: 'reaction',
        },
        {
          paramName: 'reason',
          paramType: 'string',
          paramDefaultValue: '',
        },
      ],
    },
  ],
  [
    MN.getReactionList,
    {
      methodName: MN.getReactionList,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1017220072558561848',
        },
      ],
    },
  ],
  [
    MN.groupAckCount,
    {
      methodName: MN.groupAckCount,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '10172200725585618481',
        },
      ],
    },
  ],
  [
    MN.createChatThread,
    {
      methodName: MN.createChatThread,
      params: [
        {
          paramName: 'threadName',
          paramType: 'string',
          paramDefaultValue: 'name',
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
        {
          paramName: 'parentId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
      ],
    },
  ],
  [
    MN.joinChatThread,
    {
      methodName: MN.joinChatThread,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
      ],
    },
  ],
  [
    MN.leaveChatThread,
    {
      methodName: MN.leaveChatThread,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
      ],
    },
  ],
  [
    MN.destroyChatThread,
    {
      methodName: MN.destroyChatThread,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
      ],
    },
  ],
  [
    MN.updateChatThreadName,
    {
      methodName: MN.updateChatThreadName,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
        {
          paramName: 'newName',
          paramType: 'string',
          paramDefaultValue: 'newName',
        },
      ],
    },
  ],
  [
    MN.removeMemberWithChatThread,
    {
      methodName: MN.removeMemberWithChatThread,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
        {
          paramName: 'memberId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2].id,
        },
      ],
    },
  ],
  [
    MN.fetchMembersWithChatThreadFromServer,
    {
      methodName: MN.fetchMembersWithChatThreadFromServer,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.fetchJoinedChatThreadFromServer,
    {
      methodName: MN.fetchJoinedChatThreadFromServer,
      params: [
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.fetchJoinedChatThreadWithParentFromServer,
    {
      methodName: MN.fetchJoinedChatThreadWithParentFromServer,
      params: [
        {
          paramName: 'parentId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.fetchChatThreadWithParentFromServer,
    {
      methodName: MN.fetchChatThreadWithParentFromServer,
      params: [
        {
          paramName: 'parentId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.fetchLastMessageWithChatThread,
    {
      methodName: MN.fetchLastMessageWithChatThread,
      params: [
        {
          paramName: 'chatThreadIds',
          paramType: 'object',
          paramDefaultValue: ['1003229966910883832'],
        },
      ],
    },
  ],
  [
    MN.fetchChatThreadFromServer,
    {
      methodName: MN.fetchChatThreadFromServer,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
      ],
    },
  ],
  [
    MN.getMessageThread,
    {
      methodName: MN.getMessageThread,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
      ],
    },
  ],
]);
