var mongoose = require('mongoose'),
    Category = require('./Category');


var eventSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    scheduled: {type:Date, required:'{PATH} is required!'},
    shortDesc: {type:String, required:'{PATH} is required!'},
    longDesc: {type:String, required:'{PATH} is required!'},
    started: {type:Boolean},
    categories:[Category.Category.schema]
});



var Event = mongoose.model('Event', eventSchema, 'events');

function createDefaultEvents(){
    Event.find({}).exec(function(err, collection){
        if(collection.length === 0){
            Event.create({
                title: 'May ERC Event',
                scheduled: new Date('May 28, 2015'),
                shortDesc: 'ATSV ERC May Trivia Fun Night',
                longDesc:'Come join ATSV Employee Recognition Committee with a fun Trivia Night.  Multiple categories covering movies, music, and famous landmarks, you\'ll be sure to have a great time.',
                started:false,
                categories:[{
                    title: 'That\'s a Landmark! - A Journey Around the World',
                    featured: true,
                    published: new Date(),
                    tags:['landmarks','pictures'],
                    desc:'Test your skills at recognizing where some of these Landmarks are located in the world.  Points will be awarded for accurately namuing the Landmark (within reason), the location of the landamrks (by city/country), or any other worthy facts.  Be the first to buzz in to give your team control...the more you know, the more points you\'ll be bombarded with!',
                    exampImgBase: '/trivia_content/geography/thats_a_landmark',
                    exampImg:[{
                        img:'/great-pyramid.jpg', desc:'If you were to have guessed The Great Pyramids, you would have gotten a point.  Had you gone further and said it was one of the 7 Wonders of the Ancient World located in Giza, Egypt I would have thrown a ton of points your way, and a slow handclap...'}, {
                        img:'/acropolis.jpg', desc:'If you had guessed that this was the Acropolis in Athens, Greece...well, I\'d be quite impressed.  Had you added in that it\'s name translates to "edge"(acro) "city"(opolis) and was a monument to Athena, the cities matron deity and goddess of wisdom, courage, inspiration....I\'d tell you to get off your phone and stop googling the answers.'
                    }],
                    questions:[{
                        title:'Good Gods Where Are We?',
                        imgPath:['acropolis.jpg'],
                        q_msg:'Ancient Grounds and one of the 7 Wonders....and it has nothing to do with Grease Lightning',
                        q_answ:'The Parthenon',
                        q_xdtl:'Located in Athens, Greece.  This temple dedicated to the patron saint of her city primarily served as a treasury, among other things.',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Wat in the World?',
                        imgPath:['angkor-wat.jpg'],
                        q_msg:'One of the largest religious monuments in the world.',
                        q_answ:'Ankgor-Wat',
                        q_xdtl:'Found in Cambodia, this ancient temple is still in use today by buddhists, stretching out over 248 square miles!',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Do you have the time sir?',
                        imgPath:['big-ben.jpg'],
                        q_msg:'Well....it\'s a big clcok....and it probably has a name to it.',
                        q_answ:'Big Ben',
                        q_xdtl:'The tower is actually simply named, "The Clock Tower".  The name Big Ben comes from the names of one of the largest bells in the tower.  ',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'The Buck Stops Here....',
                        imgPath:['buckingham-palace.jpg'],
                        q_msg:'Well that doesn\'t look like the United States...',
                        q_answ:'Buckingham Palace',
                        q_xdtl:'Home to Britains Monarchs since 1837, this Palace sports 775 Rooms and 760 windows....Hey spring cleaning, good luck with that.',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Are you not Entertained?',
                        imgPath:['colisseum.jpg'],
                        q_msg:'No Superbowl Dome will ever compare.',
                        q_answ:'The Colosseum',
                        q_xdtl:'Found in Rome, Italy, the Colosseum is sad to have been the platform where over 500,000 people lost their lives.',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Now That\'s a Tower',
                        imgPath:['eiffel-tower.jpg'],
                        q_msg:'Can you guess this one?',
                        q_answ:'The Eiffel Tower',
                        q_xdtl:'Did you know it gets about 50 tonnes of new paint every seven years to protect it from rust?',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Sleepless in Seattle Anyone?',
                        imgPath:['empire-state-building.jpg'],
                        q_msg:'You may remember King Kong had climbed this in the movies',
                        q_answ:'The Empire State Building',
                        q_xdtl:'The Empire State Building found in New York attracts over 4 million visitors a year, and get\'s struck by lightning over 100 times as well. ',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Well check that out',
                        imgPath:['forbidden-city.jpg'],
                        q_msg:'Home to one of the biggest museums in the world.',
                        q_answ:'The Forbidden City',
                        q_xdtl:'Housing 9,999 rooms, the Forbidden City is a main attraction to people visiting Beijing, China.',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Here\'s an easy one',
                        imgPath:['golden-gate-bridge.jpg'],
                        q_msg:'Bonus points if you can name the TV Show that opened up to a scene of this.',
                        q_answ:'The Golden Gate Bridge',
                        q_xdtl:'Not intended to have it\'s iconic red color to be permanent, it turned out to be more pleasing than the typical blacks and greys',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Isn\'t that Great',
                        imgPath:['great-pyramid.jpg'],
                        q_msg:'Possibly one of the most well known structures out there.',
                        q_answ:'The Great Pyramids',
                        q_xdtl:'Often Pharaohs were bureied in these tombs with many of their treausres, making them susceptible to grave robers',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Architectural uhhh Masterpiece... ',
                        imgPath:['leaning-tower.jpg'],
                        q_msg:'Blame it on the soft soil',
                        q_answ:'Leaning Tower of Pisa',
                        q_xdtl:'Believe it or not, this tower is actually a bell tower.',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'How about this one...',
                        imgPath:['notre-dame.jpg'],
                        q_msg:'Still holding religious services to this day...',
                        q_answ:'Notre Dame Cathedral',
                        q_xdtl:'Although built of stone, an estimated 1,300 trees were also used in the Cathedrals Contstruction',
                        fired:{type:Boolean, default:false}
                    },{/*
                        title:'',
                        imgPath:['sistine-chapel.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'',
                        imgPath:['space-needle.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'',
                        imgPath:['statue-liberty.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'',
                        imgPath:['stonehenge.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'',
                        imgPath:['sydney-opera-house.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'',
                        imgPath:['taj-mahal.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'',
                        imgPath:['white-house.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{*/
                        title:'Here\s a hint, it\'s a Cathedral.',
                        imgPath:['cologne-cathedral.jpg'],
                        q_msg:'Where might you go to see the tallest building of Gothic Architecture',
                        q_answ:'Cologne Cathedral',
                        q_xdtl:'Located in Germany near the Rhine River, this Cathedral took over 632 years to complete construction.  Talk about extending a project deadline.',
                        fired:{type:Boolean, default:false}
                    }]
                },{
                    title: 'What are you Holding? - A Movie Adventure [Grocery Edition]',
                    featured: true,
                    published: new Date(),
                    tags:['movie','pictures'],
                    desc:'Alright Cinephile\'s (you know who you are!), this is your chance to shine!  Let\'s see how good you are at recognizing the objects held in these popular movies which have been so conveniently replaced with items you might find in your local grocery store.',
                    exampImgBase: '/trivia_content/movie/what_you_holding__grocery',
                    exampImg:[{
                        img:'/great-gatsby_q.jpg', desc:'Give it your best and earn some points taking a stab at these flicks.  The goal for this event is to try and guess what these hollywood stars are holding in their hands.  Now what could Leo be possibly holding on this fancy occassion?'},{
                        img:'/great-gatsby_answ.jpg', desc:'If you said "A Cocktail Glass!", well then by golly you got it correct.  Give yourself a round of applause, because that\'s all you\'re getting for this one...  '
                    }],
                    questions:[{
                        title:'What am I Holding?',
                        imgPath:['dark-knight_q.jpg'],
                        q_msg:'Why so serious?',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'...A Card!',
                        imgPath:['dark-knight_answ.jpg'],
                        q_msg:'A joker card from none other than the joker himself!',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'What am I Holding?',
                        imgPath:['dr-strangelove_q.jpg'],
                        q_msg:'There\'s no fighting in the war room!',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: '...A Telephone',
                        imgPath: ['dr-strangelove_answ.jpg'],
                        q_msg: 'Sure enough, it wasn\'t really an eggplant.',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'What Am I Holding',
                        imgPath:['great-gatsby_q.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'A Cocktail Glass',
                        imgPath: ['great-gatsby_answ.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'What Am I Holding?',
                        imgPath:['terminator_q.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'A Handgun',
                        imgPath: ['terminator_answ.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'What Am I Holding?',
                        imgPath:['indiana-jones_q.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'A Bullwhip',
                        imgPath: ['indiana-jones_answ.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'What Am I Holding?',
                        imgPath:['jurassic-park_q.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'A Road Flare',
                        imgPath: ['jurassic-park_answ.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'What Am I Holding?',
                        imgPath:['say-anything_q.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'A Boombox',
                        imgPath: ['say-anything_answ.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'What Am I Holding?',
                        imgPath:['the-avengers_q.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Weapons!',
                        imgPath: ['the-avengers_answ.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'What Am I Holding?',
                        imgPath:['wall-e_q.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'A Rubics Cube',
                        imgPath: ['wall-e_answ.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    }]
                },{
                    title: 'Read me a Song... - A Decade at a Time',
                    featured: 'true',
                    published: new Date(),
                    tags:['music'],
                    desc:'With the soothing sounds of your Trivia Host, enjoy as you are read the songs, some obscure, some less so.  Be prepared to traverse the decades and test your lyrical prowess in these hit numbers.',
                    exampImgBase: '/trivia_content/audio/read_me_a_song',
                    exampImg:[{
                        img:'/example-one-republic.jpg', desc:'Take a moment to gather your marbles.  If you were able to guess the One Republic song Counting Stars, good on you. It\'s only going to get better once I read these off to you, and by better I mean worse...much worse. '},{
                        img:'/example-reo-speedwagon.jpg', desc:'We went a little farther back on this one. REO Speedwagons "Can\'t Fight This Feeling".  One of their number one hits from a band that made it big from Chicago in the 80\'s having burned through close to 20 different band members.  Talk about a battle of attrition!'
                    }],
                    questions:[{
                        title:'Read Me a Song',
                        imgPath:['musicnote.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }]
                },{
                    title: 'Reading Between The Lines - A Visual Brainteaser',
                    featured: true,
                    published: new Date(),
                    tags:['brainteaser','pictures'],
                    desc:'What\'s a brainteaser you ask?  In this event you will be shown a picture.  This picture will actually depict a common saying, word, noun, etc.  Guess the answer before your opponent\'s to show your clear superiority (playful banter expected and will be rewarded with gratuitous extra points....even if you didn\'t buzz in first!).  Drop those dumbbells and come give your brain a workout.',
                    exampImgBase: '/trivia_content/brainteaser/word_teasers',
                    exampImg:[{
                        img:'/brainteaser_0001.jpg', desc:'These ones are slightly tricky...some feel completely impossible.  The answer to this one is Man Overboard.  A majority you will find will literally hide the answer by merely describing what you see.  Add in some competition and we\'ll have ourselves an exciting night of trivia.'},{
                        img:'/brainteaser_0002.jpg', desc:'This one was significantly trickier.  Instead of starting with what they have given you, what else could the word be?  If you were able to guess Scrambled Eggs, congratulations!  You are quicker than most.  Now that you\'ve got the hang of it, you\'ll only need to keep yourself thinking outside of the box.'
                    }],
                    questions:[{
                        title:'Read Between The Lines?',
                        imgPath:['badinfluence.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Bad Influence',
                        imgPath:['badinfluence.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['bigfishinalittlepond.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Big Fish in a Little Pond',
                        imgPath: ['bigfishinalittlepond.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines',
                        imgPath:['blanket.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Blanket',
                        imgPath: ['blanket.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    }, {
                        title: 'Read Between the Lines',
                        imgPath: ['brainteaser_0001.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    }, {
                        title: 'Man Overboard',
                        imgPath: ['brainteaser_0001.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['brainteaser_0002.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Scrambled Egg',
                        imgPath: ['brainteaser_0002.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['brokenpromise.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Broken Promise',
                        imgPath: ['brokenpromise.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['downtown.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Down Town',
                        imgPath: ['downtown.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['growingeconomy.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Growing Economy',
                        imgPath: ['growingeconomy.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['historyrepeatsitself.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'History Repeats Itself',
                        imgPath: ['historyrepeatsitself.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['icecube.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Ice Cube',
                        imgPath: ['icecube.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['imbiggerthanyou.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'I\'m Bigger than You',
                        imgPath: ['imbiggerthanyou.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['iunderstand.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'I Understand',
                        imgPath: ['iunderstand.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['jackinabox.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Jack In a Box',
                        imgPath: ['jackinabox.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['justbetweenyouandme.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Just Between You and Me',
                        imgPath: ['justbetweenyouandme.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['lifeafter40.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Life After 40',
                        imgPath: ['lifeafter40.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['neonlights.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Neon Lights',
                        imgPath: ['neonlights.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['painlessoperation.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Painless Operation',
                        imgPath: ['painlessoperation.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['repeatafterme.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    },{
                        title:'Repeat After Me',
                        imgPath:['repeatafterme.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Read Between the Lines',
                        imgPath: ['threemusketeers.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    }, {
                        title: 'Three Musketeers',
                        imgPath: ['threemusketeers.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['tricycle.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Tricycle',
                        imgPath: ['tricycle.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    }, {
                        title: 'Read Between the Lines',
                        imgPath: ['squaremeal.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    }, {
                        title: 'Square Meal',
                        imgPath: ['squaremeal.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['sickinbed.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Sick in Bed',
                        imgPath: ['sickinbed.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false},
                    }, {
                        title: 'Read Between the Lines',
                        imgPath: ['safetyinnumbers.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    }, {
                        title: 'Safety in Numbers',
                        imgPath: ['safetyinnumbers.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    },{
                        title:'Read Between the Lines.',
                        imgPath:['rightbesideme.jpg'],
                        q_msg:'',
                        q_answ:'',
                        q_xdtl:'',
                        fired:{type:Boolean, default:false}
                    }, {
                        title: 'Right Beside Me',
                        imgPath: ['rightbesideme.jpg'],
                        q_msg: '',
                        q_answ: '',
                        q_xdtl: '',
                        fired: {type: Boolean, default: false}
                    }]
                }],

            });
        }
    });
}

exports.createDefaultEvents = createDefaultEvents;