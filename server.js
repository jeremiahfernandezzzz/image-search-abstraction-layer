
var express = require("express")
var app = new express()

var imageSearch = require('../myapi.js');
 
app.get('/', function (req,res){
  imageSearch('hello', function(results) {
        console.log(results)
  }, 0, 5);
})

app.listen(process.env.PORT)