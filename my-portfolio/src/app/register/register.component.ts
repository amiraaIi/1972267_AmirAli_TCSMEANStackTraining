import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerRef = new FormGroup({
    fName: new FormControl(),
    lName: new FormControl(),
    user: new FormControl(),
    pass: new FormControl()
  })

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    let formObj = this.registerRef.getRawValue();
    sessionStorage.setItem("userInfo", JSON.stringify(formObj));
    this.router.navigate(["login"]);
  }
}
