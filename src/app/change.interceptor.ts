import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class ChangeInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = "123456"
    let mreq = request.clone({
      method: 'POST',
      body: { product: "Oneplus Nord 2T 5G" },
      headers: new HttpHeaders(
        {
          Authorization: `Bearer${token}` //Authorization is  a token service,Bearer token is a type of authentication scheme.
        }
      )
    })
    console.log("Request Interceptor")


    return next.handle(mreq).pipe(
      catchError(
        (e: any) => {
          console.log(e)
          if (e.status == 404) {
            console.log("404 not found-invalid url")
          }
          return throwError('Modified error message')

        }
      ),
      // tap((e)=>{
      //   if(e instanceof HttpResponse)  //usd to check whethere the instance belongs to particular category or not
      //   console.log(e)
      // })

    );
  }
}
