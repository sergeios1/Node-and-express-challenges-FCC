var express = require('express'); 
var app = express();


console.log("Hello World");

app.get("/",function(a,b){
    b.send("Hello Express");
    res.sendFile(__dirname+/views/index.html);
});


app.use(express.static("assets",__dirname +  "/public"));


 module.exports = app;
