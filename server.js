
var express = require("express")
var app = new express()
var mongodb = require("mongodb")
var MongoClient = mongodb.MongoClient
var url = 'mongodb://jopet:jopet@ds237445.mlab.com:37445/url-shortener-microservice-db'

const GoogleImages = require('./mymodule.js');

const client = new GoogleImages('006846818615894256664:oilhtmgbk80', 'AIzaSyD2vIjre3uws0BGurMivbesspOn58DjorY');

app.get('/api/imagesearch/:q', function (req,res){
client.search(req.params.q)
	.then(search => {
    res.send(search)
  
    var date = Date()
    
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

app.get('/api/latest/imagesearch', function(req,res){
  MongoClient.connect(url, function(err, db){
      if (db){
        console.log("connected to db")
        db.collection("searches").find({},{_id: 0, term: 1, when: 1}).sort({$natural:-1}).limit(10).toArray(function(err, doc){
          if (err) {
            res.send(err)
          } else {
            res.send(doc)
          }
        })
      }
      if (err) {
        console.log("unconnected to db")
      }
    })
})

app.listen(process.env.PORT)