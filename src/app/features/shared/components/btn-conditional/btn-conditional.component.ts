import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-conditional',
  templateUrl: './btn-conditional.component.html',
  styleUrls: ['./btn-conditional.component.css']
})
export class BtnConditionalComponent implements OnInit {
  @Input() loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
