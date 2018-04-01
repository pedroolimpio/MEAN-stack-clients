var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 12345;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //app angular
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var routes = require('./routes/clients');
app.use('/v1', routes);