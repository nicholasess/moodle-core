module.exports = function(app){
	var com = app.controllers.community;
	app.get('/community/:id',com.index);

}