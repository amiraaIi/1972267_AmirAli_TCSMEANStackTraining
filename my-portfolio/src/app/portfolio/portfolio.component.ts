import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  userData = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
  fName = this.userData.fName;
  contactRef = new FormGroup({
    name: new FormControl(),
    number: new FormControl()
  })
  headers = ["name", "number"];
  rows = new Array();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  submitContact() {
    let contactName = this.contactRef.get("name")?.value;
    let num: string = this.contactRef.get("number")?.value;
    let obj = {name: contactName, number: num}

    this.rows.push(obj);
    this.contactRef.reset();
  }

  clearContacts() {
    this.rows = [];
  }

  logout() {
    sessionStorage.removeItem("token");
    this.router.navigate(["\login"]);
  }
}
