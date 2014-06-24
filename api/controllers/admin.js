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
	teacher_edit: function(req, res){
		res.render('admin/teacher/edit');	
	}
	// ,
	// //====================================
	// //|  STUDENT
	// //====================================
	// student: function(req, res){
	// 	res.render('admin/student/index');
	// },
	// student_new: function(req, res){
	// 	res.render('admin/student/new');	
	// },
	// student_edit: function(req, res){
	// 	res.render('admin/student/edit');	
	// }						
}
	
	return AdminController;
};
