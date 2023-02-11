import {WeekDay} from "@angular/common";
import GetSubjectsInterface from "./get-subjects.interface";

export default interface SubjectInterface extends GetSubjectsInterface {
  weekDay: WeekDay;
  count: number;
}
