'use strict';

exports.start = function(){
	var express = require('express'),
		load 	= require('express-load'),
		mongoose = require('mongoose'),
		swig = require('swig'),
		uriUtil = require('mongodb-uri'),
		bodyParse = require('body-parser'),
		app 	= express(),
		banner  = require('./banner');
		
	
	var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } }; 
    var mongodbUri = 'mongodb://moodle:moodle123@ds033709.mongolab.com:33709/crieatividade';
	var mongooseUri = uriUtil.formatMongoose(mongodbUri);

	mongoose.connect(mongooseUri, options, function(err){
		if(err) throw err;

		console.log("mongoconectado");
	});            	
	
	app.set('/views', __dirname + '../../views');
	app.set('view engine', 'html');
	app.engine('html', swig.renderFile);
	app.set('view cache', false);
	swig.setDefaults({ cache: false });
	app.use(bodyParse.urlencoded());
	app.use(bodyParse.json());
	app.use(express.static(__dirname + '../../..' + '/public'));


	//express-load 
	load('models').then('controllers').then('routes').into(app);

	//banner
	banner();

	app.listen(4000, function(){
		console.log('Server on port', 4000);
	});
}
