import SubjectInterface from "./subject.interface";
import DayValuePairsInterface from "./day-value-pairs.interface";

export default interface SubjectStateInterface {
  isLoading: boolean;
  error?: string;
  days: DayValuePairsInterface | undefined;
  single: SubjectInterface | undefined;
  changed: boolean;
}
