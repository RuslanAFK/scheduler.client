import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import AppStateInterface from "../../../../interfaces/app-state.interface";
import {ActivatedRoute} from "@angular/router";
import * as AuthActions from "../../store/auth.actions";
import UserInterface from "../../../../interfaces/user.interface";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthNavigationService} from "../../../shared/services/auth-navigation.service";
import {Observable} from "rxjs";
import {error, isLoading} from "../../store/auth.selectors";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isRegisterPage: boolean = false;
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  loading$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>, private route: ActivatedRoute,
              private authNavService: AuthNavigationService) {
    this.loading$ = store.pipe(select(isLoading))
  }
  ngOnInit(): void {
    this.route.url.subscribe(par => {
      if (par[0].path.toLowerCase() === "register")
        this.isRegisterPage = true;
    });
    this.authNavService.subscribeFromAuth();
  }
  ngOnDestroy(): void {
    this.authNavService.unsubscribeFromAuth();
  }

  onSubmit() {
    if (this.form.invalid) {
      alert("Invalid form.")
      return;
    }
    let data: UserInterface = {
      username: this.form.value.username ?? '',
      password: this.form.value.password ?? ''
    };
    if (this.isRegisterPage)
      this.store.dispatch(AuthActions.register(data));
    else
      this.store.dispatch(AuthActions.login(data))
  }

}
