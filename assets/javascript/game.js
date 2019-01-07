var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i" , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemain = 9;
var lettersGuessed = [];
var letterGuess = null;
var randomLetter = "";


function getLetter(){

var logLetter = alpha[Math.floor(Math.random()*alpha.length)];
console.log(logLetter);
return logLetter;

}




document.getElementById('lettersGuessed').innerHTML = lettersGuessed;

document.addEventListener('keyup', function (event){
console.log('you pressed a button')

// if {



// }
if (guessesRemain > 0){
    
    guessesRemain--;
    document.getElementById('remainingGuesses').innerHTML = guessesRemain;
    console.log(guessesRemain);
    
    
    var ltrcse = event.key;
    ltrcse = ltrcse.toLowerCase(ltrcse);
    
    lettersGuessed.push(ltrcse);

    document.getElementById('lettersGuessed').innerText = lettersGuessed;
    
    
    
} if (event.key === randomLetter){

wins++;
console.log(wins);
document.getElementById('gamesWon').innerHTML = wins;
startOver();

} if (guessesRemain === 0) {
  
alert('You Lose! Click ok to play again.')
losses++;
console.log(losses);
document.getElementById('gamesLost').innerHTML = losses;
startOver();

}
});

document.getElementById("btn").onclick = function() {startOver()};

function startOver(){
    guesses = 9;
    guessesRemain = 9;
    lettersGuessed = [];
    document.getElementById('remainingGuesses').innerHTML = guessesRemain;
    document.getElementById('lettersGuessed').innerText = "";
    randomLetter = getLetter();
    keybaord = prompt();

};