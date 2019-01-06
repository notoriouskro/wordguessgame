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

document.getElementById('lettersGuessed').innerHTML = lettersGuessed;

document.addEventListener('keyup', function (){
console.log('you pressed a button')
console.log(letterGuess);
console.log(lettersGuessed);

if (guessesRemain > 0){
    console.log(guessesRemain);
    guessesRemain--
    document.getElementById('remainingGuesses').innerHTML = guessesRemain;
    
    
} if (event.key == randomLetter){

wins++
console.log(wins);
document.getElementById('gamesWon').innerHTML = wins;

} if (guessesRemain == 0) {
  
alert('You Lose!')
losses++
console.log(losses)
document.getElementById('gamesLost').innerHTML = losses;

}





});