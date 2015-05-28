var Event = require('mongoose').model('Event');

exports.getEvents = function(req, res){
    Event.find({}).exec(function(err, collection){
        res.send(collection);
    })
};

exports.getEventsById = function(req, res){
    Event.findOne({_id:req.param.id}).exec(function(err, event){
        res.send(event);
    });

    Event.update({_id:req.param.id}, {started:true},function(err){if(err){console.log(err);}})
};

exports.updateEvent = function(req, res){
    console.log("Update Event");
    Event.update({_id:req.param.id},{started:true}).exec(function(err, event){
        res.send(event);
    });
    console.log("Entering updateUser");
    /*
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
    */
};
