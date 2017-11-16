import { Chat } from './chat.model';
import { Subject } from 'rxjs/Subject';
export class ChatService {
  chats: Chat[] = [
    new Chat('fer'),
    new Chat('frutaria')
  ];
  chatsChanged = new Subject<Chat[]>();

  setChats(chats: any[]) {
    for (let chat of chats) {
      //

    }
  }

  getChats() {
    return this.chats;
  }

}