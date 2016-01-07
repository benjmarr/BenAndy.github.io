// Copyright Benjamin (c) 2015 - All rights reserved

var pingas;
var dibble;
var boon;

setTimeout(function() {
  document.getElementById("x").style.opacity = "1";
  setTimeout(function() {
    document.getElementById("x").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("x").innerHTML = "<span title='Click me!'>Should you?</span>";
      document.getElementById("x").style.opacity = "1";
    }, 1000);
  }, 1000);
}, 1000);

document.getElementById("x").addEventListener("click", function() {
  clearTimeout(boon);
  var ineedpizza = Array(0,1,2);
  var ineedcoffeetoo = ineedpizza[Math.floor(Math.random() * ineedpizza.length)];

  if (ineedcoffeetoo == 0) {
    pingas = "Yes";
    dibble = "#5ADF2E";
  } else if (ineedcoffeetoo == 1) {
    pingas = "Maybe";
    dibble = "#FACC2E";
  } else {
    pingas = "No";
    dibble = "#FE2E2E";
  }

  document.getElementById("x").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("x").innerHTML = "<span title='Click Me!'>" + pingas + "</span>";
    document.getElementById("x").style.opacity = "1";
    document.getElementById("body").style.backgroundColor = dibble;
    document.getElementById("x").style.color = "#FFFFFF";
  }, 1000);

  boon = setTimeout(function() {
    document.getElementById("x").style.opacity = "0";
    document.getElementById("body").style.backgroundColor = "#FFFFFF";
    setTimeout(function() {
      document.getElementById("x").style.color = "#000000";
      document.getElementById("x").innerHTML = "<span title='Click me!'>Should you?</span>";
      document.getElementById("x").style.opacity = "1";
    }, 1000);
  }, 5000);
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
