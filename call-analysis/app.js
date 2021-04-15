let mongoose = require("mongoose");
let fs = require("fs");
mongoose.promise = global.Promise;
let url = "mongodb://localhost:27017/meanstack";
let callFile = fs.readFileSync("call_data.json");
let calls = JSON.parse(callFile);
const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, mongooseDbOption);
let db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => {

    let CallSchema = mongoose.Schema({
        _id : Number,
        source : Number, 
        destination: Number, 
        sourceLocation: String, 
        destinationLocation: String, 
        callDuration: String, 
        roaming: String, 
        callCharge: Number
    });

    let Call = mongoose.model("", CallSchema, "Call")

    calls.forEach(c => {
        let c1 = new Call(c);

        c1.save((err, result) => {
            if(!err) {
                console.log("Record Inserted " + result);
            }
            else {
                console.log(err);
            }
    
            mongoose.disconnect();
        })
    })
})