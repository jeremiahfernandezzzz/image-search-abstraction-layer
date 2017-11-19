
var express = require("express")
var app = new express()

var imageSearch = require('node-google-image-search');

app.get('/:query', function(req,res))
imageSearch('<search-term>', callback
	imageSe})
        
function callback (results){
    res.send(results)
ach(req.params.query, function(, 5);
})

app.listen(process.env.PORT)