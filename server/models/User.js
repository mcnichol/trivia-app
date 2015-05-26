var mongoose 	= require('mongoose'),
    encrypt 	= require('../utilities/encryption')

var userSchema = mongoose.Schema({
    firstName: {type:String, required:'{PATH} is required!'},
    lastName: {type:String, required:'{PATH} is required!'},
    username: {
      type:String, 
      required:'{PATH} is required!',
      unique:true
    },
    salt: {type:String, required:'{PATH} is required!'},
    hashed_pwd: {type:String, required:'{PATH} is required!'},
    roles: [String]
});

userSchema.methods={
  authenticate: function(passwordToMatch){
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function(role){
    return this.roles.indexOf(role) > -1;
  }
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers(){
  User.find({}).exec(function(err, collection){
    if(collection.length === 0){
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'mmcnk'); 
      User.create({firstName:'Michael',lastName:'McNichol',username:'mmcnk', salt: salt, hashed_pwd: hash, roles: ['admin']});
      
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'augs'); 
      User.create({firstName:'August',lastName:'McNichol',username:'augs', salt:salt, hashed_pwd:hash, roles: []});
      //console.log("Users Added");
    }else{
      //console.log("Users have been found in DB");
    }
  })
};
 
exports.createDefaultUsers = createDefaultUsers;
