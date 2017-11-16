import { Chat } from './chat.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {
  chats: Chat[] = [
    new Chat('fer'),
    new Chat('frutaria')
  ];
  chatsChanged = new Subject<Chat[]>();

  setChats(chats: any[]) {
    this.chats = [];
    for (let chat of chats) {
      this.chats.push(chat);
    }
    this.chatsChanged.next(this.getChats());
  }

  getChats() {
    return this.chats.slice();
  }

}