import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import {
  ChatClient,
  ChatGroupMessageAck,
  ChatMessageEventListener,
  ChatMessage,
  ChatMessageStatusCallback,
  ChatMessageType,
  ChatMessageChatType,
  ChatError,
  ChatConversationType,
  ChatMessageThreadEvent,
  ChatMessageReactionEvent,
} from 'react-native-chat-sdk';
import { styleValues } from '../__internal__/Css';
import {
  LeafScreenBase,
  StateBase,
  StatelessBase,
} from '../__internal__/LeafScreenBase';
import { ChatManagerCache } from './ChatManagerData';
import type { ApiParams } from '../__internal__/DataTypes';
import { datasheet } from '../__default__/Datasheet';

const MN = {
  sendMessage: 'sendMessage',
};

export interface StateSendMessage extends StateBase {
  messageType: ChatMessageType;

  targetId: string;
  targetType: ChatMessageChatType;
  convType: ChatConversationType;

  // text messge body
  content: string;

  // file message body
  filePath: string;
  displayName: string;
  width: number;
  height: number;
  fileSize: number;
  duration: number;
  thumbnailLocalPath: string;

  // localtion message body
  latitude: string;
  longitude: string;
  address: string;

  // cmd message body
  action: string;

  // custom message body
  event: string;
  ext: string;

  cb_result: string;
}

export interface StatelessSendMessage extends StatelessBase {}

export class SendMessageLeafScreen extends LeafScreenBase<StateSendMessage> {
  protected static TAG = 'SendMessageLeafScreen';
  public static route = 'SendMessageLeafScreen';
  metaData: Map<string, ApiParams>;
  statelessData: StatelessSendMessage;
  constructor(props: { navigation: any }) {
    super(props);
    this.metaData = new Map<string, ApiParams>([
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
    ]);
    this.state = {
      sendResult: '',
      recvResult: '',
      exceptResult: '',
      cb_result: '',
      messageType: ChatMessageType.TXT,

      targetId: datasheet.accounts[2].id,
      targetType: ChatMessageChatType.PeerChat,
      convType: ChatConversationType.PeerChat,

      // text messge body
      content: '',

      // file message body
      filePath: '',
      displayName: '',
      width: 0,
      height: 0,
      fileSize: 0,
      duration: 0,
      thumbnailLocalPath: '',

      // localtion message body
      latitude: '',
      longitude: '',
      address: '',

      // cmd message body
      action: '',

      // custom message body
      event: '',
      ext: '',
    };
    this.statelessData = {};
  }

  protected renderCallBackResult(): ReactNode[] {
    const { cb_result } = this.state;
    return [
      <View
        key={this.generateKey('cb_result', 'callback')}
        style={styleValues.containerRow}
      >
        <Text selectable={true} style={styleValues.textTipStyle}>
          cb_result: {cb_result}
        </Text>
      </View>,
    ];
  }

  protected renderResult(): ReactNode {
    return (
      <View style={styleValues.containerColumn}>
        {this.renderSendResult()}
        {this.renderCallBackResult()}
        {this.renderRecvResult()}
        {this.renderExceptionResult()}
      </View>
    );
  }

  protected renderBody(): ReactNode {
    console.log(`${SendMessageLeafScreen.TAG}: renderBody: `);
    return (
      <View style={styleValues.containerColumn}>{this.sendMessage()}</View>
    );
  }

  protected addListener?(): void {
    let msgListener = new (class implements ChatMessageEventListener {
      that: SendMessageLeafScreen;
      constructor(parent: any) {
        this.that = parent as SendMessageLeafScreen;
      }
      onMessageReactionDidChange(list: Array<ChatMessageReactionEvent>): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onMessageReactionDidChange: `,
          list
        );
      }
      onChatMessageThreadCreated(msgThread: ChatMessageThreadEvent): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onChatMessageThreadCreated: `,
          msgThread
        );
      }
      onChatMessageThreadUpdated(msgThread: ChatMessageThreadEvent): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onChatMessageThreadUpdated: `,
          msgThread
        );
      }
      onChatMessageThreadDestroyed(msgThread: ChatMessageThreadEvent): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onChatMessageThreadDestroyed: `,
          msgThread
        );
      }
      onChatMessageThreadUserRemoved(msgThread: ChatMessageThreadEvent): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onChatMessageThreadUserRemoved: `,
          msgThread
        );
      }
      onMessagesReceived(messages: ChatMessage[]): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onMessagesReceived: `,
          messages
        );
        if (messages.length > 0) {
          ChatManagerCache.getInstance().addRecvMessage(
            messages[messages.length - 1]
          );
        }
      }
      onCmdMessagesReceived(messages: ChatMessage[]): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onCmdMessagesReceived: `,
          messages
        );
        if (messages.length > 0) {
          ChatManagerCache.getInstance().addRecvMessage(
            messages[messages.length - 1]
          );
        }
      }
      onMessagesRead(messages: ChatMessage[]): void {
        console.log(`${SendMessageLeafScreen.TAG}: onMessagesRead: `, messages);
        this.that.setState({
          recvResult: `onMessagesRead: ${messages.length}: ` + messages,
        });
      }
      onGroupMessageRead(groupMessageAcks: ChatGroupMessageAck[]): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onGroupMessageRead: `,
          groupMessageAcks
        );
        this.that.setState({
          recvResult:
            `onGroupMessageRead: ${groupMessageAcks.length}: ` +
            groupMessageAcks,
        });
      }
      onMessagesDelivered(messages: ChatMessage[]): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onMessagesDelivered: ${messages.length}: `,
          messages,
          messages
        );
        this.that.setState({
          recvResult: `onMessagesDelivered: ${messages.length}: ` + messages,
        });
      }
      onMessagesRecalled(messages: ChatMessage[]): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onMessagesRecalled: `,
          messages
        );
        this.that.setState({
          recvResult: `onMessagesRecalled: ${messages.length}: ` + messages,
        });
      }
      onConversationsUpdate(): void {
        console.log(`${SendMessageLeafScreen.TAG}: onConversationsUpdate: `);
        this.that.setState({ recvResult: 'onConversationsUpdate' });
      }
      onConversationRead(from: string, to?: string): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onConversationRead: `,
          from,
          to
        );
        this.that.setState({
          recvResult: `onConversationRead: ${from}, ${to}`,
        });
      }
    })(this);

    ChatClient.getInstance().chatManager.removeAllMessageListener();
    ChatClient.getInstance().chatManager.addMessageListener(msgListener);

    const msgCallback = new (class implements ChatMessageStatusCallback {
      that: SendMessageLeafScreen;
      constructor(parent: SendMessageLeafScreen) {
        this.that = parent;
      }
      onProgress(localMsgId: string, progress: number): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onProgress: ${localMsgId}, ${progress}`
        );
        this.that.setState({ cb_result: `${localMsgId}, ${progress}` });
      }
      onError(localMsgId: string, error: ChatError): void {
        console.log(
          `${SendMessageLeafScreen.TAG}: onError: ${localMsgId}, ${error}`
        );
        this.that.setState({ cb_result: JSON.stringify(error) });
      }
      onSuccess(message: ChatMessage): void {
        console.log(`${SendMessageLeafScreen.TAG}: onSuccess: ${message}`);
        ChatManagerCache.getInstance().addSendMessage(message);
        this.that.setState({ cb_result: JSON.stringify(message) });
      }
    })(this);

    ChatManagerCache.getInstance().removeAllListener();
    ChatManagerCache.getInstance().addListener(msgCallback);
  }

  protected removeListener?(): void {
    ChatClient.getInstance().chatManager.removeAllMessageListener();
  }

  protected renderSendMessageBodyText(): ReactNode[] {
    const { content } = this.state;
    return [
      this.renderParamWithInput(
        ChatMessageType.TXT,
        content,
        (text: string) => {
          this.setState({
            content: text,
          });
        }
      ),
    ];
  }
  protected renderSendMessageBodyCmd(): ReactNode[] {
    const { action } = this.state;
    return [
      this.renderParamWithInput(ChatMessageType.CMD, action, (text: string) => {
        this.setState({
          action: text,
        });
      }),
    ];
  }
  protected renderSendMessageBodyLocation(): ReactNode[] {
    const { latitude, longitude, address } = this.state;
    return [
      this.renderParamWithInput('latitude', latitude, (text: string) => {
        this.setState({
          latitude: text,
        });
      }),
      this.renderParamWithInput('longitude', longitude, (text: string) => {
        this.setState({
          longitude: text,
        });
      }),
      this.renderParamWithInput('address', address, (text: string) => {
        this.setState({
          address: text,
        });
      }),
    ];
  }

  protected renderSendMessageBodyCustom(): ReactNode[] {
    const { event, ext } = this.state;
    return [
      this.renderParamWithInput('event', event, (text: string) => {
        this.setState({
          event: text,
        });
      }),
      this.renderParamWithInput('ext', ext, (text: string) => {
        this.setState({
          ext: text,
        });
      }),
    ];
  }
  protected renderSendMessageBodyFile(): ReactNode[] {
    const { filePath, displayName } = this.state;
    return [
      this.renderParamWithSelectFile('filePath', filePath, (json: string) => {
        const j = JSON.parse(json);
        // console.log('test: j: ', j, decodeURIComponent(j.uri));
        this.setState({
          filePath: j.localPath,
          displayName: j.name,
        });
      }),
      this.renderParamWithInput('displayName', displayName, (text: string) => {
        this.setState({
          displayName: text,
        });
      }),
    ];
  }
  protected renderSendMessageBodyVoice(): ReactNode[] {
    const { filePath, displayName, duration } = this.state;
    return [
      this.renderParamWithSelectFile('filePath', filePath, (json: string) => {
        const j = JSON.parse(json);
        this.setState({
          filePath: j.localPath,
          displayName: j.name,
          duration: j.duration ?? 5,
        });
      }),
      this.renderParamWithInput('displayName', displayName, (text: string) => {
        this.setState({
          displayName: text,
        });
      }),
      this.renderParamWithInput(
        'duration',
        duration.toString(),
        (text: string) => {
          this.setState({
            duration: Number.parseInt(text, 10),
          });
        }
      ),
    ];
  }
  protected renderSendMessageBodyImage(): ReactNode[] {
    const { filePath, displayName } = this.state;
    return [
      this.renderParamWithSelectFile('filePath', filePath, (json: string) => {
        const j = JSON.parse(json);
        this.setState({
          filePath: j.localPath,
          thumbnailLocalPath: j.localPath,
          displayName: j.name,
          width: 100,
          height: 100,
        });
      }),
      this.renderParamWithInput('displayName', displayName, (text: string) => {
        this.setState({
          displayName: text,
        });
      }),
    ];
  }
  protected renderSendMessageBodyVideo(): ReactNode[] {
    const { filePath, displayName, thumbnailLocalPath, duration } = this.state;
    return [
      this.renderParamWithSelectFile('filePath', filePath, (json: string) => {
        const j = JSON.parse(json);
        this.setState({
          filePath: j.localPath,
          displayName: j.name,
          width: 100,
          height: 100,
        });
      }),
      this.renderParamWithInput('displayName', displayName, (text: string) => {
        this.setState({
          displayName: text,
        });
      }),
      this.renderParamWithSelectFile(
        'thumbnailLocalPath',
        thumbnailLocalPath,
        (json: string) => {
          const j = JSON.parse(json);
          this.setState({
            thumbnailLocalPath: j.localPath,
          });
        }
      ),
      this.renderParamWithInput(
        'duration',
        duration.toString(),
        (text: string) => {
          this.setState({
            duration: Number.parseInt(text, 10),
          });
        }
      ),
    ];
  }

  protected renderSendMessageBody(bodyType: ChatMessageType): ReactNode[] {
    if (bodyType === ChatMessageType.TXT) {
      return this.renderSendMessageBodyText();
    } else if (bodyType === ChatMessageType.CMD) {
      return this.renderSendMessageBodyCmd();
    } else if (bodyType === ChatMessageType.IMAGE) {
      return this.renderSendMessageBodyImage();
    } else if (bodyType === ChatMessageType.VOICE) {
      return this.renderSendMessageBodyVoice();
    } else if (bodyType === ChatMessageType.VIDEO) {
      return this.renderSendMessageBodyVideo();
    } else if (bodyType === ChatMessageType.FILE) {
      return this.renderSendMessageBodyFile();
    } else if (bodyType === ChatMessageType.LOCATION) {
      return this.renderSendMessageBodyLocation();
    } else if (bodyType === ChatMessageType.CUSTOM) {
      return this.renderSendMessageBodyCustom();
    } else {
      throw new Error('error: ' + bodyType);
    }
  }

  protected sendMessage(): ReactNode[] {
    this.setKeyPrefix(MN.sendMessage);
    const data = this.metaData.get(MN.sendMessage)!;
    const { targetId, targetType, messageType } = this.state;

    const getTargetId = (tt: ChatMessageChatType): string => {
      if (tt === ChatMessageChatType.PeerChat) {
        return 'PeerChat';
      } else if (tt === ChatMessageChatType.GroupChat) {
        return 'GroupChat';
      } else if (tt === ChatMessageChatType.ChatRoom) {
        return 'ChatRoom';
      }
      throw new Error('error: ' + tt);
    };

    return [
      this.renderParamWithText(data.methodName),
      this.renderParamWithInput('targetId', targetId, (text: string) => {
        this.setState({
          targetId: text,
        });
      }),
      this.renderParamWithEnum(
        data.params[1].paramName,
        ['PeerChat', 'GroupChat', 'ChatRoom'],
        getTargetId(targetType),
        (index: string, option: any) => {
          let tt = ChatMessageChatType.PeerChat;
          if (option === 'PeerChat') {
            tt = ChatMessageChatType.PeerChat;
          } else if (option === 'GroupChat') {
            tt = ChatMessageChatType.GroupChat;
          } else if (option === 'ChatRoom') {
            tt = ChatMessageChatType.ChatRoom;
          } else {
            throw new Error('error: ' + option);
          }
          this.setState({
            targetType: tt,
          });
        }
      ),
      this.renderParamWithEnum(
        data.params[3].paramName,
        [
          ChatMessageType.TXT,
          ChatMessageType.CMD,
          ChatMessageType.IMAGE,
          ChatMessageType.VOICE,
          ChatMessageType.VIDEO,
          ChatMessageType.FILE,
          ChatMessageType.LOCATION,
          ChatMessageType.CUSTOM,
        ],
        messageType,
        (index: string, option: any) => {
          let bt = ChatMessageType.TXT;
          if (option === ChatMessageType.TXT) {
            bt = ChatMessageType.TXT;
          } else if (option === ChatMessageType.CMD) {
            bt = ChatMessageType.CMD;
          } else if (option === ChatMessageType.IMAGE) {
            bt = ChatMessageType.IMAGE;
          } else if (option === ChatMessageType.VOICE) {
            bt = ChatMessageType.VOICE;
          } else if (option === ChatMessageType.VIDEO) {
            bt = ChatMessageType.VIDEO;
          } else if (option === ChatMessageType.FILE) {
            bt = ChatMessageType.FILE;
          } else if (option === ChatMessageType.LOCATION) {
            bt = ChatMessageType.LOCATION;
          } else if (option === ChatMessageType.CUSTOM) {
            bt = ChatMessageType.CUSTOM;
          } else {
            throw new Error('error: ' + option);
          }
          this.setState({
            messageType: bt,
          });
        }
      ),
      this.renderSendMessageBody(messageType),
      this.renderButton(data.methodName, () => {
        this.callApi(data.methodName);
      }),
      this.addSpaces(),
    ];
  }

  private createMessage(): ChatMessage {
    let ret: ChatMessage;
    const { targetId, targetType, messageType } = this.state;
    switch (messageType) {
      case ChatMessageType.TXT:
        {
          const { content } = this.state;
          ret = ChatManagerCache.getInstance().createTextMessageWithParams(
            targetId,
            content,
            targetType
          );
        }
        break;
      case ChatMessageType.CMD:
        {
          const { action } = this.state;
          ret = ChatMessage.createCmdMessage(targetId, action, targetType);
        }
        break;
      case ChatMessageType.CUSTOM:
        {
          const { event, ext } = this.state;
          ret = ChatMessage.createCustomMessage(targetId, event, targetType, {
            params: ext,
          });
        }
        break;
      case ChatMessageType.LOCATION:
        {
          const { latitude, longitude, address } = this.state;
          ret = ChatMessage.createLocationMessage(
            targetId,
            latitude,
            longitude,
            targetType,
            { address }
          );
        }
        break;
      case ChatMessageType.FILE:
        {
          const { filePath, displayName } = this.state;
          ret = ChatMessage.createFileMessage(targetId, filePath, targetType, {
            displayName,
          });
        }
        break;
      case ChatMessageType.VOICE:
        {
          const { filePath, displayName, duration } = this.state;
          ret = ChatMessage.createVoiceMessage(targetId, filePath, targetType, {
            displayName,
            duration,
          });
        }
        break;
      case ChatMessageType.IMAGE:
        {
          const { filePath, displayName, thumbnailLocalPath, width, height } =
            this.state;
          ret = ChatMessage.createImageMessage(targetId, filePath, targetType, {
            displayName,
            width,
            height,
            thumbnailLocalPath,
          });
        }
        break;
      case ChatMessageType.VIDEO:
        {
          const {
            filePath,
            displayName,
            thumbnailLocalPath,
            width,
            height,
            duration,
          } = this.state;
          ret = ChatMessage.createVideoMessage(targetId, filePath, targetType, {
            displayName,
            width,
            height,
            thumbnailLocalPath,
            duration,
          });
        }
        break;
      default:
        throw new Error('This type is not find. ', messageType);
    }
    ChatManagerCache.getInstance().addSendMessage(ret);
    return ret;
  }

  private callApi(name: string): void {
    console.log(`${SendMessageLeafScreen.TAG}: callApi: `);
    if (name === MN.sendMessage) {
      const message = this.createMessage();
      if (message) {
        this.tryCatch(
          ChatClient.getInstance().chatManager.sendMessage(
            message,
            ChatManagerCache.getInstance().createCallback()
          ),
          SendMessageLeafScreen.TAG,
          this.metaData.get(MN.sendMessage)!.methodName
        );
      }
    }
  }
}
