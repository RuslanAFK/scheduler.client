import TypeEnum from "../enums/type.enum";
import {WeekDay} from "@angular/common";
import WeekEnum from "../enums/week.enum";

export default interface CreateSubjectInterface {
  name: string;
  weekDay: WeekDay;
  week: WeekEnum;
  count: number;
  professor?: string;
  url?: string;
  address?: string;
  hours: number;
  minutes: number;
  type: TypeEnum;
}
