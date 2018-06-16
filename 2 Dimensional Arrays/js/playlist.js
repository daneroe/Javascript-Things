var playList = [
  ['I did it my way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Imagine', 'John Lennon'],
  ['Born to Run', 'Bruce Springsteen'],
  ['Maybellene', 'Chuck Berry'],
  ['Louie Louie', 'The Kingsman']
];

function print(message) {
  document.write(message);
  }

/*
Creates a loop which iterates through an array and for each element therof,
adds a tag to the HTML page displaying the element in an ordered list.
*/

function printSongs( songs ) {
  var listHTML = '<ol>';

    for (var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>'
    }
  listHTML += '<ol>';
  print(listHTML);
}

printSongs(playList);
