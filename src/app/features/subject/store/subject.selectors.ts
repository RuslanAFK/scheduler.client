import AppStateInterface from "../../../interfaces/app-state.interface";
import {createSelector} from "@ngrx/store";

export const subjectSlice = (state: AppStateInterface) => state.subject;

export const isLoading = createSelector(subjectSlice, state => state.isLoading);

export const subjects = createSelector(subjectSlice, state => state.items);
export const subjectsCount = createSelector(subjectSlice, state => state.count);

export const error = createSelector(subjectSlice, state => state.error);
