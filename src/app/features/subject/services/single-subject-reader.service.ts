import { Injectable } from '@angular/core';
import {Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {single} from "../store/subject.selectors";
import AppStateInterface from "../../../interfaces/app-state.interface";
import {ChangeSubjectFormService} from "./change-subject-form.service";
import * as SubjectActions from "../store/subject.actions";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class SingleSubjectReaderService {

  single$ = this.store.pipe(select(single));

  singleSubscription: Subscription | undefined;
  querySubscription: Subscription | undefined;

  constructor(private store: Store<AppStateInterface>, private formService: ChangeSubjectFormService,
              private route: ActivatedRoute) { }

  subscribe(id: number | undefined): undefined | number {
    this.singleSubscription = this.single$.subscribe(single => {
      if (single) {
        this.formService.populateForm(single)
      }
    })
    this.querySubscription = this.route.queryParams.subscribe(par => {
      id = parseInt(par["id"]);

      if (!isNaN(id)) {
        this.store.dispatch(SubjectActions.getSingleSubject(id));
      }
    })
    return id;
  }

  unsubscribe() {
    this.singleSubscription?.unsubscribe();
    this.querySubscription?.unsubscribe();
    delete this.querySubscription;
    delete this.singleSubscription;
  }
}
