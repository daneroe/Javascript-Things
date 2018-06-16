// Declare questions in variable array
var questionList = [
  ["How many states are there in the united states?", 50],
  ["How many continents are there?", 7],
  ['How many legs does an insect have?', 6]
];

//Declare other storage variables
var correct = 0;
var incorrect = 0;
var correctList = [];
var incorrectList = [];
var response;
var answer;
var question;

//Variable for all of our HTML
var html;

//Function which iterates through an array and generates an HTML ordered list.
//Returns a value so it can be "Printed"
function buildlist(arr) {
  var listHtml = '<ol>'

  for (i = 0; i < arr.length; i +=1) {
    listHtml += '<li>' + arr[i] + '</li>';
  }
  listHtml += '</ol>'
  return listHtml;

}
//Function which displays/prints dynamic content to HTML page (output DIV)
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

/*
Promt user to answer all questions in array,
one-by-one, presenting only the questions/first index (i.e. '[i][0]').
Add the indiviual questions from array into a variable which stores it for
comparison in the "if" statement.

*** DONT FORGET TO USE 'parseInt' IF USING NUMBERS ***
*/

for (i = 0; i < questionList.length; i +=1) {
  question = questionList[i][0];
  answer = questionList[i][1];
  response = prompt(question);

  if (parseInt(response) === answer) {
    correct += 1;
    correctList.push(question);
  }

  if (parseInt(response) !== answer) {
    incorrect += 1;
    incorrectList.push(question);
  }
}

//Additional HTML for lists
html = '<h2>You got these questions right</h2>'
html += buildlist(correctList)
html += '<h2>You got these questions wrong</h2>'
html += buildlist(incorrectList)

console.log(correct);
console.log(incorrect);

print(html)
