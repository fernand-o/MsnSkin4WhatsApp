export class Chat {
  id: string;
  name: string;
  unreadCount: number;
  messages: ChatMessage[];

  constructor(id: string, name: string, unreadCount: number, messages: ChatMessage[]) {
    this.id = id;
    this.name = name;
    this.unreadCount = unreadCount;
    this.messages = messages;
  }
}

export class ChatMessage {
  message: string;
  isSentByMe: Boolean;

  constructor(message: string, isSentByMe: Boolean) {
    this.message = message;
    this.isSentByMe = isSentByMe;
  }
}