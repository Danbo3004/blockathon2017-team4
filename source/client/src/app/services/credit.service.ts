import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GlobalsService} from './globals.service';

@Injectable()
export class CreditService {
  private baseUrl;
  subscription: Subscription;

  constructor(private http: HttpClient, private globalsService: GlobalsService) {
    this.baseUrl = globalsService.getBaseUrl() + 'credits';
  }

  getBaseUrl(): string {
    return this.baseUrl
  }

  getCredits(filter: object, successCb?: Function, errorCb?: Function, completeCb?: Function): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.http.get<any>(this.baseUrl, {
      params: new HttpParams().set('filter', JSON.stringify(filter))
    })
      .debounceTime(2000)
      .subscribe(successCb ? (data) => {
          successCb(data);
          this.subscription.unsubscribe();
        } : null,
        errorCb ? err => errorCb(err) : null,
        completeCb ? () => completeCb() : null);
  }

  createCredit(credit: object, successCb?: Function, errorCb?: Function, completeCb?: Function): void {
    const subscription = this.http.post<any>(this.baseUrl, credit)
      .subscribe(successCb ? (data) => {
          successCb(data);
          subscription.unsubscribe();
        } : null,
        errorCb ? err => errorCb(err) : null,
        completeCb ? () => completeCb() : null);
  }
}
