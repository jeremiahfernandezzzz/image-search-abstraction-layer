
var express = require("express")
var app = new express()

const GoogleImages = require('./myapi.js');

const client = new GoogleImages('006846818615894256664:oilhtmgbk80', 'AIzaSyDE142vj4kzR_qekIiMwHYe-b4fOh6b_z0');

app.get('/', function (req,res){
client.search('Steve Angello')
	.then(images => {
    console.log(images)
	}).catch(error =>{
    console.log(error)
  })
})

app.listen(process.env.PORT)