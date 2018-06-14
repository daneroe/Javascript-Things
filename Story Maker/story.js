var questions = 3;
var questionsLeft = '[ ' + questions + ' Questions Left]';

var noun = prompt("please enter a noun " + questionsLeft);
questions -= 1;
questionsLeft = '[ ' + questions + ' Questions Left]';

var adjective = prompt("Please enter an adjective " + questionsLeft);
questions -= 1;
questionsLeft = '[ ' + questions + ' Questions Left]';

var verb = prompt("Please enter a verb " + questionsLeft);
questions -= 1;


alert("all done!, read your story below.");

var story = "The " + noun + " was acting " + adjective + " and went for a " + verb +".";

console.log(noun, adjective, verb);

document.write(story);
