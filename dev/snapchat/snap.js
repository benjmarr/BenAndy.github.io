// Copyright Benjamin (c) 2016 - All rights reserved

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}

var opacity = function(id, opacity, delay) {
  setTimeout(function() {
    document.getElementById(id).style.opacity = opacity;
  }, delay);
};

setTimeout(function() {
  document.getElementById("body").style.backgroundColor = "#FFFC00";
}, 1000);

opacity("img", "1", 2000);
opacity("x", "1", 2500);
opacity("log", "1", 3000);
opacity("userPass", "1", 3500);

document.getElementById("press").addEventListener("click", function() {
  document.getElementById("body").style.backgroundColor = "#FF0000";
  document.getElementById("x").style.fontSize = "150%";
  document.getElementById("x").innerHTML = "Snapchat Online... is not a thing";
  document.getElementById("log").innerHTML = "Woah woah, wait... What the hell are you doing?!";
  document.getElementById("userPass").style.fontSize = "150%";
  document.getElementById("userPass").innerHTML = "You were just about to give your Snapchat log in details to a random website? You don't know what will happen! Giving your usernames and passwords to random unofficial websites is one of the worst things you can do these days! If you've given out your log in details for accounts to random websites, you should change your passwords right away - you don't know who could have access to your accounts now. The only official Snapchat platforms are applications on mobile devices. Oh and... don't worry - if you were stupid enough to type your username and password in above, it wasn't logged to any database.<br /><br />Change your Snapchat password <a href='https://accounts.snapchat.com/accounts/change_password' target='_blank'>HERE</a>.";
  opacity("img1", "1", 1000);
  document.getElementById("img1").style.height = "5%";
  document.getElementById("img1").style.width = "5%";
  document.getElementById("img").style.height = "7%";
  document.getElementById("img").style.width = "7%";
}, false);

document.getElementById("img").addEventListener("click", function() {
  opacity("body", "0", 0);
  document.getElementById("body").style.backgroundColor = "#FFFFFF";
  setTimeout(function() {
    window.location = "";
  }, 500);
}, false);
