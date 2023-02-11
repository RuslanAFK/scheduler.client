import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {map, Observable, switchMap, tap, throwError} from 'rxjs';
import {select, Store} from "@ngrx/store";
import AppStateInterface from "../interfaces/app-state.interface";
import {user} from "../features/auth/store/auth.selectors";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  token: string | undefined;
  constructor(private store: Store<AppStateInterface>) {
    this.store.pipe(select(user)).subscribe(userData => {
      this.token = userData?.token
    });

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newReq;
    if (this.token)
      newReq = request.clone({
        setHeaders: {
          "Authorization": `Bearer ${this.token}`
        }
      });
    else
      newReq = request.clone();
    return next.handle(newReq);
  }

}
