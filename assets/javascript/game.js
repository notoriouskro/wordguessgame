var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i" , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemain = 9;
var lettersGuessed = [];
var letterGuess = null;

var randomLetter =
alpha[Math.floor(Math.random()*alpha.length)]

console.log(randomLetter);


var leftUpdate = function() {

    document.querySelector("guessesRemain").innerHTML = 'Remaining guesses:' + guessesRemain;

};

var useThisLetter = function(){

    this.letterGuess = this.alpha[Math.floor(Math.random()*alpha.length)]

};

var lettersGuessedUpdate = function(){

    document.querySelector("#usedLetters").innerHTML = 'Incorrect Guesses: ' + lettersGuessed.appendChild(", ");

};

startOver = function(){
    guesses = 9;
    guessesRemain = 9;
    lettersGuessed = [];

    leftUpdate();
    useThisLetter();
    lettersGuessedUpdate();
};

if (guessesRemain > 0)
   if (useThisLetter == letterGuess) {
       alert("You win!");
       wins++;
       startOver();
   }
   else if(){
       alert("guess again");
   }

   else if (guessesRemain == 0){
    alert("You lose!");   
    losses++;
    startOver();
   }