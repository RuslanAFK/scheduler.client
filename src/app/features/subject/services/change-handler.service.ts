import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {changed} from "../store/subject.selectors";
import AppStateInterface from "../../../interfaces/app-state.interface";
import * as SubjectActions from "../store/subject.actions";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
@Injectable()
export class ChangeHandlerService {
  changed$ = this.store.pipe(select(changed));
  changeSubscription: Subscription | undefined;
  constructor(private store: Store<AppStateInterface>, private router: Router) { }
  subscribe() {
    this.changeSubscription = this.changed$.subscribe(changed => {
      if (changed) {
        this.store.dispatch(SubjectActions.clearChanged());
        this.router.navigateByUrl("/subjects");
      }
    })

  }
  unsubscribe() {
    this.changeSubscription?.unsubscribe();
    delete this.changeSubscription;
  }
}
