import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import AuthResponseInterface from "./interfaces/auth-response.interface";
import {select, Store} from "@ngrx/store";
import {error, isLoading, user} from "./features/auth/store/auth.selectors";
import AppStateInterface from "./interfaces/app-state.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }
}
