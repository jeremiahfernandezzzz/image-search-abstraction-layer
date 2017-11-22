
var express = require("express")
var app = new express()
var mongodb = require("mongodb")
var MongoClient = mongodb.MongoClient
var url = 'mongodb://jopet:jopet@ds237445.mlab.com:37445/url-shortener-microservice-db'

const GoogleImages = require('./mymodule.js');

const client = new GoogleImages('006846818615894256664:oilhtmgbk80', 'AIzaSyD2vIjre3uws0BGurMivbesspOn58DjorY');

app.get('/:q', function (req,res){
client.search(req.params.q)
	.then(search => {
    res.send(search)
  
    vardate = new Date
    var newSearch = {
      term: req.params.q,
      when: date
    }
    MongoClient.connect(url, function(err, db){
      if (db){
        console.log("connected to db")
        db.collection("searches").insertOne(newSearch)
      }
      if (err) {
        console.log("unconnected to db")
      }
    })
  
	}).catch(error =>{
    res.send(error)
  })
  
  
})

app.listen(process.env.PORT)