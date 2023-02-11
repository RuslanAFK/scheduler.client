import {Component, Input, OnInit} from '@angular/core';
import GetSubjectsInterface from "../../../../../interfaces/get-subjects.interface";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.css']
})
export class DayItemComponent implements OnInit {
  @Input() day: KeyValue<number, GetSubjectsInterface[]> | undefined;
  constructor() {
  }
  ngOnInit(): void {
  }

}
