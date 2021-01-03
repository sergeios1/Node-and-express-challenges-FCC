var express = require('express'); 
var app = express();

const port = 3000;
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

console.log("Hello World");
app.get("/",function(a,b){
    b.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));


app.get("/json",(req,res) => {
  if(process.env.MESSAGE_STYLE === "uppercase"){
    res.json({"message": "HELLO JSON"});
  }
  else{
    res.json({"message": "Hello json"});
  }
});


app.listen(port, ()=>console.log("listening on port" + port));

module.exports = app;