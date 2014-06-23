/*

*/
'use strict';;

exports.start = function(){
	var express = require('express'),
		load 	= require('express-load'),
		session = require('express-session'),
		bodyParse = require('body-parser'),
		app 	= express(),
		banner  = require('./banner'),
		i18n 	= require("i18n");
	
	//i18n
	// i18n.configure({
 //    	locales:['en', 'de'],
 //    	directory: __dirname + '/api/locales'
	// });
	app.set('/views', __dirname + '../..' + '/views');
	app.set('view engine', 'ejs');
	app.use(bodyParse());
	app.use(session({secret: 'keyboard moodle'}));
	app.use(express.static(__dirname + '../../..' + '/public'));

	//express-load 
	load('models').then('controllers').then('routes').into(app);

	//banner
	banner();

	app.listen(3000, function(){
		console.log('Server on port', 3000);
	});
}