import AppStateInterface from "../../../interfaces/app-state.interface";
import {createSelector} from "@ngrx/store";

export const subjectSlice = (state: AppStateInterface) => state.subject;

export const isLoading = createSelector(subjectSlice, state => state.isLoading);

export const days = createSelector(subjectSlice, state => state.days);

export const error = createSelector(subjectSlice, state => state.error);

export const changed = createSelector(subjectSlice, state => state.changed);
export const changing = createSelector(subjectSlice, state => state.changing);

export const single = createSelector(subjectSlice, state => state.single);


