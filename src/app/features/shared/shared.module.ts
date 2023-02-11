import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {InputComponent} from "./components/input/input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLinkWithHref} from "@angular/router";
import {ErrorGetterService} from "./services/error-getter.service";
import {AuthNavigationService} from "./services/auth-navigation.service";



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLinkWithHref
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    InputComponent,
  ],
  providers: [
    ErrorGetterService,
    AuthNavigationService
  ]
})
export class SharedModule { }
