let input = require("readline-sync");
let log = require("./logging");
debugger;

let fName = input.question("Enter your first name: ");
let lName = input.question("Enter your last name: ");
let gender = input.question("Enter your gender: ");
let email = input.questionEMail("Enter your e-mail: ");
debugger;

log.logEmp(fName, lName, gender, email);