exports.populatePage = function(url, urlData) {
    let fs = require("fs");
    let taskFile = fs.readFileSync("tasks.json");
    let tasks = JSON.parse(taskFile);
    let body = `
        <h2>Enter your task to add</h2>
        <form action="login" method="GET">
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
        
        <label>Task ID</label>
        <input type="number" name="taskid" id="taskid" required>
    `
    if (url == "/") {
        return body;
    }
    else if (url == "/add") {
        let data = url.parse(urlDetails, true).query;
        console.log(data);
        var taskId = data.taskid;
        var empId = data.empid;
        var task = data.task;
        var deadline = data.deadline;
        var tempTask = {"taskId": taskId, "empId": empId, "task": task, "deadline": deadline};

        tasks.push(tempTask);
        // fs.writeFileSync("tasks.json", JSON.stringify(tasks));

        // for (var obj of tasks) {
        //     mytable += "<td>" + CELL + "</td>";
        // }
        // mytable += "</tr></table>";
    }
    else if (url == "/delete") {
        
    }
    else {
        
    }
}