module.exports = function(app){
	var user = app.controllers.user;
	app.get('/user', user.index);
	app.get('/user/profile', user.profile);
	app.get('/user/profile/edit', user.show);
	app.post('/user/profile/edit', user.edit);
	app.get('/user/community', user.community);
	app.get('/user/notas', user.nota);
	app.get('/user/oportunity', user.oportunity);
	app.get('/user/doc', user.doc);
}