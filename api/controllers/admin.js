module.exports = function(app) {
	var AdminController = {
	
	index: function(req, res){
		res.render('admin/index');
	},
	//====================================
	//|  COMMUNITY
	//====================================
	community: function(req, res){
		res.render('admin/community/index');
	},
	community_new: function(req, res){
		res.render('admin/community/new');	
	},
	community_edit: function(req, res){
		res.render('admin/community/edit');	
	}
	,
	//====================================
	//|  TEACHER
	//====================================
	teacher: function(req, res){
		res.render('admin/teacher/index');
	},
	teacher_new: function(req, res){
		res.render('admin/teacher/new');	
	},
	teacher_profile: function(req, res){
		res.render('admin/teacher/profile');	
	},
	teacher_edit: function(req, res){
		res.render('admin/teacher/edit');	
	}
	,
	// //====================================
	// //|  STUDENT
	// //====================================
	student: function(req, res){
		res.render('admin/student/index');
	},
	student_new: function(req, res){
		res.render('admin/student/new');	
	},
	student_profile: function(req, res){
		res.render('admin/student/profile');	
	},
	student_edit: function(req, res){
		res.render('admin/student/edit');	
	}	
	,
	//====================================
	//|  COURSE
	//====================================
	course: function(req, res){
		res.render('admin/course/index');
	},
	course_new: function(req, res){
		res.render('admin/course/new');	
	},
	course_profile: function(req, res){
		res.render('admin/course/profile');	
	},
	course_edit: function(req, res){
		res.render('admin/course/edit');	
	}					
}
	
	return AdminController;
};
