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
		res.render('user/edit');
	},
	edit: function(req, res){
		next();
	},
	nota: function(req, res){
		res.render('user/nota');	
	},
	oportunity: function(req, res){
		res.render('user/oportunity');		
	},
	doc: function(req, res){
		res.render('user/doc');	
	}
}
	
	return UserController;
};
