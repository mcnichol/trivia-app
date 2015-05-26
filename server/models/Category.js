 var mongoose = require('mongoose');
 
var categorySchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String],
  desc: {type:String, required:'{PATH} is required!'},
  exampImgBase:String,
  exampImg:[{img:String, desc:String}]
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
        desc:'Test your skills at recognizing where some of these Landmarks are located in the world.  Points will be awarded for accurately namuing the Landmark (within reason), the location of the landamrks (by city/country), or any other worthy facts.  Be the first to buzz in to give your team control...the more you know, the more points you\'ll be bombarded with!',
        exampImgBase: '/trivia_content/geography/thats_a_landmark',
        exampImg:[{
	  img:'/great-pyramid.jpg',
	  desc:'If you were to have guessed The Great Pyramids, you would have gotten a point.  Had you gone further and said it was one of the 7 Wonders of the Ancient World located in Giza, Egypt I would have thrown a ton of points your way, and a slow handclap...'}, {
          img:'/acropolis.jpg', 
	  desc:'If you had guessed that this was the Acropolis in Athens, Greece...well, I\'d be quite impressed.  Had you added in that it\'s name translates to "edge"(acro) "city"(opolis) and was a monument to Athena, the cities matron deity and goddess of wisdom, courage, inspiration....I\'d tell you to get off your phone and stop googling the answers.'
        }]
      });

      Category.create({
        title: 'What are you Holding? - A Movie Adventure [Grocery Edition]', 
	featured: true, 
	published: new Date(), 
	tags:['movie','pictures'],
	desc:'Alright Cinephile\'s (you know who you are!), this is your chance to shine!  Let\'s see how good you are at recognizing the objects held in these popular movies which have been so conveniently replaced with items you might find in your local grocery store.',
        exampImgBase: '/trivia_content/movie/what_you_holding__grocery',
	exampImg:[{
	  img:'/great-gatsby_q.jpg',
	  desc:'Give it your best and earn some points taking a stab at these flicks.  The goal for this event is to try and guess what these hollywood stars are holding in their hands.  Now what could Leo be possibly holding on this fancy occassion?'},{
	  img:'/great-gatsby_answ.jpg',
	  desc:'If you said "A Cocktail Glass!", well then by golly you got it correct.  Give yourself a round of applause, because that\'s all you\'re getting for this one...  '
        }]
      });

      Category.create({
        title: 'Read me a Song... - A Decade at a Time',
	featured: 'true',
	published: new Date(),
	tags:['music'],
	desc:'With the soothing sounds of your Trivia Host, enjoy as you are read the songs, some obscure, some less so.  Be prepared to traverse the decades and test your lyrical prowess in these hit numbers.',
        exampImgBase: '/trivia_content/audio/read_me_a_song',
        exampImg:[{
	  img:'/example-one-republic.jpg',
	  desc:'Take a moment to gather your marbles.  If you were able to guess the One Republic song Counting Stars, good on you. It\'s only going to get better once I read these off to you, and by better I mean worse...much worse. '},{
	  img:'/example-reo-speedwagon.jpg',
	  desc:'We went a little farther back on this one. REO Speedwagons "Can\'t Fight This Feeling".  One of their number one hits from a band that made it big from Chicago in the 80\'s having burned through close to 20 different band members.  Talk about a battle of attrition!'
        }]	  
      });

      Category.create({	
        title: 'Reading Between The Lines - A Visual Brainteaser', 
	featured: true, 
	published: new Date(), 
	tags:['brainteaser','pictures'],
	desc:'What\'s a brainteaser you ask?  In this event you will be shown a picture.  This picture will actually depict a common saying, word, noun, etc.  Guess the answer before your opponent\'s to show your clear superiority (playful banter expected and will be rewarded with gratuitous extra points....even if you didn\'t buzz in first!).  Drop those dumbbells and come give your brain a workout.',
	exampImgBase: '/trivia_content/brainteaser/word_teasers',
	exampImg:[{
	  img:'/brainteaser_0001.jpg',
	  desc:'These ones are slightly tricky...some feel completely impossible.  The answer to this one is Man Overboard.  A majority you will find will literally hide the answer by merely describing what you see.  Add in some competition and we\'ll have ourselves an exciting night of trivia.'},{
	  img:'/brainteaser_0002.jpg',
	  desc:'This one was significantly trickier.  Instead of starting with what they have given you, what else could the word be?  If you were able to guess Scrambled Eggs, congratulations!  You are quicker than most.  Now that you\'ve got the hang of it, you\'ll only need to keep yourself thinking outside of the box.'
        }]
      });

      Category.create({	
        title: 'Why You Tricky Little... - [It\'s a Trap!]', 
	featured: true, 
	published: new Date(), 
	tags:['tricky','questions'],
	desc:'As you justifiably guessed, there will be shananigans.  Let\'s see how you fare on these intentionally tricky questions.  For this bonus category, You could potentially get points just for being creative and clever....  Unless you are a wunderkind...you don\'t stand a chance.',
	exampImgBase: '/trivia_content/brainteaser/trick_question',
	exampImg:[{
	  img:'/question.jpg',
	  desc:'You aren\'t getting any help from me on this one.  My lips are are sealed.'
	}]
      });
    }
  });
}
 
exports.createDefaultCategories = createDefaultCategories;
