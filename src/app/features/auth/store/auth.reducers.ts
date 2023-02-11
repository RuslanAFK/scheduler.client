import AuthStateInerface from "../../../interfaces/auth-state.inerface";
import {createReducer, on} from "@ngrx/store";
import * as Actions from "./auth.actions";

export const initialState: AuthStateInerface = {
  error: undefined,
  isLoading: false,
  user: undefined
}

export const reducers = createReducer(
  initialState,
  on(Actions.logout, (state) => ({...state, user: undefined, error: undefined, isLoading: false})),

  on(Actions.login, (state) => ({...state, user: undefined, error: undefined, isLoading: true})),
  on(Actions.loginSuccess, (state, {data}) => ({...state, user: data, error: undefined, isLoading: false})),
  on(Actions.loginFailure, (state, {error}) => ({...state, user: undefined, error: error, isLoading: false})),

  on(Actions.register, (state) => ({...state, user: undefined, error: undefined, isLoading: true})),
  on(Actions.registerFailure, (state, {error}) => ({...state, user: undefined, error: error, isLoading: false})),

);
