module.exports = function(app) {
	var UserController = {
	
	index: function(req, res){
		res.render('user/index');
	},
	community: function(req, res){
		res.render('user/community');	
	}
}
	
	return UserController;
};
