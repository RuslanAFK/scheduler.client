import {Component, OnDestroy, OnInit} from '@angular/core';
import * as SubjectActions from "../../store/subject.actions";
import {Store} from "@ngrx/store";
import AppStateInterface from "../../../../interfaces/app-state.interface";
import SubjectInterface from "../../../../interfaces/subject.interface";
import {ChangeSubjectFormService} from "../../services/change-subject-form.service";
import {AuthNavigationService} from "../../../shared/services/auth-navigation.service";
import {ErrorAndChangeHandlerService} from "../../services/error-and-change-handler.service";
import {SingleSubjectReaderService} from "../../services/single-subject-reader.service";
import {EnumHandlerService} from "../../services/enum-handler.service";

@Component({
  selector: 'app-add-subject',
  templateUrl: './change-subject.component.html',
  styleUrls: ['./change-subject.component.css']
})
export class ChangeSubjectComponent implements OnInit, OnDestroy {
  id: number | undefined;
  constructor(private store: Store<AppStateInterface>,
              public formService: ChangeSubjectFormService,
              private authNavService: AuthNavigationService,
              private errorAndChangeService: ErrorAndChangeHandlerService,
              private singleSubjectService: SingleSubjectReaderService,
              public  enumHandler: EnumHandlerService) { }

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
