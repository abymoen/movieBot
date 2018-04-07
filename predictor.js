var fs = require("fs");

var movieDataCalgary = [];
var movieDataPortland = [];
var movieDataToronto = [];

fillData("WeekOneCalgary/BlackPantherStats.json", movieDataCalgary);
fillData("WeekOneCalgary/OnlyImagineStats.json", movieDataCalgary);
fillData("WeekOneCalgary/PacificRimStats.json", movieDataCalgary);
fillData("WeekOneCalgary/SherlockGnomesStats.json", movieDataCalgary);
fillData("WeekOneCalgary/TombRaiderStats.json", movieDataCalgary);

fillData("WeekOneToronto/BlackPantherStats.json", movieDataToronto);
fillData("WeekOneToronto/OnlyImagineStats.json", movieDataToronto);
fillData("WeekOneToronto/PacificRimStats.json", movieDataToronto);
fillData("WeekOneToronto/SherlockGnomesStats.json", movieDataToronto);
fillData("WeekOneToronto/TombRaiderStats.json", movieDataToronto);

fillData("WeekOnePortland/BlackPantherStats.json", movieDataPortland);
fillData("WeekOnePortland/OnlyImagineStats.json", movieDataPortland);
fillData("WeekOnePortland/PacificRimStats.json", movieDataPortland);
fillData("WeekOnePortland/SherlockGnomesStats.json", movieDataPortland);
fillData("WeekOnePortland/TombRaiderStats.json", movieDataPortland);


sortDataTPH(movieDataCalgary);
sortDataTPH(movieDataPortland);
sortDataTPH(movieDataToronto);

console.log("------ CALGARY ------");
for(i=0; i<movieDataCalgary.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " TPH: " + movieDataCalgary[i].tweets_per_hour);
}
console.log("");

console.log("------ TORONTO ------");
for(i=0; i<movieDataToronto.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " TPH: " + movieDataToronto[i].tweets_per_hour);
}
console.log("");

console.log("------ PORTLAND ------");
for(i=0; i<movieDataPortland.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " TPH: " + movieDataPortland[i].tweets_per_hour);
}
console.log("");

sortDataTFAV(movieDataCalgary);
sortDataTFAV(movieDataPortland);
sortDataTFAV(movieDataToronto);

console.log("------ CALGARY ------");
for(i=0; i<movieDataCalgary.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " FAV: " + movieDataCalgary[i].total_favorites);
}
console.log("");

console.log("------ TORONTO ------");
for(i=0; i<movieDataToronto.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " FAV: " + movieDataToronto[i].total_favorites);
}
console.log("");

console.log("------ PORTLAND ------");
for(i=0; i<movieDataPortland.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " FAV: " + movieDataPortland[i].total_favorites);
}
console.log("");

sortDataTFOL(movieDataCalgary);
sortDataTFOL(movieDataPortland);
sortDataTFOL(movieDataToronto);

console.log("------ CALGARY ------");
for(i=0; i<movieDataCalgary.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " FOL: " + movieDataCalgary[i].total_followers);
}
console.log("");

console.log("------ TORONTO ------");
for(i=0; i<movieDataToronto.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " FOL: " + movieDataToronto[i].total_followers);
}
console.log("");

console.log("------ PORTLAND ------");
for(i=0; i<movieDataPortland.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " FOL: " + movieDataPortland[i].total_followers);
}
console.log("");

sortDataTRT(movieDataCalgary);
sortDataTRT(movieDataPortland);
sortDataTRT(movieDataToronto);

console.log("------ CALGARY ------");
for(i=0; i<movieDataCalgary.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " RET: " + movieDataCalgary[i].total_retweets);
}
console.log("");

console.log("------ TORONTO ------");
for(i=0; i<movieDataToronto.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " RET: " + movieDataToronto[i].total_retweets);
}
console.log("");

console.log("------ PORTLAND ------");
for(i=0; i<movieDataPortland.length; i++) {
  console.log(movieDataCalgary[i].movie_title + " RET: " + movieDataPortland[i].total_retweets);
}
console.log("");

function fillData(fileName, arry) {
  let x = fs.readFileSync(fileName).toString();
  let dataJson = JSON.parse(x);
  arry.push(dataJson);
}

function sortDataTPH(arry) {
  arry.sort(function(a,b){
    return (b.tweets_per_hour - a.tweets_per_hour);
  });
}

function sortDataTFOL(arry) {
  arry.sort(function(a,b){
    return (b.total_followers - a.total_followers);
  });
}

function sortDataTFAV(arry) {
  arry.sort(function(a,b){
    return (b.total_favorites - a.total_favorites);
  });
}

function sortDataTRT(arry) {
  arry.sort(function(a,b){
    return (b.total_retweets - a.total_retweets);
  });
}
