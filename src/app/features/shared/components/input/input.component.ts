import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() isSelect: boolean = false;
  @Input() name: string | undefined;
  @Input() binder: FormControl | undefined;
  @Input() options: KeyValue<number, string>[] = [];
  @Input() type: string = "text";

  constructor() { }

  ngOnInit(): void {
  }

}
