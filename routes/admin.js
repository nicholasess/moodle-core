module.exports = function(app){
	var admin = app.controllers.admin;
	app.get('/admin', admin.index);

	//====================================
	//|  COMMUNITY
	//====================================
	app.get('/admin/community', admin.community);
	app.get('/admin/community/new', admin.community_new);
	app.get('/admin/community/edit', admin.community_edit);
	
	//====================================
	//|  TEACHER
	//====================================
	app.get('/admin/teacher', admin.teacher);
	app.get('/admin/teacher/new', admin.teacher_new);
	app.get('/admin/teacher/edit', admin.teacher_edit);
	
	// //====================================
	// //|  STUDENT
	// //====================================
	// app.get('/admin/student', admin.student);
	// app.get('/admin/student/new', admin.student_new);
	// app.get('/admin/student/edit', admin.student_edit);
	

}