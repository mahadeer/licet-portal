import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { ILoginInfo } from "../../models/Login";
import User from "../../models/User";
import { IServiceResponse } from "../../models/ApiResponse";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  response: IServiceResponse;
  title: string;
  loginInfo: ILoginInfo;
  newUser: User;
  constructor(private userService: UserService) {
    this.title =
      "LOYOLA-ICAM COLLEGE OF ENGINEERING AND TECHNOLOGY Online Portal";
    this.loginInfo = {
      username: "",
      password: ""
    };
    this.newUser = new User();
    this.response = {
      message: "",
      status: false
    };
  }

  login() {
    this.userService
      .login(this.loginInfo.username, this.loginInfo.password)
      .then(res => {
        this.response = res;
      });
  }

  signup() {
    this.userService.signup(this.newUser).then(res => {
      this.response = res;
    });
  }
}
