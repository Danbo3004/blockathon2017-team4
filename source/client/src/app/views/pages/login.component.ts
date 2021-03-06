import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication';
import {ToastrService} from 'ngx-toastr';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  email = 'tonydoan@clearsystems.asia';
  password = '123456';

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private toastr: ToastrService) {
  }

  login(): void {
    this.authenticationService.login(this.email, this.password, credentials => {
      this.toastr.success('Login successful.', 'Welcome you to LaLaLend!');
      this.authenticationService.setAccessToken(credentials.id);
      this.router.navigateByUrl('/account/wallet');
    }, err => {
      this.password = '';
      const message = 'Email or password is incorrect!';
      this.toastr.error(message, 'Login Failed!');
    });
  }
}
