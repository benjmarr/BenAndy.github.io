// Copyright Benjamin (c) 2015 - All rights reserved

console.log("numbers.js file loaded\nCopyright Benjamin (c) 2015 - All rights reserved");

var initload = setInterval(function() {
  clearInterval(initload);
  document.title = "Numbers (Use F11)";
  document.getElementById("x").innerHTML = "<div id='sideBar'>filler</div><div id='xI'>> Loading program...</div>";

  var I = setInterval(function() {
    clearInterval(I);
    document.getElementById("xI").innerHTML = "> Loading program...<br><br>> Please wait!";

    var II = setInterval(function() {
      clearInterval(II);
      document.getElementById("xI").innerHTML = "> Loading complete!";

      var III = setInterval(function() {
        clearInterval(III);
        document.getElementById("xI").innerHTML = "> Accessing root files...<br><br>> Please wait...";
      }, 1000);
    }, 5000);
  }, 2000);
}, 10);
