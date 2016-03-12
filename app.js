var express = require('express');
var app = express();
var connect = require('connect');
var sharejs = require('share');
require('redis');

var options = {
	db: {
		type: 'redis',
	}
};

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// Routing Table
app.get('/', function(req, res) {
	res.render('pad');
});

app.get('/(:id)', function(req, res) {
	res.render('pad');
});

sharejs.server.attach(app, options);

var port = 8000;
app.listen(port);