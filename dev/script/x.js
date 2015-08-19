console.log("Copyright Benjamin (c) 2015 - All rights reserved");

var number = setInterval(numbers,1);
var doc = document;
function numbers() {
  doc.getElementById("numbers").innerHTML = Math.random();
}
