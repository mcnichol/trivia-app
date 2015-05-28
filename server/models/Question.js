var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    title:{type:String, required:'{PATH} is required!'},
    imgPath:[String],
    q_msg:{type:String},
    q_answ:{type:String},
    q_xdtl:{type:String},
    fired:{type:Boolean, default:false}
});

var Question = mongoose.model('Question', questionSchema, 'questions');

exports.Question = Question;