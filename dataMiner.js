var fs = require('fs');

readData("WeekTwoCalgary/BlackPanther.json");
readData("WeekTwoCalgary/OnlyImagine.json");
readData("WeekTwoCalgary/PacificRim.json");
readData("WeekTwoCalgary/Acrimony.json");
readData("WeekTwoCalgary/ReadyPlayerOne.json");

readData("WeekTwoToronto/BlackPanther.json");
readData("WeekTwoToronto/OnlyImagine.json");
readData("WeekTwoToronto/PacificRim.json");
readData("WeekTwoToronto/Acrimony.json");
readData("WeekTwoToronto/ReadyPlayerOne.json");

readData("WeekTwoPortland/BlackPanther.json");
readData("WeekTwoPortland/OnlyImagine.json");
readData("WeekTwoPortland/PacificRim.json");
readData("WeekTwoPortland/Acrimony.json");
readData("WeekTwoPortland/ReadyPlayerOne.json");

function readData(fileName) {
  let movieTitle = getMovieTitle(fileName);
  let folder = getMovieFolder(fileName);
  let movieStats = {};
  fs.readFile(fileName, "utf8", function(err, data) {
    if(err) console.log(err);
    else {
      let dataJson = JSON.parse(data);
      let firstTime = (Date.parse(dataJson.statuses[dataJson.statuses.length-1].created_at));
      let lastTime = (Date.parse(dataJson.statuses[0].created_at));
      let totalTime = lastTime - firstTime;
      let hours = getTotalHours(totalTime);
      let totalFollowers = getTotalFollowers(dataJson);
      let totalFavorites = getTotalFavorites(dataJson);
      let totalRetweets = getTotalRetweets(dataJson);

      movieStats.movie_title = movieTitle;
      movieStats.totalTweets = dataJson.statuses.length;
      movieStats.tweets_per_hour = dataJson.statuses.length / hours;
      movieStats.total_followers = totalFollowers;
      movieStats.total_favorites = totalFavorites;
      movieStats.total_retweets = totalRetweets;

      fs.writeFile(folder + movieTitle + "Stats.json", JSON.stringify(movieStats), function(err) {
        if(err) return console.log(err);
      });
    }
  });
}

function getMovieTitle(fileName) {
  let x = fileName.split("/");
  let y = x[1].split(".");
  return y[0];
}

function getMovieFolder(fileName) {
  let x = fileName.split("/");
  return x[0] + "/";
}

function getTotalHours(time) {
  let x = 3600000;
  return (time/x);
}

function getTotalFollowers(json) {
  let count = 0;
  for(i=0; i<json.statuses.length; i++) {
    count += json.statuses[i].user.followers_count;
  }
  return count;
}

function getTotalRetweets(json){
  let count = 0;
  for(i=0; i<json.statuses.length; i++) {
    count += json.statuses[i].retweet_count;
  }
  return count;
}

function getTotalFavorites(json){
  let count = 0;
  for(i=0; i<json.statuses.length; i++) {
    count += json.statuses[i].favorite_count;
  }
  return count;
}
