import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import User from "../models/User";

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

  constructor(private api: ApiService) {
    this._isLoggedIn = false;
  }

  login(username: string, password: string) {
    this.api.authenticateUser<User>(username, password).subscribe(res => {
      this._isLoggedIn = res.status;
      this._user = res.data;
    });
  }

  logout() {
    this.api
      .logoutUser(this.user.userName)
      .subscribe(isLoggedIn => (this._isLoggedIn = isLoggedIn));
  }
}
