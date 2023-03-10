import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/auth.reducers";
import { AuthComponent } from './components/auth/auth.component';
import {AuthService} from "./services/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/auth.effects";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AuthComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature("auth", reducers),
        EffectsModule.forFeature([
            AuthEffects
        ]),
        SharedModule
    ],
  providers: [AuthService],
  exports: [AuthComponent]
})
export class AuthModule { }
