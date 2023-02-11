import SubjectStateInterface from "../../../interfaces/subject-state.interface";
import {createReducer, on} from "@ngrx/store";
import * as Actions from "./subject.actions";

export const initialState: SubjectStateInterface = {
  error: undefined,
  isLoading: false,
  items: [],
  count: 0
}

export const reducers = createReducer(
  initialState,
  on(Actions.getAllSubjects, (state) => ({...state, error: undefined, isLoading: true})),
  on(Actions.getAllSubjectsSuccess, (state, {data}) => ({...state, items: data.items, count: data.count, error: undefined, isLoading: false})),

  on(Actions.getSingleSubject, (state) => ({...state, error: undefined, isLoading: true})),
  on(Actions.getSingleSubjectSuccess, (state, {data}) => ({...state, items: [data], count: -1, error: undefined, isLoading: false})),

  on(Actions.getFailure, (state, {error}) => ({...state, error: error, isLoading: false})),
  on(Actions.changeFailure, (state, {error}) => ({...state, error: error})),
  on(Actions.showedError, (state) => ({...state, error: undefined}))

);
