let http = require("http");
let url = require("url");
let port = 9999;
let fs = require("fs");
let taskFile = fs.readFileSync("tasks.json");
let tasks = JSON.parse(taskFile);
let tableData = ``;

let server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html");
    let urlDetails = req.url;
    let path = url.parse(urlDetails, true).pathname;
    let body = `
        <h2>Enter your task to add</h2>
        <form action="add" method="GET">
            <label>Task ID</label>
            <input type="number" name="taskid" id="taskid" required>
            <br>
            <label>Employee ID</label>
            <input type="number" name="empid" id="empid" required>
            <br>
            <label>Task</label>
            <input type="text" name="task" id="task" required>
            <br>
            <label>Deadline</label>
            <input type="date" name="deadline" id="deadline" required>
            <br>
            <input type="submit" value="Add Task">
            <input type="reset" value="Reset">
        </form>
        <br>
        <h2>Enter Task ID to delete</h2>
        <form action="delete" method="GET">
            <label>Task ID</label>
            <input type="number" name="taskid" id="taskid" required>
            <input type="submit" value="Delete Task">
        </form>

        <h2>Task List</h2>
    `

    if (urlDetails == "/") {
        res.end(body);
    }
    else if (path == "/add") {
        let data = url.parse(urlDetails, true).query;
        var taskId = data.taskid;
        var empId = data.empid;
        var task = data.task;
        var deadline = data.deadline;
        var tempTask = {"taskId": taskId, "empId": empId, "task": task, "deadline": deadline};
        var flag = 0;

        tasks.forEach(task => {
            if(task.taskId == taskId) {
                console.log("Task ID already exists. Please enter a unique task ID.");
                flag = 1;
            }
        })
        if(flag == 0) {
            tasks.push(tempTask);
            fs.writeFileSync("tasks.json", JSON.stringify(tasks));
        }

        tableData = createTable(tasks);
        res.end(body + tableData);
    }
    else if (path == "/delete") {
        let data = url.parse(urlDetails, true).query;
        var taskId = data.taskid;

        tasks.forEach((task, i) => {
            if(task.taskId == taskId) {
                console.log("Task deleted successfully");
                tasks.splice(i, 1);
            }
        })
        fs.writeFileSync("tasks.json", JSON.stringify(tasks));
        tableData = createTable(tasks);
        res.end(body + tableData);
    }
    else {
        res.end("Page not found");
    }
});

function createTable(tasksArr) {
    let tableRows = new Array();
    let table = `
        <table style="border: 1px solid black">
            <tr>
                <th>Task ID</th>
                <th>Emp ID</th>
                <th>Task</th>
                <th>Deadline</th>
            </tr>
    `
    for(let task of tasks) {
        tableRows.push(createRow(task));
    }

    tableRows.forEach(r => {
        table += r;
    })

    table += `</table>`

    return table;
}

function createRow(task) {
    return `<tr><td>` + task.taskId + `</td><td>` + task.empId + `</td><td>` + task.task + `</td><td>` + task.deadline + `</td></tr>`;
}

server.listen(port, 
    () => console.log(`Server running on port ${port}`)    
);