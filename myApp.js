var express = require('express'); 
var app = express();
app.use(express.static(__dirname + "/public"));


console.log("Hello World");

app.get("/",function(a,b){
    b.send("Hello Express");
    res.sendFile(__dirname+/views/index.html);
});


 module.exports = app;
