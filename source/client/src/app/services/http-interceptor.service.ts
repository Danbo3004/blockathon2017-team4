import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      params: req.params.set('access_token', this.getAccessToken())
    });
    return next.handle(newReq)
      .catch((err: any, caught) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log(err.message);
            this.router.navigateByUrl('/login');
          }
          return Observable.throw(err);
        }
      });
  }

  getAccessToken(): string {
    return sessionStorage.getItem('access_token') || localStorage.getItem('access_token');
  }
}
