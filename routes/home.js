module.exports = function(app){
	var home = app.controllers.HomeController;
	app.get('/',home.index);
	app.post('/',home.login);
}

