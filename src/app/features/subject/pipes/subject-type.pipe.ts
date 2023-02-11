import { Pipe, PipeTransform } from '@angular/core';
import TypeEnum from "../../../enums/type.enum";

@Pipe({
  name: 'subjectType'
})
export class SubjectTypePipe implements PipeTransform {

  transform(value: TypeEnum, ...args: unknown[]): unknown {
    return TypeEnum[value];
  }

}
