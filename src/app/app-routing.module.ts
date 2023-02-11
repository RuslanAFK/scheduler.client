import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubjectModule} from "./features/subject/subject.module";
import {AuthModule} from "./features/auth/auth.module";
import {AuthComponent} from "./features/auth/components/auth/auth.component";
import {WeekComponent} from "./features/subject/components/week/week.component";
import {ChangeSubjectComponent} from "./features/subject/components/add-subject/change-subject.component";
import { HomeComponent } from './features/shared/components/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: AuthComponent},
  {path: "register", component: AuthComponent},
  {path: "subjects", component: WeekComponent},
  {path: "add", component: ChangeSubjectComponent},
  {path: "update", component: ChangeSubjectComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SubjectModule,
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
