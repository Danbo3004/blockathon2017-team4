import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {HttpClient} from '@angular/common/http';
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
      filter: filter
    })
      .debounceTime(2000)
      .subscribe(successCb ? (data) => {
          successCb(data);
          this.subscription.unsubscribe();
        } : null,
        errorCb ? err => errorCb(err) : null,
        completeCb ? () => completeCb() : null);
  }
}
