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

document.addEventListener('keyup', function (){
console.log('you pressed a button')

if (guessesRemain < 0){
    console.log(guessesRemain);
    this.appendChild(letterGuessed)
    console.log(lettersGuessed)
    document.getElementById('gamesWon').innerHTML = '3' ;
} else if (event.key == randomLetter){

wins++
console.log(wins)

} else if (guessesRemain == 0) {
  
losses-- 
console.log(losses)

}





});