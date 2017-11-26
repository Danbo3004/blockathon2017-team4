import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {OnDestroy} from '@angular/core';
import * as io from 'socket.io-client/dist/socket.io';

export class SocketService implements OnDestroy {
  private url = 'https://lalalendapi.clearsystems.asia';
  // private url = 'http://localhost:3000';
  private socket;
  constructor() {
    this.socket = io(this.url);
    this.socket.on('message', (data) => {
      console.log(data);
    });
    this.socket.on('newBid', data => {
      console.log(data);
    })
  }
  ngOnDestroy(): void {
    this.socket.disconnect();
  }
  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
