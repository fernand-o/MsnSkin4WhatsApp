import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../chat.model';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {
  @Input() chat: Chat;

  constructor(private chatService: ChatService) { }

  ngOnInit() {

  }

  showMessages() {
    this.chatService.setSelectedChat(this.chat);
  }

}
