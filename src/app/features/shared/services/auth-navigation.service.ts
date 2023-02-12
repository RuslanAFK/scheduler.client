import { Injectable } from '@angular/core';
import {Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {error, user} from "../../auth/store/auth.selectors";
import AppStateInterface from "../../../interfaces/app-state.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class AuthNavigationService {

  user$ = this.store.pipe(select(user));

  userSubscription: Subscription | undefined;

  constructor(private store: Store<AppStateInterface>, private route: ActivatedRoute, private router: Router) {
  }

  subscribeFromAuth() {
    this.userSubscription = this.user$.subscribe(user => {
      if (user)
        this.router.navigateByUrl("/subjects");
    })
  }

  subscribeFromClassified() {
    this.userSubscription = this.user$.subscribe(user => {
      if (!user)
        this.router.navigateByUrl("/login");
    })
  }

  unsubscribeFromAuth() {
    this.userSubscription?.unsubscribe();
    delete this.userSubscription;
  }

  unsubscribeFromClassified() {
    this.userSubscription?.unsubscribe();
    delete this.userSubscription;
  }
}
