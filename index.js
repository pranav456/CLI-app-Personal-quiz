var readlinesync = require("readline-sync");
var userAnswer = readlinesync.question("Hello, May I know your name? ");
console.log("NAMASTE! " + userAnswer);

var score = 0;
function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer.toLocaleLowerCase() === answer) {
    console.log("You got it right!");
    score = score + 1;
  } else console.log("You got it wrong");
}
var arr = [
  { question: "Where do I live? ", answer: "bengaluru" },
  { question: "In which locality do I stay? ", answer: "ags layout" },
  { question: "Where did I complete my engineering ?", answer: "jssate" },
  {
    question: "What do I like to eat?",
    answer: "dosa",
  },
  { question: "Where do I work ?", answer: "l & t Technology services" },
];

for (var i = 0; i < arr.length; i++) {
  var query = arr[i];
  play(query.question, query.answer);
}

// play("Where do I live? ","Bengaluru")
// play("Where did I complete my engineering? ","JSSATE")
console.log("Your final score is:" + score);
