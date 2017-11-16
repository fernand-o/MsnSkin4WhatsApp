import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Chat } from '../chat.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  chats: Chat[];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chats = this.chatService.getChats();
    this.chatService.chatsChanged.subscribe(
      (e) => {
        this.chats = e;
      }
    );
  }

  clearChats() {
    this.chatService.setChats([]);
  }

}
