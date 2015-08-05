// Copyright Benjamin (c) 2015 - All rights reserved

console.log("numbers.js file loaded\nCopyright Benjamin (c) 2015 - All rights reserved");

var initload = setInterval(function() {
  clearInterval(initload);
  document.title = "Numbers (Use F11)";
  document.getElementById("x").innerHTML = "<div id='sideBar'>test</div><div id='xI'>> Loading program...</div>";

  var programLoad = setInterval(function() {
    clearInterval(programLoad);
  }, 100);
}, 10);
