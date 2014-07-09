module.exports = function(){
  var mongoose = require('mongoose'),
  Schema   = mongoose.Schema,
  Course;

  Course = new Schema({
    name: String
  });

  return mongoose.model('Courses', Course);
}
