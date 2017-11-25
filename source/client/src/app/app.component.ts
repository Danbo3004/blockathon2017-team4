import {Component} from '@angular/core';
import {CheckAccessTokenService} from './services/check-access-token';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private checkAccessTokenService: CheckAccessTokenService) {
  }
}
