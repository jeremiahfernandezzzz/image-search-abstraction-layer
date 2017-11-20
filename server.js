
var express = require("express")
var app = new express()

var imageSearch = require('node-google-image-search');

app.get('/:query', function(req,res){
  var search = imageSearch(req.params.query, callback, 0, 5)

  function callback (results){
      return results
  }
  
  res.send(JSON.stringify(search))
})

app.listen(process.env.PORT)