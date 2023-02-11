import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {changed, error} from "../store/subject.selectors";
import AppStateInterface from "../../../interfaces/app-state.interface";
import * as SubjectActions from "../store/subject.actions";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
@Injectable()
export class ErrorAndChangeHandlerService {
  changed$ = this.store.pipe(select(changed));
  error$ = this.store.pipe(select(error));
  changeSubscription: Subscription | undefined;
  errorSubscription: Subscription | undefined;
  constructor(private store: Store<AppStateInterface>, private router: Router) { }
  subscribe() {
    this.changeSubscription = this.changed$.subscribe(changed => {
      if (changed) {
        this.store.dispatch(SubjectActions.changeSuccessEnd());
        this.router.navigateByUrl("/subjects");
      }
    })
    this.errorSubscription = this.error$.subscribe(error => {
      if (error) {
        alert(`Error: ${error}`);
        this.store.dispatch(SubjectActions.changeFailureEnd());
      }
    })
  }
  unsubscribe() {
    this.changeSubscription?.unsubscribe();
    this.errorSubscription?.unsubscribe();
    delete this.changeSubscription;
    delete this.errorSubscription;
  }
}
