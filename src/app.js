var jquery = require('jquery');
var jservice = require('./jservice');

console.log('neato, Trebek!');

jservice.generateBoard(function(category, clues) {
  jquery("header").append("<h1>"+category.title+"</h1>");

  jservice.getClue(category, 100);

  jquery.each(clues, function(i) {
    var clue = clues[i];
    jquery("header").append("<p>"+i+":::"+clue.question+":::"+clue.answer+"</p>");
  });
});

var Jeopardy = require('./jeopardy')
jeopardy = new Jeopardy("https://moose-bandits.firebaseio.com/")

jeopardy.createGame(function(err, gameId){
  jeopardy.initDashboard(gameId, function(err, dashboard){
    if(err) { console.log(err); return}
    console.log(dashboard.gameId)
  });
});

