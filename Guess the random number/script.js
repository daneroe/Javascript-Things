/*
A simple random number guessing game.
Based on lessons from treehouse.com.
*/

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

console.log("first guess is " + guess);

if ( parseInt(guess) === randomNumber ) {
  correctGuess = true;
}
//Else if for HIGHER guess
else if ( parseInt(guess) > randomNumber ) {

  var highGuess = prompt('Try again, Your guess was HIGHER than the correct number!');
  console.log("second Guess is " + highGuess);

  if (parseInt(highGuess) === randomNumber ) {
  correctGuess = true;
  }

}

//Else if for LOWER guess
else if ( parseInt(guess) < randomNumber ) {

  var lowGuess = prompt('Try again, Your guess was LOWER than the correct number!');
  console.log("second Guess is " + highGuess);

  if (parseInt(lowGuess) === randomNumber ) {
  correctGuess = true;
  }

}

//True and False Response
if (correctGuess) {
document.write("<p>Well done! You picked the correct number!!!</p>")
}

else {
document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');

}
