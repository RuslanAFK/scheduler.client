import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class ErrorGetterService {
  getMessage(e: HttpErrorResponse): string {
    // Error 404
    if (e.status === 404)
      return  "Not found.";
    // Validation errors
    else if (e.error.errors) {
      let errors = e.error.errors;
      let errorArr = [];
      for (let i in errors) {
        errorArr.push(errors[i][0]);
      }
      return  errorArr.join("\n");
    }
    // If error 500(unexpected) or DbUpdate or IncorrectPassword
    else if (e.error.error) {
      return e.error.error;
    }
    // Default
    return e.message;
  }
  constructor() { }
}
