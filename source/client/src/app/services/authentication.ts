import {Injectable} from '@angular/core';
import { GlobalsService } from './globals.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/debounceTime';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class AuthenticationService {
  private baseUrl: string;
  subscription: Subscription;
  constructor(private http: HttpClient, private globalsService: GlobalsService) {
    this.baseUrl = globalsService.getBaseUrl() + 'users';
  }
  login(email: string, password: string, successCb?: Function, errorCb?: Function, completeCb?: Function): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.http.post<any>(`${this.baseUrl}/login`, {email: email, password: password})
      .debounceTime(2000)
      .subscribe(successCb ? credentials => {
          successCb(credentials);
          this.subscription.unsubscribe();
        } : null,
        errorCb ? err => errorCb(err) : null,
        completeCb ? () => completeCb() : null);
  }
  logout(successCb?: Function, errorCb?: Function, completeCb?: Function): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.http.post<any>(`${this.baseUrl}/logout`, {})
      .debounceTime(2000)
      .subscribe(successCb ? () => {
          successCb();
          this.subscription.unsubscribe();
        } : null,
        errorCb ? err => errorCb(err) : null,
        completeCb ? () => completeCb() : null);
  }
  setAccessToken(accessToken: string): void {
    sessionStorage.setItem('access_token', accessToken);
  }
  getAccessToken(): string {
    return sessionStorage.getItem('access_token') || localStorage.getItem('access_token');
  }
}
