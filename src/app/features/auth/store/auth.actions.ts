import {createAction, props} from "@ngrx/store";
import AuthResponseInterface from "../../../interfaces/auth-response.interface";
import UserInterface from "../../../interfaces/user.interface";

export const login = createAction("[Auth] Login", (res: UserInterface) => ({data: res}))
export const loginSuccess = createAction("[Auth] Login Success", (res: AuthResponseInterface) => ({data: res}))
export const loginFailure = createAction("[Auth] Login Failure", (err: string) => ({error: err}))



export const register = createAction("[Auth] Register", (res: UserInterface) => ({data: res}))
export const registerFailure = createAction("[Auth] Register Failure", (err: string) => ({error: err}))



export const logout = createAction("[Auth] Logout")
