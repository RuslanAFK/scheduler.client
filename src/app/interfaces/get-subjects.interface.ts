import TypeEnum from "../enums/type.enum";
import WeekEnum from "../enums/week.enum";

export default interface GetSubjectsInterface {
  id: number;
  name: string;
  week: WeekEnum;
  professor?: string;
  url?: string;
  address?: string;
  hours: number;
  minutes: number;
  type: TypeEnum;
}
