module.exports = function(app) {
	var HomeController = {
	
	index: function(req, res){
		res.render('home/index');
	},
	login: function(req, res){
		console.log(req);
		res.redirect('/user');
	}
}
	
	return HomeController;
};
