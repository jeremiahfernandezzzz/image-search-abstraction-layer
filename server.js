
var express = require("express")
var app = new express()

const GoogleImages = require('./myapi.js');

const client = new GoogleImages('CSE ID', 'API KEY');

app.get('/', function (req,res){
client.search('Steve Angello')
	.then(images => {
    console.log(images)
	}).catch(error =>{
    console.log(error)
  })
})

app.listen(process.env.PORT)