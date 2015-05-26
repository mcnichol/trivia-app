var mongoose = require('mongoose');
 
var categorySchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String],
  desc: {type:String, required:'{PATH} is required!'} 
});
var Category = mongoose.model('Category', categorySchema, 'categories');

function createDefaultCategories(){
  Category.find({}).exec(function(err, collection){
    if(collection.length === 0){
    
      Category.create({	
        title: 'That\'s a Landmark! - A Journey Around the World', 
	featured: true, 
	published: new Date(), 
	tags:['landmarks','pictures'],
        desc:'Test your skills at recognizing where some of these Landmarks are located in the world.  Points will be awarded for accurately namuing the Landmark (within reason), the location of the landamrks (by city/country), or any other worthy facts.  Be the first to buzz in to give your team control...the more you know, the more points you\'ll be bombarded with!'	      
      });

      Category.create({
        title: 'What are you Holding? - A Movie Adventure [Grocery Edition]', 
	featured: true, 
	published: new Date(), 
	tags:['movie','pictures'],
	desc:'Alright Cinephile\'s (you know who you are!), this is your chance to shine!  Let\'s see how good you are at recognizing the objects held in these popular movies which have been so conveniently replaced with items you might find in your local grocery store.'
      });

      Category.create({
        title: 'Read me a Song... - A Decade at a Time',
	featured: 'true',
	published: new Date(),
	tags:['music'],
	desc:'With the soothing sounds of your Trivia Host, enjoy as you are read the songs, some obscure, some less so.  Be prepared to traverse the decades and test your lyrical prowess in these hit songs.'
      });

      Category.create({	
        title: 'Reading Between The Lines - A Visual Brainteaser', 
	featured: true, 
	published: new Date(), 
	tags:['brainteaser','pictures'],
	desc:'What\'s a brainteaser you ask?  In this event you will be shown a picture.  This picture will actually depict a common saying, word, noun, etc.  Guess the answer before your opponent\'s to show your clear superiority (playful banter expected and will be rewarded with gratuitous extra points....even if you didn\'t buzz in first!).  Drop those dumbbells and come give your brain a workout.'
      });

      Category.create({	
        title: 'Why You Tricky Little... - [It\'s a Trap!]', 
	featured: true, 
	published: new Date(), 
	tags:['tricky','questions'],
	desc:'As you justifiably guessed, there will be shananigans.  Let\'s see how you fare on these intentionally tricky questions.  For this bonus category, You could potentially get points just for being creative and clever....  Unless you are a wunderkind...you don\'t stand a chance.'
      });
    }
  });
}
 
exports.createDefaultCategories = createDefaultCategories;
