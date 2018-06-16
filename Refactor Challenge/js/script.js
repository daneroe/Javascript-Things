
//Colour randomisation function
function randomiser (){
  var randomNumber = Math.floor(Math.random() * 256 );
  return randomNumber
}

//Put all original code into a function with a loop which runs 5 times.
function colouriser() {

  var html = '';
  var red;
  var green;
  var blue;
  var rgbColor;

  for (var i = 0; i < 4; i += 1) {
    red = randomiser();
    green = randomiser();
    blue = randomiser();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
    document.write(html);
    }
}

colouriser();
