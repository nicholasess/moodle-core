module.exports = function(app){
	var AdminController = {
		index: function(req, res){
			res.render('admin/index');
		},
		community: function(req, res){
			res.render('admin/community');	
		},
		community_new: function(req, res){
			res.render('admin/community/new');	
		},
		community_edit: function(req, res){
			res.render('admin/community/edit');	
		},
		teacher: function(req, res){
			res.render('admin/teacher');
		},
		teacher_new: function(req, res){
			res.render('admin/teacher/new');
		},
		teacher_edit: function(req, res){
			res.render('admin/teacher/edit');
		}
	}
	return AdminController;
}