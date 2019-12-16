import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import User from "../models/User";
import { IServiceResponse } from "../models/ApiResponse";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private _isLoggedIn: boolean;
  private _user: User;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  get user(): User {
    return this._user;
  }

  constructor(private api: ApiService, private router: Router) {
    this._isLoggedIn = false;
  }

  signup(user: User): Promise<IServiceResponse> {
    return new Promise(resolve => {
      this.api.createNewUser<User>(user).subscribe(res => {
        resolve({
          status: res.status,
          message: `${res.code}: ${res.message}`
        });
      });
    });
  }

  login(username: string, password: string): Promise<IServiceResponse> {
    return new Promise(resolve => {
      this.api.authenticateUser<User>(username, password).subscribe(res => {
        this._isLoggedIn = res.status;
        this._user = res.data;
        if (res.status) {
          if (res.data.admin) {
            this.router.navigate(["/dashboard"]);
          } else {
            this.router.navigate(["/home"]);
          }
        } else {
          resolve({
            status: res.status,
            message: `${res.code}: ${res.message}`
          });
        }
      });
    });
  }

  logout() {
    this.api
      .logoutUser(this.user.username)
      .subscribe(isLoggedIn => (this._isLoggedIn = isLoggedIn));
  }
}
