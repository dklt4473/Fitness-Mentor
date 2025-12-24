import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
// import { BasicAuthService } from '../http/basic-auth.service';

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let email = this.basicAuthService.getAuthenticatedUser();
    if (basicAuthHeaderString && email) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
