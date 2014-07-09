'use strict';
module.exports = function(){
	var mongoose = require('mongoose'),
	Schema 	 = mongoose.Schema,
	Community;

	Community = new Schema({
    name: String
	});

	return mongoose.model('Communitys', Community);
}
