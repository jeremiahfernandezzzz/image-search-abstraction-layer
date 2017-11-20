
var express = require("express")
var app = new express()

const GoogleImages = require('google-images');
 
const client = new GoogleImages('006846818615894256664%3Adqfvw9xckim', 'AIzaSyDE142vj4kzR_qekIiMwHYe-b4fOh6b_z0');
 
app.get('/', function(req,res){
  client.search('Steve Angello')
      .then(images => {
        res.send(images)
        /*
        [{
            "url": "http://steveangello.com/boss.jpg",
            "type": "image/jpeg",
            "width": 1024,
            "height": 768,
            "size": 102451,
            "thumbnail": {
                "url": "http://steveangello.com/thumbnail.jpg",
                "width": 512,
                "height": 512
            }
        }]
         */
    }).catch(
      res.send('aaa')
    )
  })

app.listen(process.env.PORT)