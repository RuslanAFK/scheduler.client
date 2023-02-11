import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as SubjectActions from "./subject.actions";
import {Injectable} from "@angular/core";
import {catchError, map, of, switchMap} from "rxjs";
import {SubjectService} from "../services/subject.service";
import {ErrorGetterService} from "../../shared/services/error-getter.service";


@Injectable()
export class SubjectEffects {
  getAll$ = createEffect(() => this.actions$.pipe(
    ofType(SubjectActions.getAllSubjects),
    switchMap(() => {
      return this.service.getAll().pipe(
        map(res => SubjectActions.getAllSubjectsSuccess(res)),
        catchError(error => of(SubjectActions.getFailure(this.errorService.getMessage(error))))
      )
    })
  ))

  getSingle$ = createEffect(() => this.actions$.pipe(
    ofType(SubjectActions.getSingleSubject),
    switchMap(({id}) => {
      return this.service.getSingle(id).pipe(
        map(res => SubjectActions.getSingleSubjectSuccess(res)),
        catchError(error => of(SubjectActions.getFailure(this.errorService.getMessage(error))))
      )
    })
  ))

  createSubject$ = createEffect(() => this.actions$.pipe(
    ofType(SubjectActions.createSubject),
    switchMap(({data}) => {
      return this.service.create(data).pipe(
        map(() => SubjectActions.changeSuccess()),
        catchError(error => of(SubjectActions.changeFailure(this.errorService.getMessage(error))))
      )
    })
  ))

  updateSubject$ = createEffect(() => this.actions$.pipe(
    ofType(SubjectActions.updateSubject),
    switchMap(({data}) => {
      return this.service.update(data).pipe(
        map(() => SubjectActions.changeSuccess()),
        catchError(error => of(SubjectActions.changeFailure(this.errorService.getMessage(error))))
      )
    })
  ))

  deleteSubject$ = createEffect(() => this.actions$.pipe(
    ofType(SubjectActions.deleteSubject),
    switchMap(({id}) => {
      return this.service.delete(id).pipe(
        map(() => SubjectActions.getAllSubjects()),
        catchError(error => of(SubjectActions.changeFailure(this.errorService.getMessage(error))))
      )
    })
  ))

  constructor(private actions$: Actions, private service: SubjectService, private errorService: ErrorGetterService) {
  }
}
