//Declare required variables
var randNumb = Math.floor( Math.random() * 6) + 1;
var guess = prompt("I'm thinking of a number between 1 and 6, what is it?");

//Return result
if (parseInt(guess) === randNumb) {
  
  document.write("<p> Well done! You guessed the correct number</p>");
  
}

else if (parseInt(guess) > 6) {
         
document.write("<p>Sorry, the number you entered was not between 1-6!</p>"); 
}

else {
  
  document.write("<p>Better luck next time, the number was " + randNumb);
  
}
