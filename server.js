
var express = require("express")
var app = new express()

//var Bing = require('node-bing-api')({ accKey: '0290a1597c0e43cabc3c77dd16826b25'});

var util = require('util'),
  Bing = require('node-bing-api')({ accKey: '9ed464182a074e2da088a43c1d698fea'}),
  searchBing = util.promisify(Bing.web.bind(Bing));

Bing.images("Ninja Turtles", {
  count: 15,   // Number of results (max 50) 
  offset: 3    // Skip first 3 result 
  }, function(error, res, body){
    console.log(body);
  });

app.listen(process.env.PORT)