// Copyright Benjamin (c) 2015 - All rights reserved
console.log("Skye New Tab copyright Benjamin (c) 2015 - All rights reserved");
console.log("skye.js loaded.");
var rootUrl = "https://github.com/BenAndy/SkyeNewTab/tree/master";

// Cookie handlers
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  };
  return "";
};

// Anti-Right click
if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
};

// Style methods
  // Opacity style
var styleOpacity = function(delay, id, value) {
  setTimeout(function() {
    document.getElementById(id).style.opacity = value;
  }, delay);
};
  // Grayscale style
var styleGrayscale = function(delay, id, value) {
  setTimeout(function() {
    if (value) {
      document.getElementById(id).style.webkitFilter = "grayscale(1)";
    } else {
      document.getElementById(id).style.webkitFilter = "grayscale(0)";
    };
  }, delay);
};

// Get name
var retriveUserName = function() {
  var promptName = prompt("What's your name? If you don't wish to have your name shown, just press enter.", "Type your name here!");
  if (promptName === "Type your name here!" || promptName === "" || promptName === "null") {
    alert("You can add your name in the options menu at any time!\nJust press 'O' for options!");
    setCookie("usingName", "false", 365);
  } else {
    alert("Thanks, " + promptName + ". You can change your name in the options menu at any time!\nJust press 'O' for options!");
    setCookie("userName", promptName, 365);
    setCookie("usingName", "true", 365);
  };
};
if (getCookie("usingName") === "") {
  retriveUserName();
};

// Set date, time, date alerts & welcome messages
var tday = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tmonth = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
setInterval(clock, 1000);
function clock() {
  var d = new Date();
  var nday = d.getDay(), nmonth = d.getMonth(), ndate = d.getDate();
  var nhour = d.getHours(), nmin = d.getMinutes(), ap;
  var thour = d.getHours();
  if (nhour === 0) {
    ap = " AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = " AM";
  } else if (nhour === 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour -= 12;
  };
  if (nmin <= 9) {
    nmin = "0" + nmin;
  };
  if (ndate === 1 || ndate === 21 || ndate === 31) {
    var strdndth = "st";
  } else if (ndate === 2 || ndate === 22) {
    var strdndth = "nd";
  } else if (ndate === 3 || ndate === 23) {
    var strdndth = "rd";
  } else {
    var strdndth = "th";
  };
  if (tmonth[nmonth] === "January") {
    if (ndate === 1) {
      document.getElementById("alertBox").innerHTML = "Happy new year!";
    };
  } else if (tmonth[nmonth] === "December") {
    if (ndate === 25) {
      document.getElementById("alertBox").innerHTML = "Merry Christmas!";
    };
  } else {
    if (thour < 12) {
      if (getCookie("usingName") === "false") {
        document.getElementById("alertBox").innerHTML = "Good morning";
      } else {
        document.getElementById("alertBox").innerHTML = "Good morning, " + getCookie("userName");
      };
    } else if (thour < 18) {
      if (getCookie("usingName") === "false") {
        document.getElementById("alertBox").innerHTML = "Good afternoon";
      } else {
        document.getElementById("alertBox").innerHTML = "Good afternoon, " + getCookie("userName");
      };
    } else {
      if (getCookie("usingName") === "false") {
        document.getElementById("alertBox").innerHTML = "Good evening";
      } else {
        document.getElementById("alertBox").innerHTML = "Good evening, " + getCookie("userName");
      }
    };
  };
  document.getElementById("dateBox").innerHTML = tday[nday] + ", " + tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>";
  document.getElementById("clockBox").innerHTML = nhour + ":" + nmin + ap;
};

// Run when page finished loading
window.onload = function() {
  styleOpacity(300, "body", "1");
  styleOpacity(1300, "options", "1");
  styleOpacity(1800, "unsplash", "1");
  styleOpacity(2300, "title", "1");
  styleOpacity(1500, "clockBox", "1");
  styleOpacity(1900, "dateBox", "1");
  styleOpacity(2300, "alertBox", "1");
  styleOpacity(2700, "linkDiv", "1");
};
