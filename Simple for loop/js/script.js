var html = '';

/*
For loop structure;

for (declare variable; condition ; iterate variable) {
code to execute...
}

*/

for (var i = 1; i < 10; i += 1 ){
  html += "<div>" + i + "</div>";
}

document.write(html);
