module.exports = function(app) {
	var AdminController = {
	
	index: function(req, res){
		res.render('admin/index');
	},
	community: function(req, res){
		res.render('admin/community/index');	
	},
	community_new: function(req, res){
		res.render('admin/community/new');	
	},
	community_edit: function(req, res){
		res.render('admin/community/edit');	
	},
	curser: function(req, res){
		res.render('admin/curser');
	},
	teacher: function(req, res){
		res.render('admin/teacher/index');
	}
}
	
	return AdminController;
};
