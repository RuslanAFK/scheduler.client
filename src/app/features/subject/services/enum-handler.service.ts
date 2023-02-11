import { Injectable } from '@angular/core';
import {KeyValue, WeekDay} from "@angular/common";
import WeekEnum from "../../../enums/week.enum";
import TypeEnum from "../../../enums/type.enum";

@Injectable()
export class EnumHandlerService {
  weekDays = this.getNumeralEnum(WeekDay)
  weeks = this.getNumeralEnum(WeekEnum)
  types = this.getNumeralEnum(TypeEnum)

  getNumeralEnum ($enum: any) {
    return Object.keys($enum).map((key: any) => $enum[key])
      .filter(value => typeof value === 'string') as KeyValue<number, string>[];
  }

  constructor() { }
}
