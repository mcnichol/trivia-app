var express 	= require('express'),
    styles 	= require('stylus'),
    morgan      = require('morgan'),
    bodyParser	= require('body-parser');
    mongoose    = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
   return styles(str).set('filename',path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(styles.middleware({
   src: __dirname + '/public',
   compile: compile
}));
app.use(express.static(__dirname + '/public'));

//if(env !== 'development'){
   console.log("Setting up in the Cloud");
   mongoose.connect('mongodb://mmcnichol:trivia@ds031842.mongolab.com:31842/trivia-app');
/*
}else{
   console.log("Setting up Locally");
   mongoose.connect('mongodb://localhost/trivia-app');
}
*/

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
   console.log('trivia-app db opened');
});

app.get('/partials/:partialPath', function(req,res){
   res.render('partials/' + req.params.partialPath);
});

app.get("*", function(req, res){
   res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log("Listening on port " + port + "...");

