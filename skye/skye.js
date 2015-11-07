// Copyright Benjamin (c) All rights reserved - 2015

console.log("Copyright Benjamin (c) All rights reserved - 2015");

document.getElementById("header").style.backgroundImage = "url('content/background/5.jpg')";

setTimeout(function() {
  document.getElementById("title").style.opacity = "1";
  setTimeout(function() {
    document.getElementById("title").style.color = "white";
  }, 950);
}, 1500);

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}
