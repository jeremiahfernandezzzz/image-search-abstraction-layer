
var express = require("express")
var app = new express()

var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: process.env.CSE_API_KEY,
  cx: process.env.CSE_ID
});
 
app.get('/', function (req,res){
  googleSearch.build({
    q: "",
    start: 5,
    fileType: "pdf",
  gl: "tr", //geolocation, 
  lr: "lang_tr",
  num: 10, // Number of search results to return between 1 and 10, inclusive 
  siteSearch: "http://kitaplar.ankara.edu.tr/" // Restricts results to URLs from a specified site 
}, function(error, response) {
  console.log(response);
});

app.listen(process.env.PORT)