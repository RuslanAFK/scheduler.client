import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class ErrorGetterService {
  getMessage(e: HttpErrorResponse): string {
    let message = e.message;
    if (e.error.errors) {
      let errors = e.error.errors;
      for (let i in errors) {
        message = errors[i][0] ?? message;
        break;
      }
    }
    if (e.status === 500)
      return  "Unknown error occurred.";
    else if (e.status === 404)
      return  "Not found.";
    if (message.includes("duplicate"))
      return "Already exists."

    return message;
  }
  constructor() { }
}
