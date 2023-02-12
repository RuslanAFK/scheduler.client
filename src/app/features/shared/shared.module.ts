import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {InputComponent} from "./components/input/input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLinkWithHref} from "@angular/router";
import {ErrorGetterService} from "./services/error-getter.service";
import {AuthNavigationService} from "./services/auth-navigation.service";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BtnConditionalComponent } from './components/btn-conditional/btn-conditional.component';
import { ToastComponent } from './components/toast/toast.component';
import {ToastService} from "./services/toast.service";



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    InputComponent,
    SpinnerComponent,
    BtnConditionalComponent,
    ToastComponent,
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
    SpinnerComponent,
    BtnConditionalComponent,
    ToastComponent,
  ],
  providers: [
    ErrorGetterService,
    AuthNavigationService,
    ToastService
  ]
})
export class SharedModule { }
