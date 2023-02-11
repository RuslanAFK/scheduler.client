import {createAction} from "@ngrx/store";
import SubjectListInterface from "../../../interfaces/subject-list.interface";
import SubjectInterface from "../../../interfaces/subject.interface";
import CreateSubjectInterface from "../../../interfaces/create-subject.interface";

export const getAllSubjects = createAction("[ Subject] GetAll")
export const getAllSubjectsSuccess = createAction("[ Subject] GetAll Success", (data: SubjectListInterface) => ({data: data}));
export const getFailure = createAction("[ Subject] Get Failure", (data: string) => ({error: data}));


export const getSingleSubject = createAction("[ Subject] GetSingle", (id: number) => ({id: id}))
export const getSingleSubjectSuccess = createAction("[ Subject] GetSingle Success", (data: SubjectInterface) => ({data: data}))


export const createSubject = createAction("[ Subject] Create", (data: CreateSubjectInterface) => ({data: data}));
export const updateSubject = createAction("[ Subject] Update", (data: SubjectInterface) => ({data: data}));
export const deleteSubject = createAction("[ Subject] Delete", (id: number) => ({id: id}));

export const changeFailure = createAction("[ Subject] Change Failure", (data: string) => ({error: data}));
export const showedError = createAction("[ Subject] Showed Error");
