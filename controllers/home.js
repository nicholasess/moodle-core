var users = [
{
	username: 'user',
	password: 12345,
	level: 0,
	route: '/user'
},
{
	username: 'teacher',
	password: 12345,
	level: 1,
	route: '/user'
},
{
	username: 'teacher',
	password: 12345,
	level: 3,
	route: '/admin'
}];
module.exports = function(app) {
	var HomeController = {
	
	index: function(req, res){
		res.render('home/index');
	},
	login: function(req, res, next){
		var email = req.body.email;
		req.session.user = {};
		switch(email){
			case 'user': req.session.User = users[0];
				res.redirect(users[0].route);
			break;
			case 'teacher': req.session.User = users[1];
				res.redirect(users[1].route);
			break;
			case 'admin': req.session.User = users[2];
				res.redirect(users[2].route);
			break;
			default:req.session.User = users[0];
				res.redirect(users[0].route);
			break; 
		}
		
	}
}
	
	return HomeController;
};
