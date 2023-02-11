import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/subject.reducers";
import {SubjectService} from "./services/subject.service";
import {EffectsModule} from "@ngrx/effects";
import {SubjectEffects} from "./store/subject.effects";
import { WeekComponent } from './components/week/week.component';
import { SubjectItemComponent } from './components/week/day-item/subject-item/subject-item.component';
import { DayItemComponent } from './components/week/day-item/day-item.component';
import { WeekDayPipe } from './pipes/week-day.pipe';
import { WeekPipe } from './pipes/week.pipe';
import { SubjectTypePipe } from './pipes/subject-type.pipe';
import { ChangeSubjectComponent } from './components/add-subject/change-subject.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {ChangeSubjectFormService} from "./services/change-subject-form.service";
import {ErrorAndChangeHandlerService} from "./services/error-and-change-handler.service";
import {SingleSubjectReaderService} from "./services/single-subject-reader.service";
import {EnumHandlerService} from "./services/enum-handler.service";

@NgModule({
  declarations: [
    WeekComponent,
    SubjectItemComponent,
    DayItemComponent,
    WeekDayPipe,
    WeekPipe,
    SubjectTypePipe,
    ChangeSubjectComponent,
  ],
    imports: [
        CommonModule,
        StoreModule.forFeature("subject", reducers),
        EffectsModule.forFeature([
            SubjectEffects
        ]),
        ReactiveFormsModule,
        SharedModule
    ],
  providers: [
    SubjectService,
    ChangeSubjectFormService,
    ErrorAndChangeHandlerService,
    SingleSubjectReaderService,
    EnumHandlerService
  ],
  exports: [WeekComponent]
})
export class SubjectModule { }
