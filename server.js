
var express = require("express")
var app = new express()

var GoogleImages = require('google-images');
var client = new GoogleImages('006846818615894256664%3Adqfvw9xckim','AIzaSyDE142vj4kzR_qekIiMwHYe-b4fOh6b_z0')

app.get('/:query', function(req,res){
  client.search(req.params.query).then(images=>{
    res.send(images)
  })
})

app.listen(process.env.PORT)