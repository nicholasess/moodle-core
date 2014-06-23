/*

*/
'use strict';

module.exports = function(){
	var express = require('express'),
	load = require('express-load'),
	bodyParse = require('body-parser'),
	app = express();
	
	app.set('/views', __dirname + '../..' + '/views');
	app.set('view engine', 'ejs');
	app.use(express.static(__dirname + '../../..' + '/public'));

	load('models')
		.then('controllers')
		.then('routes')
		.into(app);
}