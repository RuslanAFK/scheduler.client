import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {

  @Input() feature: "subject" | "auth" = "auth";
  constructor(private toastService: ToastService) {
  }

  onClose() {
    this.toastService.hide();
  }

  ngOnInit(): void {
    this.toastService.subscribe(this.feature);
  }

  ngOnDestroy() {
    this.toastService.unsubscribe();
  }

}
