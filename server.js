var express 		=require('express');
var morgan 		=require('morgan');
var bodyParser		=require('body-parser');
var methodOverride 	=require('method-override');
var app			=express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

app.listen(4567);
console.log('Simple Static Server Listening on port 4567');
