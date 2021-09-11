var readlineSync = require('readline-sync');
var score = 0;
console.log('Welcome to Game Mission-Impossible !');
var userName = readlineSync.question('Enter your codename ');
console.log('welcome Mr. ' + userName + '!');


function endgame(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log('right');
    score = score + 1;

  }
  else {
    console.log('wrong');

  }
  console.log('current score : ' + score);
  console.log('=============');

}

// endgame('Enter your agency name','IMF');

var questions = [{
  question: "Enter ethan hunt's agency name ",
  answer: "IMF",
},
{
  question: "Enter IMF techincal field agent name? ",
  answer: "Benji",
},

{
  question: "Which american agency searching ethan? ",
  answer: "CIA",
}];

for (var i = 0; i < questions.length; i++) {
  var newQuestion = questions[i];

  endgame(newQuestion.question, newQuestion.answer);

}

console.log('your final score is : ' + score);