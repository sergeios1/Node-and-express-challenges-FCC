var express = require('express'); 
var app = express();
require('dotenv').config();

console.log("Hello World");

app.get("/",function(a,b){
    b.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));

let response = "Hello json".toUpperCase();

if(process.env.MESSAGE_STYLE == "HELLO JSON"){
    response = "HELLO JSON";
}
else{
    response = "Hello json";
}

app.get("/json",(req,res) => {
    res.json({"message": response});
});

module.exports = app;