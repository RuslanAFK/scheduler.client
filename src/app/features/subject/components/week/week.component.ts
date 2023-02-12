import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import AppStateInterface from "../../../../interfaces/app-state.interface";
import * as SubjectActions from "../../store/subject.actions";
import {Observable} from "rxjs";
import {days, isLoading} from "../../store/subject.selectors";
import DayValuePairsInterface from "../../../../interfaces/day-value-pairs.interface";
import {AuthNavigationService} from "../../../shared/services/auth-navigation.service";
import {ChangeHandlerService} from "../../services/change-handler.service";

@Component({
  selector: 'app-subject',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit, OnDestroy {
  days$: Observable<DayValuePairsInterface | undefined>;
  loading$: Observable<boolean>;
  constructor(private store: Store<AppStateInterface>, private authNavService: AuthNavigationService,
              private errorAndChangeHandler: ChangeHandlerService) {
    this.days$ = store.pipe(select(days))
    this.loading$ = store.pipe(select(isLoading))
  }

  ngOnInit(): void {
    this.store.dispatch(SubjectActions.getAllSubjects())
    this.authNavService.subscribeFromClassified();
    this.errorAndChangeHandler.subscribe();
  }

  ngOnDestroy(): void {
    this.authNavService.unsubscribeFromClassified();
    this.errorAndChangeHandler.unsubscribe();
  }
}
