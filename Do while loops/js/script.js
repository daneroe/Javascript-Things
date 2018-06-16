

//Declare necessary variables
var randomNumber = getRandomNumber(10);   //Random number between 1 > 10
var guess;                                //Stores player's guess
var guessCount = 0;                       //Tallies player guesses
var correctGuess = false;                 //Flag for correct answer

//Generates a random number
function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

/*
loops through each time player puts in a number. Once number matches,
flips "correctguess" flag to true.
*/
do {
  guess = prompt("please enter another number between 1 > 10");
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
  correctGuess = true;
  }
//Looks for "correctGuess" flag to be changed to true
} while ( ! correctGuess )
 document.write("You guessed right! It took you " + guessCount + " attempts.");
 document.write(" the correct number is " + randomNumber);
