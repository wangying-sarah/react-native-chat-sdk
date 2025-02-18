import { datasheet } from '../__default__/Datasheet';
import type { ApiParams } from '../__internal__/DataTypes';
import RNFS from 'react-native-fs';

export const MN = {
  getGroupWithId: 'getGroupWithId',
  getJoinedGroups: 'getJoinedGroups',
  fetchJoinedGroupsFromServer: 'fetchJoinedGroupsFromServer',
  fetchPublicGroupsFromServer: 'fetchPublicGroupsFromServer',
  createGroup: 'createGroup',
  fetchGroupInfoFromServer: 'fetchGroupInfoFromServer',
  fetchMemberListFromServer: 'fetchMemberListFromServer',
  fetchBlockListFromServer: 'fetchBlockListFromServer',
  fetchMuteListFromServer: 'fetchMuteListFromServer',
  fetchWhiteListFromServer: 'fetchWhiteListFromServer',
  isMemberInWhiteListFromServer: 'isMemberInWhiteListFromServer',
  fetchGroupFileListFromServer: 'fetchGroupFileListFromServer',
  fetchAnnouncementFromServer: 'fetchAnnouncementFromServer',
  addMembers: 'addMembers',
  inviterUser: 'inviterUser',
  removeMembers: 'removeMembers',
  blockMembers: 'blockMembers',
  unblockMembers: 'unblockMembers',
  changeGroupName: 'changeGroupName',
  changeGroupDescription: 'changeGroupDescription',
  leaveGroup: 'leaveGroup',
  destroyGroup: 'destroyGroup',
  blockGroup: 'blockGroup',
  unblockGroup: 'unblockGroup',
  changeOwner: 'changeOwner',
  addAdmin: 'addAdmin',
  removeAdmin: 'removeAdmin',
  muteMembers: 'muteMembers',
  unMuteMembers: 'unMuteMembers',
  muteAllMembers: 'muteAllMembers',
  unMuteAllMembers: 'unMuteAllMembers',
  addWhiteList: 'addWhiteList',
  removeWhiteList: 'removeWhiteList',
  uploadGroupSharedFile: 'uploadGroupSharedFile',
  downloadGroupSharedFile: 'downloadGroupSharedFile',
  removeGroupSharedFile: 'removeGroupSharedFile',
  updateGroupAnnouncement: 'updateGroupAnnouncement',
  updateGroupExtension: 'updateGroupExtension',
  joinPublicGroup: 'joinPublicGroup',
  requestToJoinPublicGroup: 'requestToJoinPublicGroup',
  acceptJoinApplication: 'acceptJoinApplication',
  declineJoinApplication: 'declineJoinApplication',
  acceptInvitation: 'acceptInvitation',
  declineInvitation: 'declineInvitation',
};

export const metaDataList = new Map<string, ApiParams>([
  [
    MN.getGroupWithId,
    {
      methodName: MN.getGroupWithId,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.getJoinedGroups,
    {
      methodName: MN.getJoinedGroups,
      params: [],
    },
  ],
  [
    MN.fetchJoinedGroupsFromServer,
    {
      methodName: MN.fetchJoinedGroupsFromServer,
      params: [
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'pageNum',
          paramType: 'number',
          paramDefaultValue: 10,
        },
      ],
    },
  ],
  [
    MN.fetchPublicGroupsFromServer,
    {
      methodName: MN.fetchPublicGroupsFromServer,
      params: [
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
      ],
    },
  ],
  [
    MN.createGroup,
    {
      methodName: MN.createGroup,
      params: [
        {
          paramName: 'groupName',
          paramType: 'string',
          paramDefaultValue: '2022060502',
        },
        {
          paramName: 'desc',
          paramType: 'string',
          paramDefaultValue: 'This is a test group',
        },
        {
          paramName: 'allMembers',
          paramType: 'object',
          paramDefaultValue: [
            datasheet.accounts[0].id,
            datasheet.accounts[1].id,
            datasheet.accounts[2].id,
            datasheet.accounts[3].id,
          ],
        },
        {
          paramName: 'reason',
          paramType: 'string',
          paramDefaultValue: 'hello',
        },
        {
          paramName: 'options',
          paramType: 'object',
          paramDefaultValue: {
            style: 3,
            maxCount: 200,
            inviteNeedConfirm: false,
            ext: '',
          },
        },
      ],
    },
  ],
  [
    MN.fetchGroupInfoFromServer,
    {
      methodName: MN.fetchGroupInfoFromServer,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.fetchMemberListFromServer,
    {
      methodName: MN.fetchMemberListFromServer,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 10,
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
      ],
    },
  ],
  [
    MN.fetchBlockListFromServer,
    {
      methodName: MN.fetchBlockListFromServer,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 10,
        },
        {
          paramName: 'pageNum',
          paramType: 'number',
          paramDefaultValue: 1,
        },
      ],
    },
  ],
  [
    MN.fetchMuteListFromServer,
    {
      methodName: MN.fetchMuteListFromServer,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 10,
        },
        {
          paramName: 'pageNum',
          paramType: 'number',
          paramDefaultValue: 1,
        },
      ],
    },
  ],
  [
    MN.fetchWhiteListFromServer,
    {
      methodName: MN.fetchWhiteListFromServer,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.isMemberInWhiteListFromServer,
    {
      methodName: MN.isMemberInWhiteListFromServer,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.fetchGroupFileListFromServer,
    {
      methodName: MN.fetchGroupFileListFromServer,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 10,
        },
        {
          paramName: 'pageNum',
          paramType: 'number',
          paramDefaultValue: 1,
        },
      ],
    },
  ],
  [
    MN.fetchAnnouncementFromServer,
    {
      methodName: MN.fetchAnnouncementFromServer,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.addMembers,
    {
      methodName: MN.addMembers,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk001'],
        },
        {
          paramName: 'welcome',
          paramType: 'string',
          paramDefaultValue: 'welcome',
        },
      ],
    },
  ],
  [
    MN.inviterUser,
    {
      methodName: MN.inviterUser,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk002'],
        },
        {
          paramName: 'reason',
          paramType: 'string',
          paramDefaultValue: 'welcome',
        },
      ],
    },
  ],
  [
    MN.removeMembers,
    {
      methodName: MN.removeMembers,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk002'],
        },
      ],
    },
  ],
  [
    MN.blockMembers,
    {
      methodName: MN.blockMembers,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk002'],
        },
      ],
    },
  ],
  [
    MN.unblockMembers,
    {
      methodName: MN.unblockMembers,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk002'],
        },
      ],
    },
  ],
  [
    MN.changeGroupName,
    {
      methodName: MN.changeGroupName,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'name',
          paramType: 'string',
          paramDefaultValue: 'newName',
        },
      ],
    },
  ],
  [
    MN.changeGroupDescription,
    {
      methodName: MN.changeGroupDescription,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'desc',
          paramType: 'string',
          paramDefaultValue: 'new description',
        },
      ],
    },
  ],
  [
    MN.leaveGroup,
    {
      methodName: MN.leaveGroup,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.destroyGroup,
    {
      methodName: MN.destroyGroup,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.blockGroup,
    {
      methodName: MN.blockGroup,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.unblockGroup,
    {
      methodName: MN.unblockGroup,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.changeOwner,
    {
      methodName: MN.changeOwner,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'newOwner',
          paramType: 'string',
          paramDefaultValue: 'asterisk001',
        },
      ],
    },
  ],
  [
    MN.addAdmin,
    {
      methodName: MN.addAdmin,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'memberId',
          paramType: 'string',
          paramDefaultValue: 'asterisk002',
        },
      ],
    },
  ],
  [
    MN.removeAdmin,
    {
      methodName: MN.removeAdmin,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'memberId',
          paramType: 'string',
          paramDefaultValue: 'asterisk002',
        },
      ],
    },
  ],
  [
    MN.muteMembers,
    {
      methodName: MN.muteMembers,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk002'],
        },
        {
          paramName: 'duration',
          paramType: 'number',
          paramDefaultValue: 1000,
        },
      ],
    },
  ],
  [
    MN.unMuteMembers,
    {
      methodName: MN.unMuteMembers,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk002'],
        },
      ],
    },
  ],
  [
    MN.muteAllMembers,
    {
      methodName: MN.muteAllMembers,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.unMuteAllMembers,
    {
      methodName: MN.unMuteAllMembers,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.addWhiteList,
    {
      methodName: MN.addWhiteList,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk005'],
        },
      ],
    },
  ],
  [
    MN.removeWhiteList,
    {
      methodName: MN.removeWhiteList,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'members',
          paramType: 'object',
          paramDefaultValue: ['asterisk005'],
        },
      ],
    },
  ],
  [
    MN.uploadGroupSharedFile,
    {
      methodName: MN.uploadGroupSharedFile,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'filePath',
          paramType: 'string',
          paramDefaultValue: '/storage/emulated/0/Recorder/test.mp3',
        },
        {
          paramName: 'callback',
          paramType: 'object',
          paramDefaultValue: {},
        },
      ],
    },
  ],
  [
    MN.downloadGroupSharedFile,
    {
      methodName: MN.downloadGroupSharedFile,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'fileId',
          paramType: 'string',
          paramDefaultValue: 'ecd0a0e0-c913-11ec-815e-e332e86d3847',
        },
        {
          paramName: 'savePath',
          paramType: 'string',
          paramDefaultValue:
            RNFS.TemporaryDirectoryPath + '/easemob/easemob.file',
        },
        {
          paramName: 'callback',
          paramType: 'object',
          paramDefaultValue: {},
        },
      ],
    },
  ],
  [
    MN.removeGroupSharedFile,
    {
      methodName: MN.removeGroupSharedFile,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'fileId',
          paramType: 'string',
          paramDefaultValue: 'ecd0a0e0-c913-11ec-815e-e332e86d3847',
        },
      ],
    },
  ],
  [
    MN.updateGroupAnnouncement,
    {
      methodName: MN.updateGroupAnnouncement,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'announcement',
          paramType: 'string',
          paramDefaultValue: 'new announcement',
        },
      ],
    },
  ],
  [
    MN.updateGroupExtension,
    {
      methodName: MN.updateGroupExtension,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'extension',
          paramType: 'string',
          paramDefaultValue: 'new extension',
        },
      ],
    },
  ],
  [
    MN.joinPublicGroup,
    {
      methodName: MN.joinPublicGroup,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
      ],
    },
  ],
  [
    MN.requestToJoinPublicGroup,
    {
      methodName: MN.requestToJoinPublicGroup,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'reason',
          paramType: 'string',
          paramDefaultValue: 'join in',
        },
      ],
    },
  ],
  [
    MN.acceptJoinApplication,
    {
      methodName: MN.acceptJoinApplication,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'username',
          paramType: 'string',
          paramDefaultValue: 'asterisk003',
        },
      ],
    },
  ],
  [
    MN.declineJoinApplication,
    {
      methodName: MN.declineJoinApplication,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'username',
          paramType: 'string',
          paramDefaultValue: 'asterisk003',
        },
        {
          paramName: 'reason',
          paramType: 'string',
          paramDefaultValue: 'reason',
        },
      ],
    },
  ],
  [
    MN.acceptInvitation,
    {
      methodName: MN.acceptInvitation,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'inviter',
          paramType: 'string',
          paramDefaultValue: 'asterisk001',
        },
      ],
    },
  ],
  [
    MN.declineInvitation,
    {
      methodName: MN.declineInvitation,
      params: [
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '180804431970306',
        },
        {
          paramName: 'inviter',
          paramType: 'string',
          paramDefaultValue: 'asterisk001',
        },
        {
          paramName: 'reason',
          paramType: 'string',
          paramDefaultValue: 'reason',
        },
      ],
    },
  ],
]);
