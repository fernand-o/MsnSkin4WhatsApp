import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ChatMessage } from '../../chat.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: ChatMessage;

  constructor() { }

  ngOnInit() {
  }


}
