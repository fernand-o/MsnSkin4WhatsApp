import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent {
  title = 'app';

  @HostListener('document.message', ['$event']) onMessageeReceived(e) {
    console.log('document')
    console.log(e)
  }

  @HostListener('window.message', ['$event']) onMessageReceived(e) {
    console.log('window')
    console.log(e)
  }
}
