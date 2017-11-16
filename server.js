
var express = require("express")
var app = new express()

var imageSearch = require('node-google-image-search');
 
var results = imageSearch('<search-term>', callback(results){
              }, 0, 5);

app.listen(process.env.PORT)