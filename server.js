
var express = require("express")
var app = new express()

//var Bing = require('node-bing-api')({ accKey: '0290a1597c0e43cabc3c77dd16826b25'});

const Imgur = require('imgur-node');
const client = new Imgur.Client('jeremiahfernandezzzz');
 
app.get('/', function(req,res){
  client.album.get('', (err, res) => {
    if (err) console.error(err);
    console.log(res);
  });
})

app.listen(process.env.PORT)