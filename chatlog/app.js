let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongoose = require("mongoose");
mongoose.promise = global.Promise;
const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
let url = "mongodb://localhost:27017/meanstack";
let chatCount = 0;
let name = "";
let message = "";

mongoose.connect(url, mongooseDbOption);
let db = mongoose.connection;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

db.on("error", (err) => console.log(err));
db.once("open", () => {
    let ChatSchema = mongoose.Schema({
        _id : Number,
        name : String, 
        msg: String
    });

    let Chat = mongoose.model("", ChatSchema, "Chat")

    io.on("connection", (socket) => {
        console.log("Client connected to application...");
    
        socket.on("chat message", (msg) => {
            chatCount++;
            name = msg.name;
            message = msg.message;
            
            let chat = new Chat({_id: chatCount, name: name, msg: message});

            chat.save((err, result) => {
                if(!err) {
                    console.log("Record Inserted " + result);
                }
                else {
                    console.log(err);
                }
            }) 
        })
    })
})
    
http.listen(9090, () => console.log("Server running on port 9090"));