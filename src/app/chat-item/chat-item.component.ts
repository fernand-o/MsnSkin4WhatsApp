import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../chat.model';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {
  @Input() chat: Chat;

  constructor() { }

  ngOnInit() {

  }

}
