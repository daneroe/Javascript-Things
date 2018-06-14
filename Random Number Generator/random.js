var min = parseInt(prompt("please enter a random number:"));

var max = parseInt(prompt("please enter a second random number:"));


console.log(min, max);

function randomiser(min, max) {

   return Math.floor( Math.random() * (max - min) + min);

}

var randNum = randomiser(min, max);

console.log(randNum);

alert("your random number is " + randNum);
