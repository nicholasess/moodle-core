module.exports = function(app) {
	var UserController = {
	
	index: function(req, res){
		res.render('user/index');
	},
	community: function(req, res){
		res.render('user/community');	
	},
	profile: function(req, res){
		res.render('user/profile');
	},
	show: function(req, res, next){
		next();
	},
	edit: function(req, res){
		res.render('user/edit');
	}
}
	
	return UserController;
};
