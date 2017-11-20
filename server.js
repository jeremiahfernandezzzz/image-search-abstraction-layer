
var express = require("express")
var app = new express()

var imageSearch = require('node-google-image-search');
 
app.get('/',function(req,res){
  var searchResults = imageSearch('hi', function(results){
      res.send(JSON.stringify(results))
  }, 0, 5);
 
  //function callback(results) 
  /*
  if (searchResults){
    res.send(searchResults)
  } else {
    res.send('no refs')
  }
  */
})

app.listen(process.env.PORT)