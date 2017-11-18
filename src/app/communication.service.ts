import { WindowRef } from './windowref';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

class MessageObject {
  type: string;
  value: any;
}

@Injectable()
export class CommunicationService {
  chatsChanged = new Subject<any[]>();

  constructor(private winref: WindowRef) {
    this.winref.nativeWindow.addEventListener('message', this.receiveMessage, false);
  }

  public receiveMessage = (e) => {
    console.log(e.data);

    if (e.data.type === 'chats') {
      this.chatsChanged.next(e.data.value);
    }
  }

  sendMessage(e: MessageObject) {
    this.winref.nativeWindow.parent.postMessage(e, '*');
  }
}