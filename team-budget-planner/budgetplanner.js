// Populating the table with the data from the session storage
function populateTable() {
    var obj = sessionStorage.getItem("budgetInfo");
    var data = JSON.parse(obj);
    var total = 0;
 
    data.forEach(element => {
          insertNewRecord(element);
          total += parseInt(element.budget);
    });

    var totalObj = {
        clientName: "<b>Total</b>",
        projName: "",
        budget: total
    };

    insertNewRecord(totalObj);
}

// Storing the data from the for submitted by the user
function onFormSubmit() {
    var data = readFormData();

    resetData();

    var oldData = JSON.parse(sessionStorage.getItem("budgetInfo"));

    if(oldData == null) {
        oldData = [];
    }

    oldData.push(data);

    sessionStorage.setItem("budgetInfo", JSON.stringify(oldData));
}

// Processing info from the user
function readFormData() {
    var obj = {};

    obj.clientName = document.getElementById("clientName").value;
    obj.projName = document.getElementById("projName").value;
    obj.budget = document.getElementById("budget").value;

    return obj;
}

// Inserting new rows with the data from the session storage
function insertNewRecord(data) {
    var table = document.getElementById("budgetList");
    var body = table.getElementsByTagName("tbody")[0];

    var newRow = body.insertRow(body.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = data.clientName;
    cell2.innerHTML = data.projName;
    cell3.innerHTML = "$" + data.budget;
}

// Clearing form fields
function resetData() {
    document.getElementById("clientName").value = "";
    document.getElementById("projName").value = "";
    document.getElementById("budget").value = "";
}