module.exports = function(app){
	var AdminController = {
		index: function(req, res){
			res.render('admin/index');
		},
		community: function(req, res){
			res.render('admin/community');	
		}
	}
	return AdminController;
}