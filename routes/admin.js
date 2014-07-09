'use strict';
module.exports = function(app){
	var admin = app.controllers.AdminController;
	
	//====================================
	//|  ADMIN
	//====================================
	app.get('/admin', admin.index);
	app.get('/admin/index', admin.index);

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
	app.get('/admin/teacher/profile', admin.teacher_profile);
	app.get('/admin/teacher/edit', admin.teacher_edit);
	
	//====================================
	//|  STUDENT
	//====================================
	app.get('/admin/student', admin.student);
	app.get('/admin/student/new', admin.student_new);
	app.post('/admin/student/create', admin.student_create);
	app.get('/admin/student/profile/:inscription', admin.student_profile);
	app.post('/admin/student/update', admin.student_update);
	app.get('/admin/student/edit/:inscription', admin.student_edit);

	//====================================
	//|  COURSE
	//====================================
	app.get('/admin/course', admin.course);
	app.get('/admin/course/new', admin.course_new);
	app.get('/admin/course/profile', admin.course_profile);
	app.get('/admin/course/edit', admin.course_edit);

	//====================================
	//|  OPPORTUNITY
	//====================================
	app.get('/admin/opportunity', admin.opportunity);
	app.get('/admin/opportunity/new', admin.opportunity_new);
	app.get('/admin/opportunity/profile', admin.opportunity_profile);
	app.get('/admin/opportunity/edit', admin.opportunity_edit);
	
}

