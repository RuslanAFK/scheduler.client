import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from "./auth.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {AuthService} from "../services/auth.service";
import {ErrorGetterService} from "../../shared/services/error-getter.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    switchMap(({data}) => {
      return this.authService.login(data).pipe(
        map(authRes => AuthActions.loginSuccess(authRes)),
        catchError(error => of(AuthActions.loginFailure(this.errorService.getMessage(error))))
      )
    })
  ))

  register$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.register),
    switchMap(({data}) => {
      return this.authService.register(data).pipe(
        map(() => AuthActions.login(data)),
        catchError(error => of(AuthActions.registerFailure(this.errorService.getMessage(error))))
      )
    })
  ))

  constructor(private actions$: Actions, private authService: AuthService, private errorService: ErrorGetterService) {
  }
}
