'use strict';
module.exports = function(app){
	var filterInt = function (value) {
 		 if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    		return Number(value);
  			return NaN;
	},
		 User = app.models.User,
		AdminController = {
		index: function(req, res){
			res.render('admin/index');
		}
		,
		//====================================
		//|  COMMUNITY
		//====================================
		community: function(req, res){
			res.render('admin/community/');	
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
			res.render('admin/teacher/');
		},
		teacher_new: function(req, res){
			res.render('admin/teacher/new');
		},
		teacher_profile: function(req, res){
			res.render('admin/teacher/profile');
		},
		teacher_edit: function(req, res){
			res.render('admin/teacher/edit');
		}
		,
		//====================================
		//|  STUDENT
		//====================================
		student: function(req, res){
		 User
		 .find()
		 .where('typeUser').equals(1)
		 .exec(function(err, user){
		 if(err) console.log('erro ao buscar student', err);
		
		 	res.render('admin/student/', {students: user});
		 });			
		},
		student_create: function(req, res){
			var user = req.body.user,
				userSave = new User(user);

			userSave.save(function(err, result){
				if(err) throw err;

				console.log("salvo", result);
				res.redirect('/admin/student/');	
			});			
		},
		student_new: function(req, res){
		User
		.findOne()
		.where('typeUser').equals(1)
		.sort('inscription')
		.exec(function(err, user){
		if(err) console.log('erro ao buscar student', err);
		
		console.log("user", user);
		if(user.inscription == undefined){
			console.log("undefined");
			var today = new Date();
			var yr = today.getFullYear();
			user.inscription = (yr +'0001').toString();
		}else{
			console.log("somou");
			user.inscription = filterInt(user.inscription) +1;
		}	
		 	res.render('admin/student/new', {inscription: user.inscription});
		 });
		},
		student_profile: function(req, res){
			res.render('admin/student/profile');
		},
		student_edit: function(req, res){
			res.render('admin/student/edit');
		}
		,
		//====================================
		//|  COURSE
		//====================================
		course: function(req, res){
			res.render('admin/course/');
		},
		course_new: function(req, res){
			res.render('admin/course/new');
		},
		course_profile: function(req, res){
			res.render('admin/course/profile');
		},
		course_edit: function(req, res){
			res.render('admin/course/edit');
		}
		,
		//====================================
		//|  OPPORTUNITY
		//====================================
		opportunity: function(req, res){
			res.render('admin/opportunity/');
		},
		opportunity_new: function(req, res){
			res.render('admin/opportunity/new');
		},
		opportunity_profile: function(req, res){
			res.render('admin/opportunity/profile');
		},
		opportunity_edit: function(req, res){
			res.render('admin/opportunity/edit');
		}
	}
	return AdminController;
}
