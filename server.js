
var express = require("express")
var app = new express()

const GoogleImages = require('google-images');

const client = new GoogleImages(process.env.CSE_ID, process.env.CSE_API_KEY);

app.get('/',function(req,res){
  client.search('Steve Angello')
    .then(images => {
      console.log(images)
    }).catch(error => {
      console.log(error)
    })
})

app.listen(process.env.PORT)