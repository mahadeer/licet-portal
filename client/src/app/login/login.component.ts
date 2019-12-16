import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ILoginInfo } from "../models/Login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  title: string;
  loginInfo: ILoginInfo = {
    username: "",
    password: ""
  };
  constructor(private userService: UserService) {
    this.title =
      "LOYOLA-ICAM COLLEGE OF ENGINEERING AND TECHNOLOGY Online Portal";
  }

  login() {
    this.userService.login(this.loginInfo.username, this.loginInfo.password);
  }
}
