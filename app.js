var restify = require('restify');
var plugins = require('restify').plugins;
//var restifyValidator = require('restify-validator');
var appConfig = require('./server/config/appconfig.js');
var mongoose = require('mongoose');

//var setupController = require('../server/controllers/setupController.js');
//var userController = require('../server/controllers/userController.js');
//var coordinatesController = require('../server/controllers/coordinatesController.js');
var config = require('./server/config/dbConnection.js');


//Database Connection
mongoose.connect(config.getMongoConnection());
const database = mongoose.connection;
database.on('error', (err) => {
	console.log(err)
});
database.once('open', () => {
	console.log(`Server running on port: ${config.port}`);
})
console.log('Connection with mongo successful*************');

var server = restify.createServer();
//setupController(server, restify, restifyValidator);
//userController(server);
//coordinatesController(server);
//test

server.listen(appConfig.PORT, function() {
    console.log('%s listening at %s', server.name, server.url);
});
