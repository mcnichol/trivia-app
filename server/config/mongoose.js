var mongoose 	= require('mongoose'),
    crypto	= require('crypto');
 
module.exports = function(config){

  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback(){
     console.log('trivia-app db opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]
    
  });
  userSchema.methods={
    authenticate: function(passwordToMatch){
      return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  }
  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection){
    if(collection.length === 0){
      var salt, hash;
      salt = createSalt();
      hash = hashPwd(salt, 'mmcnk'); 
      User.create({firstName:'Michael',lastName:'McNichol',username:'mmcnk', salt: salt, hashed_pwd: hash, roles: ['admin']});
      
      salt = createSalt();
      hash = hashPwd(salt, 'augs'); 
      User.create({firstName:'August',lastName:'McNichol',username:'augs', salt:salt, hashed_pwd:hash, roles: []});
      console.log("Users Added");
    }else{
      console.log("Users have been found in DB");
    }
  });
}

function createSalt(){
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd){
  hmac = crypto.createHmac('sha1',salt);
  return hmac.update(pwd).digest('hex');
}
