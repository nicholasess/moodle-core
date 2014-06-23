module.exports = function(app) {
	var CommuController = {
	
	index: function(req, res){
		res.render('community/index');
	}
}	
	return CommuController;
};