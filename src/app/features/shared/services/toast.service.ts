import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as SubjectSelectors from "../../subject/store/subject.selectors";
import * as AuthSelectors from "../../auth/store/auth.selectors";

import {Subscription} from "rxjs";
import AppStateInterface from "../../../interfaces/app-state.interface";
import * as AuthActions from "../../auth/store/auth.actions";
import * as SubjectActions from "../../subject/store/subject.actions";


@Injectable()
export class ToastService {
  authError$ = this.store.pipe(select(AuthSelectors.error));
  subjectError$ = this.store.pipe(select(SubjectSelectors.error));
  errorSubscription: Subscription | undefined;

  constructor(private store: Store<AppStateInterface>) { }
  private getToastElement() {
    return document.getElementById("toast");
  }
  hide() {
    let toast = this.getToastElement();
    toast?.classList.remove("show");
  }

  subscribe(feature: "auth" | "subject") {
    let toast = this.getToastElement();
    if (!toast)
      return;
    let observable, actionDomain: any;
    if (feature === "auth") {
      observable = this.authError$;
      actionDomain = AuthActions;
    }
    else {
      observable = this.subjectError$;
      actionDomain = SubjectActions;
    }
    let messageBox = document.getElementById("toast-body");
    this.errorSubscription = observable.subscribe(error => {
      if (error) {
        toast?.classList.add("show");
        if (messageBox)
          messageBox.textContent = error;
        this.store.dispatch(actionDomain.clearError());
      }
    })
  }
  unsubscribe() {
    this.errorSubscription?.unsubscribe();
    delete this.errorSubscription;
    this.hide();
  }
}
