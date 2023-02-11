import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthActions from "./auth.actions";
import {catchError, map, mergeMap, of, switchAll, switchMap} from "rxjs";
import {AuthService} from "../auth.service";
import UserInterface from "../../../interfaces/user.interface";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    switchMap(({data}) => {
      return this.authService.login(data).pipe(
        map(authRes => AuthActions.loginSuccess(authRes)),
        catchError(error => of(AuthActions.loginFailure(error)))
      )
    })
  ))

  register$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.register),
    switchMap(({data}) => {
      return this.authService.register(data).pipe(
        map(() => AuthActions.login(data)),
        catchError(error => of(AuthActions.registerFailure(error)))
      )
    })
  ))

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
