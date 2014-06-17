module.exports = function(app){
	var user = app.controllers.user;
	app.get('/user',user.index);
	app.get('/user/community',user.community);

}