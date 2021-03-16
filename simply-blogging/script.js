function addBlog() {
    storeBlog();
    var data = JSON.parse(sessionStorage.getItem("blogInfo"));

    // Empty the div before it gets reprinted as the old logs won't show
    // on reload otherwise
    document.getElementById("blogDiv").innerHTML = "";

    data.forEach(element => {
        populateBlogs(element);
    });
}

function readFormData() {
    var obj = {};

    obj.title = document.getElementById("title").value;
    obj.desc = document.getElementById("desc").value;
    
    if (document.getElementById("image").files[0] != undefined) {
        obj.imageInfo = document.getElementById("image").files[0].name;
    }

    return obj;
}

function storeBlog() {
    var data = readFormData();

    if(data.title == "" || data.desc == "") {
        alert("Please enter both a title and a description.");
        return;
    }

    resetData();

    var oldData = JSON.parse(sessionStorage.getItem("blogInfo"));

    if(oldData == null) {
        oldData = [];
    }

    oldData.push(data);

    sessionStorage.setItem("blogInfo", JSON.stringify(oldData));
}

function populateBlogs(data) {
    var blog = document.getElementById("blogDiv");

    if(data.imageInfo != undefined) {
        blog.innerHTML += "<br><div class='card'><img src='" + data.imageInfo + "'><div class='card-body'><h3>" + data.title + "</h3><br><hr><p class='card-text'>" + data.desc + "</p><br></div></div>";
    }
    else {
        blog.innerHTML += "<br><div class='card'><div class='card-body'><h3>" + data.title + "</h3><br><hr><p class='card-text'>" + data.desc + "</p><br></div></div>";
    }
}

// Clearing form fields
function resetData() {
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("image").value = "";
}