import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import AppStateInterface from "../../../../interfaces/app-state.interface";
import * as SubjectActions from "../../store/subject.actions";
import {Observable} from "rxjs";
import SubjectInterface from "../../../../interfaces/subject.interface";
import {subjects, subjectsCount} from "../../store/subject.selectors";

@Component({
  selector: 'app-subject',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects$: Observable<SubjectInterface[]>;
  count$: Observable<number>;


  constructor(private store: Store<AppStateInterface>) {
    this.subjects$ = store.pipe(select(subjects))
    this.count$ = store.pipe(select(subjectsCount))
  }

  ngOnInit(): void {
    this.store.dispatch(SubjectActions.getAllSubjects())
  }

}
