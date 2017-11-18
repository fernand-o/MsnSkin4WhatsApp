import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat.model';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  chat: Chat;

  constructor(private chatService: ChatService) {
    this.chatService.selectedChatChanged.subscribe(
      (chat: Chat) => {
        this.chat = chat;
      }
    )
  }

  ngOnInit() {
  }

  sendMessage(asd) {
    this.chatService.sendMessage(this.chat.id, asd.value);
  }

}
