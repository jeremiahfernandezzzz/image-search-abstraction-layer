
var express = require("express")
var app = new express()

const GoogleImages = require('./mymodule.js');

const client = new GoogleImages('006846818615894256664:oilhtmgbk80', 'AIzaSyD2vIjre3uws0BGurMivbesspOn58DjorY');

app.get('/:q', function (req,res){
client.search(req.params.q)
	.then(images => {
    res.send(images)
	}).catch(error =>{
    res.send(error)
  })
  
  
})

app.listen(process.env.PORT)