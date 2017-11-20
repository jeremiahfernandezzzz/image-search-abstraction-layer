
var express = require("express")
var app = new express()

var imageSearch = require('node-google-image-search');

app.get('/:query', function(req,res){
  imageSearch(req.params.query, callback, 0, 5)

  function callback (results){
    res.send(results)
  }
  
})

app.listen(process.env.PORT)