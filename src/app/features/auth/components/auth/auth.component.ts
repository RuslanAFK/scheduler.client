import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import AppStateInterface from "../../../../interfaces/app-state.interface";
import {ActivatedRoute} from "@angular/router";
import * as AuthActions from "../../store/auth.actions";
import UserInterface from "../../../../interfaces/user.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isRegisterPage: boolean = false;
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })


  constructor(private store: Store<AppStateInterface>, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    //this.store.dispatch(Actions.logout())
    this.route.url.subscribe(par => {
      if (par[0].path.toLowerCase() === "register")
        this.isRegisterPage = true;
    });
  }

  onSubmit() {
    if (!this.form.value.username || !this.form.value.password)
      return;
    let data: UserInterface = {
      username: this.form.value.username,
      password: this.form.value.password
    };
    if (this.isRegisterPage)
      this.store.dispatch(AuthActions.register(data));
    else
      this.store.dispatch(AuthActions.login(data))
  }

}
