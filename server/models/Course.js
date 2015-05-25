var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]	
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses(){
  Course.find({}).exec(function(err, collection){
    if(collection.length === 0){
      Course.create({title: 'Here\'s a course', featured: true, published: new Date()});
    }
  });
}

exports.createDefaultCourses = createDefaultCourses;
