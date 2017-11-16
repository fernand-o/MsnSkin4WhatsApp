import { WindowRef } from './windowref';
import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';

@Injectable()
export class CommunicationService {

  constructor(private winref: WindowRef, private chatService: ChatService) {
    this.winref.nativeWindow.addEventListener('message', this.receiveMessage, false);
  }

  public receiveMessage = (e) => {
    console.log(e.data);

    if (e.data.type === 'chats') {
      this.chatService.setChats(e.data.value);
    }
  }
}