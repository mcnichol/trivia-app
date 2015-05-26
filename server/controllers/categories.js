var Category = require('mongoose').model('Category');

exports.getCategories = function(req, res){
  Category.find({}).exec(function(err, collection){
    res.send(collection);
  })
};

exports.getCategoriesById = function(req, res) {
  Category.findOne({_id:req.params.id}).exec(function(err, category) {
    res.send(category);
  })
}
