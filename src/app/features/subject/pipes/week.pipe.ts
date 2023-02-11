import { Pipe, PipeTransform } from '@angular/core';
import WeekEnum from "../../../enums/week.enum";

@Pipe({
  name: 'week'
})
export class WeekPipe implements PipeTransform {

  transform(value: WeekEnum, ...args: unknown[]): unknown {
    return WeekEnum[value];
  }

}
