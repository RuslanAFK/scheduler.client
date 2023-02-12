import {createAction} from "@ngrx/store";
import SubjectListInterface from "../../../interfaces/subject-list.interface";
import SubjectInterface from "../../../interfaces/subject.interface";

export const getAllSubjects = createAction("[ Subject] GetAll")
export const getAllSubjectsSuccess = createAction("[ Subject] GetAll Success", (data: SubjectListInterface) => ({data: data}));
export const getFailure = createAction("[ Subject] Get Failure", (data: string) => ({error: data}));


export const getSingleSubject = createAction("[ Subject] GetSingle", (id: number) => ({id: id}))
export const getSingleSubjectSuccess = createAction("[ Subject] GetSingle Success", (data: SubjectInterface) => ({data: data}))


export const createSubject = createAction("[ Subject] Create", (data: SubjectInterface) => ({data: data}));
export const updateSubject = createAction("[ Subject] Update", (data: SubjectInterface) => ({data: data}));
export const deleteSubject = createAction("[ Subject] Delete", (id: number) => ({id: id}));

export const changeFailure = createAction("[ Subject] Change Failure", (data: string) => ({error: data}));
export const changeSuccess = createAction("[ Subject] Change Success");

export const clearError = createAction("[ Subject] Clear Error");
export const clearChanged = createAction("[ Subject] Clear Changed");

export const clearSingle = createAction("[ Subject] Clear Single");

