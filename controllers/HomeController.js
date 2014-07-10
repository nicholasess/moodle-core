'use strict';
module.exports = function(app) {
	var User = app.models.User,
	HomeController = {
	
	index: function(req, res){
		res.render('home/index');
	},
	login: function(req, res, next){
		var inscription = req.body.inscription,
			password = req.body.password;
		User.findOne({inscription: inscription, password: password}).exec(function(err, user){
			if(err) throw err;
			
			if(user){
				switch(user.typeUser){
				case '1': res.redirect('/student/');
				break;

				case '2': res.redirect('teacher/');
				break;

				case '5': res.redirect('admin/');
				break;
				}	
			}else{
				res.redirect('/');
			}
			
		});
						
	}
}
	
	return HomeController;
};
