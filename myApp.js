var express = require('express'); 
var app = express();

console.log("Hello World");

app.get("/",function(a,b){
    b.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));


 module.exports = app;
