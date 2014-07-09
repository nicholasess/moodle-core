module.exports = function(){
	var mongoose = require('mongoose'),
	Schema 	 = mongoose.Schema,
	User;

	User = new Schema({
	inscription: {
		type: String,
    	required: true,
    	unique: true
	},	
    firstName: {
    	type: String,
    	required: true
    },
    lastName: {
    	type: String,
    	default: ''	
    },
    password: {
    	type: String,
    	required: true
    },
    email: {
    	type: String,
    	required: true,
    	unique: true
    },
    typeUser: {
    	type: String,
    	enum: [1,2,5]
    },
    socialmedia: [{
    url:{
    	type: String,
    	required: true
    },
    name:{
    	type: String,
    	required: true
    }}],
    dateCreate: {
    	type: Date,
    	default: Date.now
    }
	});

	return mongoose.model('Users', User);
}
