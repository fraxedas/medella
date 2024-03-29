/// <reference path="typings/node/node.d.ts"/>

var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var controllers = require("./controllers");

/// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//Set the public static resource folder
app.use(express.static(__dirname + "/public"));

//Setup the routes
controllers.init(app);

//Setup the schedule
var schedule = require("./schedule");
schedule.init();

//Enable CORS
var middleware = require('./lib/middleware');
middleware.init(app);

//Create the server
var server = http.createServer(app);

//Start listening
server.listen(process.env.PORT || 3000);
