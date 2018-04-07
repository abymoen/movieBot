var Twitter = require('twitter');
var fs = require('fs')

var client = new Twitter({
  consumer_key: 	'u7ixBOUyOXbSShA8Kf6qyq7u8',
  consumer_secret: '5KXfd66foF128Arr5ZpJsRKGTjBtHhE6bUmELjuXDjIuqI5MXu',
  access_token_key: 	'959108397718106112-uYjAM3rlhxtSZNTg69gabEjjmGRtxOY',
  access_token_secret: 'X5B7XGNwBN0oMccXNEq9akiv8qJ8z4HdggYGlVRcRkkWR'
});

client.get('search/tweets.json?q=Pacific%20Rim&geocode=51.027664%2C-114.04977719891315%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoCalgary/PacificRim.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Pacific Rim json Calgary written");
  });
});

client.get('search/tweets.json?q=Black%20Panther&geocode=51.027664%2C-114.04977719891315%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoCalgary/BlackPanther.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Black Panther json Calgary written");
  });
});

client.get('search/tweets.json?q=I%20Can%20Only%20Imagine&geocode=51.027664%2C-114.04977719891315%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoCalgary/OnlyImagine.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("I can only Imagone json Calgary written");
  });
});

client.get('search/tweets.json?q=Ready%20Player%20One&geocode=51.027664%2C-114.04977719891315%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoCalgary/ReadyPlayerOne.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Ready Player One json Calgary written");
  });
});

client.get('search/tweets.json?q=Acrimony&geocode=51.027664%2C-114.04977719891315%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoCalgary/Acrimony.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Acrimony json Calgary written");
  });
});


// --------------------------------- Portland ---------------------------------

client.get('search/tweets.json?q=Pacific%20Rim&geocode=45.536401749999996%2C-122.60732213490436%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoPortland/PacificRim.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Pacific Rim json Portland written");
  });
});

client.get('search/tweets.json?q=Black%20Panther&geocode=45.536401749999996%2C-122.60732213490436%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoPortland/BlackPanther.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Black Panther json Portland written");
  });
});

client.get('search/tweets.json?q=I%20Can%20Only%20Imagine&geocode=45.536401749999996%2C-122.60732213490436%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoPortland/OnlyImagine.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("I can only Imagone json Portland written");
  });
});

client.get('search/tweets.json?q=Ready%20Player%20One&geocode=45.536401749999996%2C-122.60732213490436%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoPortland/ReadyPlayerOne.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Ready Player One json Portland written");
  });
});

client.get('search/tweets.json?q=Acrimony&geocode=45.536401749999996%2C-122.60732213490436%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoPortland/Acrimony.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Acrimony json Portland written");
  });
});

// --------------------------------- Toronto ---------------------------------

client.get('search/tweets.json?q=Pacific%20Rim&geocode=43.629311%2C-79.27828265214646%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoToronto/PacificRim.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Pacific Rim json Toronto written");
  });
});

client.get('search/tweets.json?q=Black%20Panther&geocode=43.629311%2C-79.27828265214646%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoToronto/BlackPanther.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Black Panther json Toronto written");
  });
});

client.get('search/tweets.json?q=I%20Can%20Only%20Imagine&geocode=43.629311%2C-79.27828265214646%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoToronto/OnlyImagine.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("I can only Imagone json Toronto written");
  });
});

client.get('search/tweets.json?q=Ready%20Player%20One&geocode=43.629311%2C-79.27828265214646%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoToronto/ReadyPlayerOne.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Ready Player One json Toronto written");
  });
});

client.get('search/tweets.json?q=Acrimony&geocode=43.629311%2C-79.27828265214646%2C50km&count=500&modules=status&result_type=recent&pc=false&ui_lang=en-US&cards_platform=Web-13&include_entities=1&include_user_entities=1&include_cards=1&send_error_codes=1&tweet_mode=extended', {}, function(error, tweets, response) {
  fs.writeFile("WeekTwoToronto/Acrimony.json",JSON.stringify(tweets), function(err) {
    if(err) return console.log(err);
    console.log("Acrimony json Toronto written");
  });
});
