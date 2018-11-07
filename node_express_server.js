var express = require('express');
var port = 8080;
var app = express();
var path = require('path');
var date = new Date();
var hours = date.getHours();
var min =date.getMinutes();
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function () {
    console.log("Server is running on "+ port +" port " + hours +":" + min);
  });

