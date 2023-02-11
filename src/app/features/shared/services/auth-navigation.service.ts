import { Injectable } from '@angular/core';
import {Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {error, user} from "../../auth/store/auth.selectors";
import AppStateInterface from "../../../interfaces/app-state.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class AuthNavigationService {

  user$ = this.store.pipe(select(user));
  error$ = this.store.pipe(select(error));

  userSubscription: Subscription | undefined;
  errorSubscription: Subscription | undefined;

  constructor(private store: Store<AppStateInterface>, private route: ActivatedRoute, private router: Router) {
  }

  subscribeFromAuth() {
    this.userSubscription = this.user$.subscribe(user => {
      if (user)
        this.router.navigateByUrl("/subjects");
    })
    this.errorSubscription = this.error$.subscribe(error => {
      if (error)
        alert(`Error: ${error}`);
    })
  }

  subscribeFromClassified() {
    this.userSubscription = this.user$.subscribe(user => {
      if (!user)
        this.router.navigateByUrl("/login");
    })
  }

  unsubscribeFromAuth() {
    this.errorSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
    delete this.userSubscription;
    delete this.errorSubscription;
  }

  unsubscribeFromClassified() {
    this.userSubscription?.unsubscribe();
    delete this.userSubscription;
  }
}
