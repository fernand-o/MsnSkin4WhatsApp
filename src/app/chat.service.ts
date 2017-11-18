import { Chat, ChatMessage } from './chat.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';

@Injectable()
export class ChatService {
  chats: Chat[] = [
    new Chat('123', 'Fernando', 5,
      [
        new ChatMessage('hello', true),
        new ChatMessage('its me', true),
        new ChatMessage('hahaha', false)
      ]),
    new Chat('457', 'Stefani W', 0, [])
  ];
  chatsChanged = new Subject<Chat[]>();
  selectedChatChanged = new Subject<Chat>();
  selectedChat: Chat;

  constructor(private commService: CommunicationService) {
    commService.chatsChanged.subscribe(
      (chats: Chat[]) => {
        this.chatsChanged.next(chats);
      }
    )
  }

  setChats(chats: any[]) {
    this.chats = [];
    for (let chat of chats) {
      this.chats.push(chat);
    }
    this.chatsChanged.next(this.getChats());
    this.updateSelectedChat();
  }

  updateSelectedChat() {
    if (this.selectedChat === undefined)
      return;
    //todo
    this.chats.forEach((value) => {
      if (value.id === this.selectedChat.id) {
        this.selectedChatChanged.next(value);
      }
    })
  }

  getChats() {
    return this.chats.slice();
  }

  setSelectedChat(chat: Chat) {
    this.selectedChat = chat;
    this.selectedChatChanged.next(chat);
  }

  sendMessage(chatId: string, msg: string) {
    this.commService.sendMessage(
      {
        type: 'sendMessage',
        value: {
          chatId: '554991620309@c.us',
          message: msg
        }
      }
    )
  }
}