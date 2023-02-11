import AppStateInterface from "../../../interfaces/app-state.interface";
import {createSelector} from "@ngrx/store";

export const auth = (state: AppStateInterface) => state.auth;

export const isLoading = createSelector(auth, state => state.isLoading);

export const user = createSelector(auth, state => state.user);

export const error = createSelector(auth, state => state.error);
