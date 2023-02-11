import SubjectListInterface from "./subject-list.interface";
import SubjectInterface from "./subject.interface";

export default interface SubjectStateInterface {
  isLoading: boolean;
  error?: string;
  items: SubjectInterface[];
  count: number;
}
