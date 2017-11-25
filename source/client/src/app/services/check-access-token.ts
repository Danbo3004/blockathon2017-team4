import {Injectable} from '@angular/core';
import { GlobalsService } from './globals.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Injectable()
export class CheckAccessTokenService {
  private baseUrl: string;
  subscription: Subscription;
  constructor(private http: HttpClient, private globalsService: GlobalsService, private router: Router) {
    this.baseUrl = globalsService.getBaseUrl() + 'users';
    console.log('router: ' + router);

    this.subscription = this.http.get<any>(`${this.baseUrl}/count`)
      .subscribe(count => {

      }, err => {
        sessionStorage.removeItem('access_token');
        this.router.navigateByUrl('pages/login');
      });
  }
}
