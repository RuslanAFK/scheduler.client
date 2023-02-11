import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import UserInterface from "../../../interfaces/user.interface";
import {AUTH_URL} from "../../../app.urls";
import AuthResponseInterface from "../../../interfaces/auth-response.interface";


@Injectable()
export class AuthService {
  constructor (private http: HttpClient) {}

  login = (loginData: UserInterface) => {
    return this.http.post<AuthResponseInterface>(`${AUTH_URL}/Login`, loginData)
  }

  register = (loginData: UserInterface) => {
    return this.http.post<void>(`${AUTH_URL}/Register`, loginData)
  }
}
