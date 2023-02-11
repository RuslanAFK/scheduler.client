import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import AuthResponseInterface from "../../../../interfaces/auth-response.interface";
import {select, Store} from "@ngrx/store";
import AppStateInterface from "../../../../interfaces/app-state.interface";
import {error, isLoading, user} from "../../../auth/store/auth.selectors";
import * as AuthActions from "../../../auth/store/auth.actions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoading$: Observable<boolean>;
  user$: Observable<AuthResponseInterface | undefined>;
  error$: Observable<string | undefined>;
  logoText: string = "Sheduler.io";
  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = store.pipe(select(isLoading))
    this.user$ = store.pipe(select(user))
    this.error$ = store.pipe(select(error))
  }
  ngOnInit(): void {
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }
}
