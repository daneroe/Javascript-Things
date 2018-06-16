function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;                      //"counter variable"

while ( counter < 10 ) {              //Loop condition
var randNumber = randomNumber(6);     //Code to excecute
document.write(randNumber + " ");     //"             "
counter += 1;                         //Add to counter each excecution
}
