module.exports = function(app){
	var admin = app.controllers.admin;
	// app.route('/admin').get(admin.degree);
	app.get('/admin', admin.index);
	app.get('/admin/community', admin.community);
	// app.get('/admin/teacher', admin.teacher);
	// app.get('/admin/community/new', admin.community_new);
	// app.get('/admin/community/edit', admin.community_edit);
	
}