import {Component, Input, OnInit} from '@angular/core';
import GetSubjectsInterface from "../../../../../../interfaces/get-subjects.interface";
import {Store} from "@ngrx/store";
import AppStateInterface from "../../../../../../interfaces/app-state.interface";
import * as SubjectActions from '../../../../store/subject.actions'
import {Router} from "@angular/router";

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.css']
})
export class SubjectItemComponent implements OnInit {
  @Input() subject: GetSubjectsInterface | undefined;
  constructor(private store: Store<AppStateInterface>, private router: Router) { }

  ngOnInit(): void {
  }

  async onChange() {
    await this.router.navigateByUrl(`/update?id=${this.subject?.id}`);
  }

  onDelete() {
    if (this.subject) {
      const {id, name} = this.subject;
      if (confirm(`Do you really want to delete ${name}?`))
        this.store.dispatch(SubjectActions.deleteSubject(id));
    }
  }
}
