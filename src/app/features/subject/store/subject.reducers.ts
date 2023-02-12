import SubjectStateInterface from "../../../interfaces/subject-state.interface";
import {createReducer, on} from "@ngrx/store";
import * as Actions from "./subject.actions";

export const initialState: SubjectStateInterface = {
  changing: false,
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
  on(Actions.clearSingle, (state) => ({...state, single: undefined})),

  on(Actions.getFailure, (state, {error}) => ({...state, error: error, isLoading: false})),

  on(Actions.deleteSubject, (state) => ({...state, changing: true})),
  on(Actions.updateSubject, (state) => ({...state, changing: true})),
  on(Actions.createSubject, (state) => ({...state, changing: true})),

  on(Actions.changeFailure, (state, {error}) => ({...state, error: error, changed: false, changing: false})),
  on(Actions.changeSuccess, (state) => ({...state, changed: true, error: undefined, changing: false})),

  on(Actions.clearError, (state) => ({...state, error: undefined})),
  on(Actions.clearChanged, (state) => ({...state, changed: false})),
);
