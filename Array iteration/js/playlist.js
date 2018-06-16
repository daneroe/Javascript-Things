var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
  }

/*
Creates a loop which iterates through an array and for each element therof,
adds a tag to the HTML page displaying the element in an ordered list.
*/

function printList( array ) {
  var listHTML = '<ol>';

    for (var i = 0; i < array.length; i += 1) {
    listHTML += '<li>' + array[i] + '</li>'
    }
  listHTML += '<ol>';
  print(listHTML);
}

printList(playList);
