var GoogleSearch = require('google-search')
var googleSearch = new GoogleSearch({
	key: 'AIzaSyDE142vj4kzR_qekIiMwHYe-b4fOh6b_z0',
	cx: '006846818615894256664%3Adqfvw9xckim'
})

var express = require("express")
var app = new express()

app.get("/", function(req,res){
	googleSearch.build({
		q:"",
		start: "0",
		fileType: "",
		gl: "",
		lr: "lang_en",
		num: "",
		siteSearch: "",
	},
	 function(error, response){
		res.send(response)
	})
})
app.listen(process.env.PORT)
