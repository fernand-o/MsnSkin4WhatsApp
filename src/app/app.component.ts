import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { HostListener } from '@angular/core';
import { CommunicationService } from './communication.service';
import { WindowRef } from './windowref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService, WindowRef, CommunicationService]
})
export class AppComponent {
  title = 'app';

  constructor(private com: CommunicationService, private chat: ChatService) { }
}
