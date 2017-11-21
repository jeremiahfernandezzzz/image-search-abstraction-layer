
var express = require("express")
var app = new express()

var imageSearch = require('node-google-image-search');
 
app.get('/', function (req,res){
  imageSearch('asd', function(results) {
      console.log(results)
  }, 0, 5);
})

app.listen(process.env.PORT)