
var express = require("express")
var app = new express()

const GoogleImages = require('./myapi.js');

const client = new GoogleImages('006846818615894256664:oilhtmgbk80', 'AIzaSyD2vIjre3uws0BGurMivbesspOn58DjorY');

app.get('/', function (req,res){
client.search('Steve Angello')
	.then(images => {
    res.send(images)
	}).catch(error =>{
    console.log(error)
  })
})

app.listen(process.env.PORT)