var User 	= require('mongoose').model('User'),
    encrypt	= require('../utilities/encryption');

exports.getUsers =  function(req, res){
  User.find({}).exec(function(err, collection){
    res.send(collection);
  })
;}

exports.createUser = function(req, res, next){
  var userData = req.body;
  
  userData.username = userData.username.toLowerCase();
  userData.salt = encrypt.createSalt(); 
  userData.hashed_pwd = encrypt.hashPwd(userData.salt, userData.password);
 
  User.create(userData, function(err, user){
    if(err){
      if(err.toString().indexOf('E11000') > -1){
        err = new Error('Duplicate Username');
      }
      res.status(400);
      return res.send({reason:err.toString()});
    }
    req.login(user, function(err){
      if(err){return next(err);}
      res.send(user);
    })
  })
};

exports.updateUser = function(req, res){
  //console.log("Entering updateUser");
  var userUpdates = req.body;
  
  if(req.user._id != userUpdates._id && !req.user.hasRole('admin')){
    res.status(403);
    return res.end();
  }
  //console.log("Getting Current User Data");
  req.user.firstName = userUpdates.firstName;
  req.user.lastName = userUpdates.lastName;
  req.user.username = userUpdates.username;

  //console.log("Encrypting Password");
  if(userUpdates.password && userUpdates.password.length > 0){
    //console.log("Salting Password");
    req.user.salt = encrypt.createSalt();
    //console.log("Hashing Password");
    req.user.hashed_pwd = encrypt.hashPwd(req.user.salt, userUpdates.password);
    //console.log("Finished Encrypting Password");
  }

  //console.log("Saving Data");
  req.user.save(function(err){
    if(err) {res.status(400); return res.send({reason:err.toString()})}
    res.send(req.user);
  })
};
