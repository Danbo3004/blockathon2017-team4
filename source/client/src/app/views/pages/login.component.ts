import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';
  constructor(private router: Router, private authenticationService: AuthenticationService) { }
  login(): void {
    this.authenticationService.login(this.email, this.password, credentials => {
      this.authenticationService.setAccessToken(credentials.id);
      this.router.navigateByUrl('/account/wallet');
    }, err => {
      this.message = 'Email or password was wrong';
    });
  }
}
