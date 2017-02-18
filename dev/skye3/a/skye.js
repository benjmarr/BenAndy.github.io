// Copyright Benjamin Developments (c) 2017 - All rights reserved
console.log("load");
var rl = "https://github.com/BenAndy/SkyeNewTab/tree/master";
var cud = "February 18th, 2017";

// Cookie handlers
function sc(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};
function gc(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  };
  return "";
};

// Disable right click
if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    if (document.activeElement.tagName != "INPUT") {
      e.preventDefault();
    };
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    if (document.activeElement.tagName != "INPUT") {
      window.event.returnValue = false;
    };
  });
};

// Close menus
var cm = function(x) {

};

// Background image
var bn = Array(208, 209, 210);
var iud = "Saturday 18<sup>th</sup> February 2017";
var bo = function() {
  return bn[Math.floor(math.random() * bn.length)];
};
document.getElementById("iue", iud);
