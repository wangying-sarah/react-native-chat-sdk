import {
  QuickTestScreenBase,
  QuickTestState,
  QuickTestStateless,
  registerStateDataList,
} from './QuickTestScreenBase';
import { MN, metaDataList } from './QuickTestGroupData';
import {
  ChatClient,
  ChatError,
  ChatGroupOptions,
  ChatGroupFileStatusCallback,
} from 'react-native-chat-sdk';

export interface QuickTestGroupState extends QuickTestState {}

export interface QuickTestGroupStateless extends QuickTestStateless {}

export class QuickTestScreenGroup extends QuickTestScreenBase<
  QuickTestGroupState,
  QuickTestGroupStateless
> {
  protected static TAG = 'QuickTestScreenGroup';
  public static route = 'QuickTestScreenGroup';
  statelessData: QuickTestGroupStateless;

  constructor(props: { navigation: any }) {
    super(props);
    this.state = {
      cmd: '',
      connect_listener: '',
      multi_listener: '',
      custom_listener: '',
      chat_listener: '',
      contact_listener: '',
      conv_listener: '',
      group_listener: '',
      room_listener: '',
      presence_listener: '',
      sendResult: '',
      recvResult: '',
      exceptResult: '',
      cb_result: '',
    };
    this.statelessData = {};
    registerStateDataList(metaDataList);
  }

  /**
   * 如果有特殊需求，可以将监听器移动到各个子类里面进行处理。
   */
  protected addListener?(): void {
    if (super.addListener) {
      super.addListener();
    }
  }

  protected removeListener?(): void {
    if (super.removeListener) {
      super.removeListener();
    }
  }

  private createCallback(): ChatGroupFileStatusCallback {
    const ret = new (class implements ChatGroupFileStatusCallback {
      that: QuickTestScreenGroup;
      constructor(t: QuickTestScreenGroup) {
        this.that = t;
      }
      onProgress(groupId: string, filePath: string, progress: number): void {
        console.log(
          `${QuickTestScreenGroup.TAG}: onProgress: `,
          groupId,
          filePath,
          progress
        );
      }
      onError(groupId: string, filePath: string, error: ChatError): void {
        console.log(
          `${QuickTestScreenGroup.TAG}: onError: `,
          groupId,
          filePath,
          error
        );
      }
      onSuccess(groupId: string, filePath: string): void {
        console.log(
          `${QuickTestScreenGroup.TAG}: onSuccess: `,
          groupId,
          filePath
        );
      }
    })(this);
    return ret;
  }

  /**
   * 调用对应的SDK方法
   * @param name 方法名称
   */
  protected callApi(name: string): void {
    super.callApi(name);
    switch (name) {
      case MN.getGroupWithId:
        {
          const methodName = this.metaData.get(MN.getGroupWithId)?.methodName!;
          console.log(`${MN.getGroupWithId} === ${methodName}`);
          const groupId = this.metaData.get(MN.getGroupWithId)?.params[0]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.getGroupWithId(groupId),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.getJoinedGroups:
        {
          const methodName = this.metaData.get(MN.getJoinedGroups)?.methodName!;
          console.log(`${MN.getJoinedGroups} === ${methodName}`);
          this.tryCatch(
            ChatClient.getInstance().groupManager.getJoinedGroups(),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.fetchJoinedGroupsFromServer:
        {
          const methodName = this.metaData.get(MN.fetchJoinedGroupsFromServer)
            ?.methodName!;
          console.log(`${MN.fetchJoinedGroupsFromServer} === ${methodName}`);
          const pageSize = this.metaData.get(MN.fetchJoinedGroupsFromServer)
            ?.params[0].paramDefaultValue;
          const pageNum = this.metaData.get(MN.fetchJoinedGroupsFromServer)
            ?.params[1].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.fetchJoinedGroupsFromServer(
              pageSize,
              pageNum
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.fetchPublicGroupsFromServer:
        {
          const methodName = this.metaData.get(MN.fetchPublicGroupsFromServer)
            ?.methodName!;
          console.log(`${MN.fetchPublicGroupsFromServer} === ${methodName}`);
          const pageSize = this.metaData.get(MN.fetchPublicGroupsFromServer)
            ?.params[0].paramDefaultValue;
          const cursor = this.metaData.get(MN.fetchPublicGroupsFromServer)
            ?.params[1].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.fetchPublicGroupsFromServer(
              pageSize,
              cursor
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.createGroup:
        {
          const methodName = this.metaData.get(MN.createGroup)?.methodName!;
          console.log(`${MN.createGroup} === ${methodName}`);
          const groupName = this.metaData.get(MN.createGroup)?.params[0]
            .paramDefaultValue;
          const desc = this.metaData.get(MN.createGroup)?.params[1]
            .paramDefaultValue;
          const allMembers: Array<string> = this.metaData.get(MN.createGroup)
            ?.params[2].paramDefaultValue;
          const reason = this.metaData.get(MN.createGroup)?.params[3]
            .paramDefaultValue;
          const option: ChatGroupOptions = this.metaData.get(MN.createGroup)
            ?.params[4].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.createGroup(
              option,
              groupName,
              desc,
              allMembers,
              reason
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.fetchGroupInfoFromServer:
        {
          const methodName = this.metaData.get(MN.fetchGroupInfoFromServer)
            ?.methodName!;
          console.log(`${MN.fetchGroupInfoFromServer} === ${methodName}`);
          const groupId = this.metaData.get(MN.fetchGroupInfoFromServer)
            ?.params[0].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.fetchGroupInfoFromServer(
              groupId
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.fetchMemberListFromServer:
        {
          const methodName = this.metaData.get(MN.fetchMemberListFromServer)
            ?.methodName!;
          console.log(`${MN.fetchMemberListFromServer} === ${methodName}`);
          const groupId = this.metaData.get(MN.fetchMemberListFromServer)
            ?.params[0].paramDefaultValue;
          const pageSize = this.metaData.get(MN.fetchMemberListFromServer)
            ?.params[1].paramDefaultValue;
          const cursor = this.metaData.get(MN.fetchMemberListFromServer)
            ?.params[2].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.fetchMemberListFromServer(
              groupId,
              pageSize,
              cursor
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.fetchBlockListFromServer:
        {
          const methodName = this.metaData.get(MN.fetchBlockListFromServer)
            ?.methodName!;
          console.log(`${MN.fetchBlockListFromServer} === ${methodName}`);
          const groupId = this.metaData.get(MN.fetchBlockListFromServer)
            ?.params[0].paramDefaultValue;
          const pageSize = this.metaData.get(MN.fetchBlockListFromServer)
            ?.params[1].paramDefaultValue;
          const pageNum = this.metaData.get(MN.fetchBlockListFromServer)
            ?.params[2].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.fetchBlockListFromServer(
              groupId,
              pageSize,
              pageNum
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.fetchMuteListFromServer:
        {
          const methodName = this.metaData.get(MN.fetchMuteListFromServer)
            ?.methodName!;
          console.log(`${MN.fetchMuteListFromServer} === ${methodName}`);
          const groupId = this.metaData.get(MN.fetchMuteListFromServer)
            ?.params[0].paramDefaultValue;
          const pageSize = this.metaData.get(MN.fetchMuteListFromServer)
            ?.params[1].paramDefaultValue;
          const pageNum = this.metaData.get(MN.fetchMuteListFromServer)
            ?.params[2].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.fetchMuteListFromServer(
              groupId,
              pageSize,
              pageNum
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.fetchWhiteListFromServer:
        {
          const methodName = this.metaData.get(MN.fetchWhiteListFromServer)
            ?.methodName!;
          console.log(`${MN.fetchWhiteListFromServer} === ${methodName}`);
          const groupId = this.metaData.get(MN.fetchWhiteListFromServer)
            ?.params[0].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.fetchWhiteListFromServer(
              groupId
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.isMemberInWhiteListFromServer:
        {
          const methodName = this.metaData.get(MN.isMemberInWhiteListFromServer)
            ?.methodName!;
          console.log(`${MN.isMemberInWhiteListFromServer} === ${methodName}`);
          const groupId = this.metaData.get(MN.isMemberInWhiteListFromServer)
            ?.params[0].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.isMemberInWhiteListFromServer(
              groupId
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.fetchGroupFileListFromServer:
        {
          const methodName = this.metaData.get(MN.fetchGroupFileListFromServer)
            ?.methodName!;
          console.log(`${MN.fetchGroupFileListFromServer} === ${methodName}`);
          const groupId = this.metaData.get(MN.fetchGroupFileListFromServer)
            ?.params[0].paramDefaultValue;
          const pageSize = this.metaData.get(MN.fetchGroupFileListFromServer)
            ?.params[1].paramDefaultValue;
          const pageNum = this.metaData.get(MN.fetchGroupFileListFromServer)
            ?.params[2].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.fetchGroupFileListFromServer(
              groupId,
              pageSize,
              pageNum
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.addMembers:
        {
          const methodName = this.metaData.get(MN.addMembers)?.methodName!;
          console.log(`${MN.addMembers} === ${methodName}`);
          const groupId = this.metaData.get(MN.addMembers)?.params[0]
            .paramDefaultValue;
          const members = this.metaData.get(MN.addMembers)?.params[1]
            .paramDefaultValue;
          const welcome = this.metaData.get(MN.addMembers)?.params[2]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.addMembers(
              groupId,
              members,
              welcome
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.inviterUser:
        {
          const methodName = this.metaData.get(MN.inviterUser)?.methodName!;
          console.log(`${MN.inviterUser} === ${methodName}`);
          const groupId = this.metaData.get(MN.inviterUser)?.params[0]
            .paramDefaultValue;
          const members = this.metaData.get(MN.inviterUser)?.params[1]
            .paramDefaultValue;
          const reason = this.metaData.get(MN.inviterUser)?.params[2]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.inviterUser(
              groupId,
              members,
              reason
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.removeMembers:
        {
          const methodName = this.metaData.get(MN.removeMembers)?.methodName!;
          console.log(`${MN.removeMembers} === ${methodName}`);
          const groupId = this.metaData.get(MN.removeMembers)?.params[0]
            .paramDefaultValue;
          const members = this.metaData.get(MN.removeMembers)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.removeMembers(
              groupId,
              members
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.blockMembers:
        {
          const methodName = this.metaData.get(MN.blockMembers)?.methodName!;
          console.log(`${MN.blockMembers} === ${methodName}`);
          const groupId = this.metaData.get(MN.blockMembers)?.params[0]
            .paramDefaultValue;
          const members = this.metaData.get(MN.blockMembers)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.blockMembers(
              groupId,
              members
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.unblockMembers:
        {
          const methodName = this.metaData.get(MN.unblockMembers)?.methodName!;
          console.log(`${MN.unblockMembers} === ${methodName}`);
          const groupId = this.metaData.get(MN.unblockMembers)?.params[0]
            .paramDefaultValue;
          const members = this.metaData.get(MN.unblockMembers)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.unblockMembers(
              groupId,
              members
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.changeGroupName:
        {
          const methodName = this.metaData.get(MN.changeGroupName)?.methodName!;
          console.log(`${MN.changeGroupName} === ${methodName}`);
          const groupId = this.metaData.get(MN.changeGroupName)?.params[0]
            .paramDefaultValue;
          const local_name = this.metaData.get(MN.changeGroupName)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.changeGroupName(
              groupId,
              local_name
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.changeGroupDescription:
        {
          const methodName = this.metaData.get(MN.changeGroupDescription)
            ?.methodName!;
          console.log(`${MN.changeGroupDescription} === ${methodName}`);
          const groupId = this.metaData.get(MN.changeGroupDescription)
            ?.params[0].paramDefaultValue;
          const desc = this.metaData.get(MN.changeGroupDescription)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.changeGroupDescription(
              groupId,
              desc
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.leaveGroup:
        {
          const methodName = this.metaData.get(MN.leaveGroup)?.methodName!;
          console.log(`${MN.leaveGroup} === ${methodName}`);
          const groupId = this.metaData.get(MN.leaveGroup)?.params[0]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.leaveGroup(groupId),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.destroyGroup:
        {
          const methodName = this.metaData.get(MN.destroyGroup)?.methodName!;
          console.log(`${MN.destroyGroup} === ${methodName}`);
          const groupId = this.metaData.get(MN.destroyGroup)?.params[0]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.destroyGroup(groupId),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.blockGroup:
        {
          const methodName = this.metaData.get(MN.blockGroup)?.methodName!;
          console.log(`${MN.blockGroup} === ${methodName}`);
          const groupId = this.metaData.get(MN.blockGroup)?.params[0]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.blockGroup(groupId),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.unblockGroup:
        {
          const methodName = this.metaData.get(MN.unblockGroup)?.methodName!;
          console.log(`${MN.unblockGroup} === ${methodName}`);
          const groupId = this.metaData.get(MN.unblockGroup)?.params[0]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.unblockGroup(groupId),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.changeOwner:
        {
          const methodName = this.metaData.get(MN.changeOwner)?.methodName!;
          console.log(`${MN.changeOwner} === ${methodName}`);
          const groupId = this.metaData.get(MN.changeOwner)?.params[0]
            .paramDefaultValue;
          const newOwner = this.metaData.get(MN.changeOwner)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.changeOwner(
              groupId,
              newOwner
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.addAdmin:
        {
          const methodName = this.metaData.get(MN.addAdmin)?.methodName!;
          console.log(`${MN.addAdmin} === ${methodName}`);
          const groupId = this.metaData.get(MN.addAdmin)?.params[0]
            .paramDefaultValue;
          const memberId = this.metaData.get(MN.addAdmin)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.addAdmin(groupId, memberId),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.removeAdmin:
        {
          const methodName = this.metaData.get(MN.removeAdmin)?.methodName!;
          console.log(`${MN.removeAdmin} === ${methodName}`);
          const groupId = this.metaData.get(MN.removeAdmin)?.params[0]
            .paramDefaultValue;
          const memberId = this.metaData.get(MN.removeAdmin)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.removeAdmin(
              groupId,
              memberId
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.muteMembers:
        {
          const methodName = this.metaData.get(MN.muteMembers)?.methodName!;
          console.log(`${MN.muteMembers} === ${methodName}`);
          const groupId = this.metaData.get(MN.muteMembers)?.params[0]
            .paramDefaultValue;
          const members = this.metaData.get(MN.muteMembers)?.params[1]
            .paramDefaultValue;
          const duration = this.metaData.get(MN.muteMembers)?.params[2]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.muteMembers(
              groupId,
              members,
              duration
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.unMuteMembers:
        {
          const methodName = this.metaData.get(MN.unMuteMembers)?.methodName!;
          console.log(`${MN.unMuteMembers} === ${methodName}`);
          const groupId = this.metaData.get(MN.unMuteMembers)?.params[0]
            .paramDefaultValue;
          const members = this.metaData.get(MN.unMuteMembers)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.unMuteMembers(
              groupId,
              members
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.muteAllMembers:
        {
          const methodName = this.metaData.get(MN.muteAllMembers)?.methodName!;
          console.log(`${MN.muteAllMembers} === ${methodName}`);
          const groupId = this.metaData.get(MN.muteAllMembers)?.params[0]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.muteAllMembers(groupId),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.unMuteAllMembers:
        {
          const methodName = this.metaData.get(MN.unMuteAllMembers)
            ?.methodName!;
          console.log(`${MN.unMuteAllMembers} === ${methodName}`);
          const groupId = this.metaData.get(MN.unMuteAllMembers)?.params[0]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.unMuteAllMembers(groupId),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.addWhiteList:
        {
          const methodName = this.metaData.get(MN.addWhiteList)?.methodName!;
          console.log(`${MN.addWhiteList} === ${methodName}`);
          const groupId = this.metaData.get(MN.addWhiteList)?.params[0]
            .paramDefaultValue;
          const members = this.metaData.get(MN.addWhiteList)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.addWhiteList(
              groupId,
              members
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.removeWhiteList:
        {
          const methodName = this.metaData.get(MN.removeWhiteList)?.methodName!;
          console.log(`${MN.removeWhiteList} === ${methodName}`);
          const groupId = this.metaData.get(MN.removeWhiteList)?.params[0]
            .paramDefaultValue;
          const members = this.metaData.get(MN.removeWhiteList)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.removeWhiteList(
              groupId,
              members
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.uploadGroupSharedFile:
        {
          const methodName = this.metaData.get(MN.uploadGroupSharedFile)
            ?.methodName!;
          console.log(`${MN.uploadGroupSharedFile} === ${methodName}`);
          const groupId = this.metaData.get(MN.uploadGroupSharedFile)?.params[0]
            .paramDefaultValue;
          const filePath = this.metaData.get(MN.uploadGroupSharedFile)
            ?.params[1].paramDefaultValue;
          let cb = this.createCallback();

          this.tryCatch(
            ChatClient.getInstance().groupManager.uploadGroupSharedFile(
              groupId,
              filePath,
              cb
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.downloadGroupSharedFile:
        {
          const methodName = this.metaData.get(MN.downloadGroupSharedFile)
            ?.methodName!;
          console.log(`${MN.downloadGroupSharedFile} === ${methodName}`);
          const groupId = this.metaData.get(MN.downloadGroupSharedFile)
            ?.params[0].paramDefaultValue;
          const fileId = this.metaData.get(MN.downloadGroupSharedFile)
            ?.params[1].paramDefaultValue;
          const savePath = this.metaData.get(MN.downloadGroupSharedFile)
            ?.params[2].paramDefaultValue;
          let cb = this.createCallback();

          this.tryCatch(
            ChatClient.getInstance().groupManager.downloadGroupSharedFile(
              groupId,
              fileId,
              savePath,
              cb
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.removeGroupSharedFile:
        {
          const methodName = this.metaData.get(MN.removeGroupSharedFile)
            ?.methodName!;
          console.log(`${MN.removeGroupSharedFile} === ${methodName}`);
          const groupId = this.metaData.get(MN.removeGroupSharedFile)?.params[0]
            .paramDefaultValue;
          const fileId = this.metaData.get(MN.removeGroupSharedFile)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.removeGroupSharedFile(
              groupId,
              fileId
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.fetchAnnouncementFromServer:
        {
          const methodName = this.metaData.get(MN.fetchAnnouncementFromServer)
            ?.methodName!;
          console.log(`${MN.fetchAnnouncementFromServer} === ${methodName}`);
          const groupId = this.metaData.get(MN.fetchAnnouncementFromServer)
            ?.params[0].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.fetchAnnouncementFromServer(
              groupId
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.updateGroupAnnouncement:
        {
          const methodName = this.metaData.get(MN.updateGroupAnnouncement)
            ?.methodName!;
          console.log(`${MN.updateGroupAnnouncement} === ${methodName}`);
          const groupId = this.metaData.get(MN.updateGroupAnnouncement)
            ?.params[0].paramDefaultValue;
          const announcement = this.metaData.get(MN.updateGroupAnnouncement)
            ?.params[1].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.updateGroupAnnouncement(
              groupId,
              announcement
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.updateGroupExtension:
        {
          const methodName = this.metaData.get(MN.updateGroupExtension)
            ?.methodName!;
          console.log(`${MN.updateGroupExtension} === ${methodName}`);
          const groupId = this.metaData.get(MN.updateGroupExtension)?.params[0]
            .paramDefaultValue;
          const extension = this.metaData.get(MN.updateGroupExtension)
            ?.params[1].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.updateGroupExtension(
              groupId,
              extension
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.updateGroupExtension:
        {
          const methodName = this.metaData.get(MN.updateGroupExtension)
            ?.methodName!;
          console.log(`${MN.updateGroupExtension} === ${methodName}`);
          const groupId = this.metaData.get(MN.updateGroupExtension)?.params[0]
            .paramDefaultValue;
          const extension = this.metaData.get(MN.updateGroupExtension)
            ?.params[1].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.updateGroupExtension(
              groupId,
              extension
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.joinPublicGroup:
        {
          const methodName = this.metaData.get(MN.joinPublicGroup)?.methodName!;
          console.log(`${MN.joinPublicGroup} === ${methodName}`);
          const groupId = this.metaData.get(MN.joinPublicGroup)?.params[0]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.joinPublicGroup(groupId),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.requestToJoinPublicGroup:
        {
          const methodName = this.metaData.get(MN.requestToJoinPublicGroup)
            ?.methodName!;
          console.log(`${MN.requestToJoinPublicGroup} === ${methodName}`);
          const groupId = this.metaData.get(MN.requestToJoinPublicGroup)
            ?.params[0].paramDefaultValue;
          const reason = this.metaData.get(MN.requestToJoinPublicGroup)
            ?.params[1].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.requestToJoinPublicGroup(
              groupId,
              reason
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.acceptJoinApplication:
        {
          const methodName = this.metaData.get(MN.acceptJoinApplication)
            ?.methodName!;
          console.log(`${MN.acceptJoinApplication} === ${methodName}`);
          const groupId = this.metaData.get(MN.acceptJoinApplication)?.params[0]
            .paramDefaultValue;
          const username = this.metaData.get(MN.acceptJoinApplication)
            ?.params[1].paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.acceptJoinApplication(
              groupId,
              username
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.declineJoinApplication:
        {
          const methodName = this.metaData.get(MN.declineJoinApplication)
            ?.methodName!;
          console.log(`${MN.declineJoinApplication} === ${methodName}`);
          const groupId = this.metaData.get(MN.declineJoinApplication)
            ?.params[0].paramDefaultValue;
          const username = this.metaData.get(MN.declineJoinApplication)
            ?.params[1].paramDefaultValue;
          const reason = this.metaData.get(MN.declineJoinApplication)?.params[2]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.declineJoinApplication(
              groupId,
              username,
              reason
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.acceptInvitation:
        {
          const methodName = this.metaData.get(MN.acceptInvitation)
            ?.methodName!;
          console.log(`${MN.acceptInvitation} === ${methodName}`);
          const groupId = this.metaData.get(MN.acceptInvitation)?.params[0]
            .paramDefaultValue;
          const inviter = this.metaData.get(MN.acceptInvitation)?.params[1]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.acceptInvitation(
              groupId,
              inviter
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;
      case MN.declineInvitation:
        {
          const methodName = this.metaData.get(MN.declineInvitation)
            ?.methodName!;
          console.log(`${MN.declineInvitation} === ${methodName}`);
          const groupId = this.metaData.get(MN.declineInvitation)?.params[0]
            .paramDefaultValue;
          const inviter = this.metaData.get(MN.declineInvitation)?.params[1]
            .paramDefaultValue;
          const reason = this.metaData.get(MN.declineInvitation)?.params[2]
            .paramDefaultValue;

          this.tryCatch(
            ChatClient.getInstance().groupManager.declineInvitation(
              groupId,
              inviter,
              reason
            ),
            QuickTestScreenGroup.TAG,
            methodName
          );
        }
        break;

      default:
        break;
    }
  }
}
