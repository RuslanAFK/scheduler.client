import {Component, Input, OnInit} from '@angular/core';
import SubjectInterface from "../../../../interfaces/subject.interface";

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.css']
})
export class SubjectItemComponent implements OnInit {

  @Input() subject: SubjectInterface | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
