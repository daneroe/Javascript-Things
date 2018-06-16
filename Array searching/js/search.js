
//Array variable
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread',
'lettuce', 'carrot','broccoli', 'pizza', 'potato', 'crackers', 'onion',
'tofu', 'frozen dinner', 'cucumber'];

//Variable to store user input
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

/*
Prompts for user input, tests to see if 'search' string matches string in
array. Returns index value, tests to see if greater than -1.
(ie. any item contained in Index will have a value greater than [-1],
as the index of an array begins at [0].)
*/

function searchStore () {

  while (true) {

  search = prompt("Search for an item or product in our store. Type 'list' to show all of the produce and 'quit' to exit")
  search = search.toLowerCase();

  if ( search === "quit" ) {
    break;
  } else if (search === "list") {
      print( inStock.join(', ') );
      break;
  } else {
      if ( inStock.indexOf(search) > -1 ) {
      print("Yes, we have product " + search + " in stock.");
      break;

    } else {
        print("Sorry, we do not have " + search + " in stock.")
        break;
    }
    }
  }
}

searchStore()
