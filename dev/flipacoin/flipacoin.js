// Copyright Benjamin (c) 2015 - All rights reserved

setTimeout(function() {
  document.getElementById("x").style.opacity = "1";
}, 1000);

var johncena;

document.getElementById("x").addEventListener("click", function() {
  var jesusdibble = Array(0,1);
  var tonyabbott = jesusdibble[Math.random(Math.random() * jesusdibble.length)];

  if (tonyabbott == 0) {
    johncena = "Heads";
  } else if (tonyabbott == 1) {
    johncena = "Tails";
  }

  document.getElementById("x").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("x").innerHTML = johncena;
    document.getElementById("x").style.opacity = "1";
  }, 1000);
}, false);

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}
