
var express = require("express")
var app = new express()

var imageSearch = require('node-google-image-search');
 
app.get('/',function(req,res){
  var results = imageSearch('hi', callback, 0, 5);
 
  function callback(results) {
      res.send('asd')
  }
      res.send('asd')
})

app.listen(process.env.PORT)