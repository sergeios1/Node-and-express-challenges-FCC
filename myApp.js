var express = require('express'); 
var app = express();

console.log("Hello World");

app.get("/",function(a,b){
    b.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));

let response = "hello json";

if(process.env.MESSAGE_STYLE === "HELLO JSON"){
    response = response.toUpperCase();
}



app.get("/json",(req,res) => {
    res.json({"message": response});
});



module.exports = app;

