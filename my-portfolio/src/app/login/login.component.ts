import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()
  })
  msg: string = "";

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  checkUser() {
    let user1 = this.loginRef.get("user")?.value;
    let pass1 = this.loginRef.get("pass")?.value;
    let userData = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
    console.log(userData.user);
    console.log(userData.pass);

    if(user1 == userData.user && pass1 == userData.pass) {
      sessionStorage.setItem("token", "1");
      this.router.navigate(["portfolio"]);
    }
    else {
      this.msg = "Login Error. Please try again. If you have not yet registered, please do so and then try again";
    }
  }

}
