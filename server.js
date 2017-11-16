var GoogleSearch = require('google-search')
var googleSearch = new GoogleSearch({
	key: 'AIzaSyDE142vj4kzR_qekIiMwHYe-b4fOh6b_z0',
	cx: '006846818615894256664%3Adqfvw9xckim'
})

var express = require("express")
var app = new express()

app.get("/", function(req,res){
	googleSearch.build({
    q: "hello",
    start: "5",
    fileType: "pdf",
    gl: "tr", //geolocation,
    lr: "lang_tr",
    num: "10", // Number of search results to return between 1 and 10, inclusive
    siteSearch: "http://www.google.com/" // Restricts results to URLs from a specified site
	},
	 function(error, response){
		res.send(response)
	})
})
app.listen(process.env.PORT)
