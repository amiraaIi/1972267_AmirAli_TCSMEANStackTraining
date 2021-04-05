exports.logEmp = function(fName, lName, gender, email) {
    let fs = require("fs");
    let empFile = fs.readFileSync("emp.json");
    let emps = JSON.parse(empFile);
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    debugger;
    
    var emp1 = {"fName": fName, "lName": lName, "gender": gender, "email": email, "date": date, "time": time};
    emps.push(emp1);
    debugger;
    empsJson = JSON.stringify(emps);

    fs.writeFileSync("emp.json", empsJson);
}