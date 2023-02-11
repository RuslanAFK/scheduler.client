import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SUBJECT_URL} from "../../app.urls";
import CreateSubjectInterface from "../../interfaces/create-subject.interface";
import SubjectInterface from "../../interfaces/subject.interface";
import SubjectListInterface from "../../interfaces/subject-list.interface";


@Injectable()
export class SubjectService {
  constructor (private http: HttpClient) {}

  getAll = () => {
    return this.http.get<SubjectListInterface>(SUBJECT_URL)
  }

  getSingle = (subjectId: number) => {
    return this.http.get<SubjectInterface>(`${SUBJECT_URL}/${subjectId}`)
  }

  create = (subjectData: CreateSubjectInterface) => {
    return this.http.post<void>(SUBJECT_URL, subjectData)
  }

  update = (subjectData: SubjectInterface) => {
    return this.http.put<void>(SUBJECT_URL, subjectData)
  }

  delete = (subjectId: number) => {
    return this.http.delete<void>(`${SUBJECT_URL}/${subjectId}`)
  }


}
