var express = require('express'); 
var app = express();

console.log("Hello World");

app.get("/",function(a,b){
    b.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));

let uppercase = "hello json".toUpperCase();



app.get("/json",(req,res) => {
    if(process.env.MESSAGE_STYLE === uppercase){
        res.json({"message": uppercase});
    }
    else{
        res.json({"message": "Hello json"});
    }
});



module.exports = app;

