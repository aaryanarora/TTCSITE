const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));
app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");
})

app.get("/size",function(req,res){

    res.sendFile(__dirname + "/size/index.html");
})

app.get("/service",function(req,res){

    res.sendFile(__dirname + "/card.html");
})


app.listen(process.env.PORT || 3000,function(){

    console.log("App running at port 3000");
})