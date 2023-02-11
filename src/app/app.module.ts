import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {AuthModule} from "./features/auth/auth.module";
import {SubjectModule} from "./features/subject/subject.module";
import {EffectsModule} from "@ngrx/effects";
import { NavbarComponent } from './features/shared/components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TokenInterceptor} from "./interceptors/token.interceptor";
import { HomeComponent } from './features/shared/components/home/home.component';
import { InputComponent } from './features/shared/components/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./features/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AuthModule,
        SubjectModule,
        SharedModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            autoPause: true
        }),
        NgbModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
