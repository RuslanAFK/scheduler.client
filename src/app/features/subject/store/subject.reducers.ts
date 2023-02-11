import SubjectStateInterface from "../../../interfaces/subject-state.interface";
import {createReducer, on} from "@ngrx/store";
import * as Actions from "./subject.actions";

export const initialState: SubjectStateInterface = {
  error: undefined,
  isLoading: false,
  days: undefined,
  single: undefined,
  changed: false
}

export const reducers = createReducer(
  initialState,
  on(Actions.getAllSubjects, (state) => ({...state, error: undefined, isLoading: true})),
  on(Actions.getAllSubjectsSuccess, (state, {data}) => ({...state, days: data.items, error: undefined, isLoading: false})),

  on(Actions.getSingleSubject, (state) => ({...state, error: undefined, isLoading: true})),
  on(Actions.getSingleSubjectSuccess, (state, {data}) => ({...state, single: data, error: undefined, isLoading: false})),

  on(Actions.getFailure, (state, {error}) => ({...state, error: error, isLoading: false})),

  on(Actions.changeFailure, (state, {error}) => ({...state, error: error, changed: false})),
  on(Actions.changeSuccess, (state) => ({...state, changed: true, error: undefined})),

  on(Actions.clearSingle, (state) => ({...state, single: undefined})),

  on(Actions.changeFailureEnd, (state) => ({...state, error: undefined})),
  on(Actions.changeSuccessEnd, (state) => ({...state, changed: false})),
);
