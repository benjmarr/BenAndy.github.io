// Copyright Benjamin (c) 2015 - All rights reserved

var pingas;

setTimeout(function() {
  document.getElementById("x").style.opacity = "1";
}, 1000);

document.getElementById("x").addEventListener("click", function() {
  var ineedpizza = Array(0,1,2);
  var ineedcoffeetoo = ineedpizza[Math.floor(Math.random() * ineedpizza.length)];

  if (ineedcoffeetoo == 0) {
    pingas = "Yes";
  } else if (ineedcoffeetoo == 1) {
    pingas = "Maybe";
  } else {
    pingas = "No";
  }

  document.getElementById("x").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("x").innerHTML = "<span title='Click Me!'>" + pingas + "</span>";
    document.getElementById("x").style.opacity = "1";
  }, 1000);
  console.log(pingas);
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
