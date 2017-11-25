import {Injectable} from '@angular/core';
import { GlobalsService } from './globals.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Injectable()
export class CheckBalanceService {
  private baseUrl: string;
  constructor(private http: HttpClient, private globalsService: GlobalsService, private router: Router) {
    this.baseUrl = globalsService.getBaseUrl() + 'utils';
  }
  checkEthBalance(address: string, successCb?: Function, errorCb?: Function, completeCb?: Function): void {
    const subscription = this.http.get<any>(`${this.baseUrl}/checkEthBalance`, {
      params: new HttpParams()
        .set('address', address)
    })
      .subscribe(successCb ? (balance) => {
          successCb(balance);
          subscription.unsubscribe();
        } : null,
        errorCb ? err => errorCb(err) : null,
        completeCb ? () => completeCb() : null);
  }
  checkTokenBalance(address: string, successCb?: Function, errorCb?: Function, completeCb?: Function): void {
    const subscription = this.http.get<any>(`${this.baseUrl}/checkTokenBalance`, {
      params: new HttpParams()
        .set('address', address)
    })
      .subscribe(successCb ? (balance) => {
          successCb(balance);
          subscription.unsubscribe();
        } : null,
        errorCb ? err => errorCb(err) : null,
        completeCb ? () => completeCb() : null);
  }
}
