import { Component } from '@angular/core';
import {AuthenticationService} from '../../services/authentication';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-lala',
  templateUrl: './app-header-lala.component.html'
})
export class AppHeaderLalaComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  logout(): void {
    this.authenticationService.logout(() => {
      // remove access token in session storage

      this.router.navigateByUrl('pages/login');
    }, err => {
      console.error(err);
    })
  }
}
