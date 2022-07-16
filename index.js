var readlinesync = require("readline-sync");
var userAnswer = readlinesync.question("Hello, May I know your name? ");
console.log("NAMASTE! " + userAnswer);

var score = 0;
function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer === answer) {
    console.log("You got it right!");
    score = score + 1;
  } else console.log("You got it wrong");
}
var arr = [
  { question: "Where do I live? ", answer: "Bengaluru" },
  { question: "Where did I complete my engineering ?", answer: "JSSATE" },
  { question: "Where do I work ?", answer: "L & T Technology Services" },
];

for (var i = 0; i < arr.length; i++) {
  var query = arr[i];
  play(query.question, query.answer);
}

// play("Where do I live? ","Bengaluru")
// play("Where did I complete my engineering? ","JSSATE")
console.log("Your final score is:" + score);
