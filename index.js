var express = require("express");
var app = express();

var PORT = procces.env.PORT || 8080;

app.get("/", function(req, res) {
    res.send({ hi: 'there' });
});

app.listen('8080');