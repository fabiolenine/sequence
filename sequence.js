var express = require('express');
var http    = require('http')
var io      = require('socket.io')(http);
var vhost   = require('vhost');
var socket  = require('./public/javascripts/socket.js');

var app     = express();

app.use(vhost('sequence.lenines.com',app));

app.listen(8080);
//https.createServer(options, app).listen(443);

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','views');

app.get('/', function(req, res){
    res.send('Teste');
});