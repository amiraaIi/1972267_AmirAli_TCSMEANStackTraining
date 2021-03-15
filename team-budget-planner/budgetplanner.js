var budgetObj = [];

function storeInSession() {
    sessionStorage.setItem("budgetInfo", budgetObj);
}

function retrieveFromSession() {
    var obj = sessionStorage.getItem("budgetInfo");
    console.log(obj);
}

function onFormSubmit() {
    var data = readFormData();
    insertNewRecord(data);
    resetData();
    budgetObj.push(data);
}

function readFormData() {
    var obj = {}; // Empty object
    obj.clientName = document.getElementById("clientName").value;
    obj.projName = document.getElementById("projName").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj)
    return obj;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = data.name;
    cell2.innerHTML = data.age;
    
}

function resetData() {
    document.getElementById("clientName").value = "";
    document.getElementById("projName").value = "";
    document.getElementById("budget").value = "";
}