import {Component, OnDestroy, OnInit} from '@angular/core';
import * as SubjectActions from "../../store/subject.actions";
import {select, Store} from "@ngrx/store";
import AppStateInterface from "../../../../interfaces/app-state.interface";
import SubjectInterface from "../../../../interfaces/subject.interface";
import {ChangeSubjectFormService} from "../../services/change-subject-form.service";
import {AuthNavigationService} from "../../../shared/services/auth-navigation.service";
import {ChangeHandlerService} from "../../services/change-handler.service";
import {SingleSubjectReaderService} from "../../services/single-subject-reader.service";
import {EnumHandlerService} from "../../services/enum-handler.service";
import {Observable} from "rxjs";
import {changing, isLoading} from "../../store/subject.selectors";

@Component({
  selector: 'app-add-subject',
  templateUrl: './change-subject.component.html',
  styleUrls: ['./change-subject.component.css']
})
export class ChangeSubjectComponent implements OnInit, OnDestroy {
  id: number | undefined;
  loading$: Observable<boolean>;
  changing$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>,
              public formService: ChangeSubjectFormService,
              private authNavService: AuthNavigationService,
              private errorAndChangeService: ChangeHandlerService,
              private singleSubjectService: SingleSubjectReaderService,
              public  enumHandler: EnumHandlerService) {
    this.loading$ = store.pipe(select(isLoading));
    this.changing$ = store.pipe(select(changing));
  }

  ngOnInit(): void {
    delete this.id;
    this.store.dispatch(SubjectActions.clearSingle());
    this.formService.clearForm();

    this.authNavService.subscribeFromClassified();
    this.errorAndChangeService.subscribe();
    this.id = this.singleSubjectService.subscribe(this.id);
  }

  ngOnDestroy(): void {
    this.authNavService.unsubscribeFromClassified();
    this.errorAndChangeService.unsubscribe();
    this.singleSubjectService.unsubscribe();
  }

  onSubmit() {
    if (!this.formService.isValid())
      return;
    let data: SubjectInterface = this.formService.generateSubject(this.id);
    if (this.id)
      this.store.dispatch(SubjectActions.updateSubject(data))
    else
      this.store.dispatch(SubjectActions.createSubject(data));
  }
}
