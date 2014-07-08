module.exports = function(app){
	var com = app.controllers.CommunityController;

	app.get('/community/:id',com.index);
}