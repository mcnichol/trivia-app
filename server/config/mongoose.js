var mongoose 		= require('mongoose'),
    userModel  		= require('../models/User'),
    categoryModel 	= require('../models/Category');
 
module.exports = function(config){
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback(){
     console.log(config.msg);
  });

  userModel.createDefaultUsers();
  categoryModel.createDefaultCategories();
}


