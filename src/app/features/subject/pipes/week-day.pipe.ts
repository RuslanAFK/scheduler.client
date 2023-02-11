import { Pipe, PipeTransform } from '@angular/core';
import {WeekDay} from "@angular/common";

@Pipe({
  name: 'weekDay'
})
export class WeekDayPipe implements PipeTransform {

  transform(value: WeekDay, ...args: unknown[]): unknown {
    return WeekDay[value];
  }

}
