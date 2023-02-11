import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubjectModule} from "./features/subject/subject.module";
import {AuthModule} from "./features/auth/auth.module";
import {AuthComponent} from "./features/auth/components/auth/auth.component";
import {SubjectListComponent} from "./features/subject/components/subject-list/subject-list.component";

const routes: Routes = [
  {path: "login", component: AuthComponent},
  {path: "register", component: AuthComponent},
  {path: "subjects", component: SubjectListComponent}
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
