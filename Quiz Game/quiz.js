//Declare required variables
var remainingQuestions = 4;
var correctGuessTally = 0;

var questionOne = (prompt("Name the world's largest ocean. "
  + [remainingQuestions + " questions left."])); //Pacific
remainingQuestions -= 1;

var questionTwo = (prompt("What is the world's longest river? "
  + [remainingQuestions + " questions left."])); //Amazon
remainingQuestions -= 1;

var questionThree = (prompt("Name the world's biggest island "
  + [remainingQuestions + " questions left."])); //Greenland
remainingQuestions -= 1;

var questionFour = (prompt("What is the capital city of Spain? "
  + [remainingQuestions + " questions left."])); //Madrid
remainingQuestions -= 1;

var questionFive =
  (prompt("Which American state begins with the letter 'p'?")); //Pennsylvania
remainingQuestions -= 1;


//Record Correct Answers
if (questionOne.toUpperCase() === "PACIFIC") {
correctGuessTally += 1;
}

if (questionTwo.toUpperCase() === "AMAZON") {
correctGuessTally += 1;
}

if (questionThree.toUpperCase() === "GREENLAND") {
correctGuessTally += 1;
}

if (questionFour.toUpperCase() === "MADRID") {
correctGuessTally += 1;
}

if (questionFive.toUpperCase() === "PENNSYLVANIA") {
correctGuessTally += 1;
}

console.log(correctGuessTally);

//Display results
document.write
  ("<p>All done!, you got " + correctGuessTally + " questions right</p>");


//Display rank
if ((correctGuessTally == 1 ) || (correctGuessTally == 2 )) {
document.write ("<p>You earned a BRONZE badge</p>")
}

else if ((correctGuessTally == 3) || (correctGuessTally == 4 )){
document.write ("<p>You earned a SILVER badge</p>")
}

else if (correctGuessTally == 5) {
document.write ("<p>You earned a GOLD badge. Well Done!</p>")
}
