import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/subject.reducers";
import {SubjectService} from "./subject.service";
import {EffectsModule} from "@ngrx/effects";
import {SubjectEffects} from "./store/subject.effects";
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectItemComponent } from './components/subject-item/subject-item.component';

@NgModule({
  declarations: [
    SubjectListComponent,
    SubjectItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("subject", reducers),
    EffectsModule.forFeature([
      SubjectEffects
    ])
  ],
  providers: [
    SubjectService,
  ],
  exports: [SubjectListComponent]
})
export class SubjectModule { }
