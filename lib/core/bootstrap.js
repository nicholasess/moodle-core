'use strict';

exports.start = function(){
	var express = require('express'),
		load 	= require('express-load'),
		mongoose = require('mongoose'),
		uriUtil = require('mongodb-uri'),
		bodyParse = require('body-parser'),
		app 	= express(),
		banner  = require('./banner'),
		i18n 	= require("i18n");
	
	var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } }; 
    var mongodbUri = 'mongodb://moodle:moodle123@ds033709.mongolab.com:33709/crieatividade';
	var mongooseUri = uriUtil.formatMongoose(mongodbUri);

	mongoose.connect(mongooseUri, options, function(err){
		if(err) throw err;

		console.log("mongoconectado");
	});            	
	
	app.set('/views', __dirname + '../../views');
	app.set('view engine', 'ejs');
	app.use(bodyParse.urlencoded());
	app.use(bodyParse.json());
	app.use(express.static(__dirname + '../../..' + '/public'));


	//express-load 
	load('models').then('controllers').then('routes').into(app);

	//banner
	banner();

	
	

	// var Student = mongoose.model('Student', { name: String });

	// var student = new Student({ name: 'Nicholas' });
	// student.save(function(err, result){
	// 	if(err) return console.error(err);
	// 	console.log('salvo com susexo');
	// });

	app.listen(4000, function(){
		console.log('Server on port', 4000);
	});
}