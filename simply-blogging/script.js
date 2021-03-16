function addBlog() {
    storeBlog();
    var data = JSON.parse(sessionStorage.getItem("blogInfo"));

    data.forEach(element => {
        populateBlogs(element);
    });
    
}

function readFormData() {
    var obj = {};

    obj.title = document.getElementById("title").value;
    obj.desc = document.getElementById("desc").value;
    var image = document.getElementById("image").files[0];
    
    if (image != undefined) {
        obj.imageInfo = image.name;
    }

    return obj;
}

function storeBlog() {
    var data = readFormData();

    resetData();

    var oldData = JSON.parse(sessionStorage.getItem("blogInfo"));

    if(oldData == null) {
        oldData = [];
    }

    oldData.push(data);

    sessionStorage.setItem("blogInfo", JSON.stringify(oldData));
}

function populateBlogs(data) {
    blog.innerHTML += "<br>" + blogObj.title + "<br>" + blogObj.desc;
}