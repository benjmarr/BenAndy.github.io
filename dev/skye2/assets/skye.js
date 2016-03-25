// Copyright Benjamin Developments (c) 2015 - All rights reserved
console.log("Skye New Tab copyright Benjamin Developments (c) 2015 - All rights reserved");
console.log("skye.js loaded.");
var rootUrl = "https://github.com/BenAndy/SkyeNewTab/tree/master";
var ckiUpdDte = "March 25, 2016";

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
    if (value === "true") {
      document.getElementById(id).style.webkitFilter = "grayscale(1)";
    } else {
      document.getElementById(id).style.webkitFilter = "grayscale(0)";
    };
  }, delay);
};
  // Visibility style
var styleVisibility = function(delay, id, value) {
  setTimeout(function() {
    document.getElementById(id).style.visibility = value;
  }, delay);
};
  // Background color style
var styleBackgroundColor = function(delay, id, value) {
  setTimeout(function() {
    document.getElementById(id).style.backgroundColor = value;
  }, delay);
};

// Clear menus
var clearMenu = function(opB) {
  styleOpacity(0, "opM", 0);
  styleVisibility(300, "opM", "hidden");
  styleOpacity(0, "dteFom", 0);
  styleVisibility(300, "dteFom", "hidden");
  styleOpacity(0, "bkgrndImgInf", 0);
  styleVisibility(300, "bkgrndImgInf", "hidden");
  styleOpacity(0, "icnVsblty", 0);
  styleVisibility(300, "icnVsblty", "hidden");
  styleOpacity(0, "kybdCntrls", 0);
  styleVisibility(300, "kybdCntrls", "hidden");
  styleOpacity(0, "ckiUpd", 0);
  styleVisibility(300, "ckiUpd", "hidden");
  if (opB === "true") {
    styleVisibility(0, "options", "visible");
    styleOpacity(0, "options", 1);
  } else {
    styleVisibility(300, "options", "hidden");
    styleOpacity(0, "options", 0);
  };
};

// Cookie update alerts
if (getCookie("ckiUpd") === "") {
  setCookie("ckiUpd", "January 1, 1970", 365);
};
if (getCookie("ckiUpd") === ckiUpdDte) {
  console.log("Cookes last updated on " + ckiUpdDte);
} else {
  setCookie("ckiUpd", ckiUpdDte, 365);
  styleVisibility(0, "ckiUpd", "visible");
  styleOpacity(0, "ckiUpd", 0.9);
  document.getElementById("ckiUpdMsg").innerHTML = "New cookies have been added since you last visited Skye. Cookies were last updated on " + ckiUpdDte + ". You can view our cookie and privacy policy below.";
};
document.getElementById("ckiUpdclose").addEventListener("click", function() {
  clearMenu("true");
}, false);

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
var nday;
var nmonth;
var ndate;
var strdndth;
var hourtf;
var tday = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tmonth = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
setInterval(clock, 100);
function clock() {
  var d = new Date();
  nday = d.getDay()
  nmonth = d.getMonth()
  ndate = d.getDate();
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
    strdndth = "st";
  } else if (ndate === 2 || ndate === 22) {
    strdndth = "nd";
  } else if (ndate === 3 || ndate === 23) {
    strdndth = "rd";
  } else {
    strdndth = "th";
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
  if (getCookie("opTwntyFrHrTm") === "24") {
    hourtf = nhour + 12;
    if  (nhour < 12) {
      if (getCookie("opAMPM") === "show") {
        document.getElementById("clockBox").innerHTML = hourtf + ":" + nmin + ap;
      } else {
        document.getElementById("clockBox").innerHTML = hourtf + ":" + nmin;
      };
    } else {
      if (getCookie("opAMPM") === "show") {
        document.getElementById("clockBox").innerHTML = hourtf + ":" + nmin + ap;
      } else {
        document.getElementById("clockBox").innerHTML = hourtf + ":" + nmin;
      };
    };
  } else {
    if (getCookie("opAMPM") === "show") {
      document.getElementById("clockBox").innerHTML = nhour + ":" + nmin + ap;
    } else {
      document.getElementById("clockBox").innerHTML = nhour + ":" + nmin;
    };
  };


  if (getCookie("opDteFom") === "1") {
    document.getElementById("dateBox").innerHTML = tday[nday] + ", " + tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>";
  } else if (getCookie("opDteFom") === "2") {
    document.getElementById("dateBox").innerHTML = tmonth[nmonth] + ndate + "<sup>" + strdndth + "</sup>";
  } else if (getCookie("opDteFom") === "3") {
    document.getElementById("dateBox").innerHTML = tday[nday] + ", " + ndate + " " + tmonth[nmonth];
  } else if (getCookie("opDteFom") === "4") {
    document.getElementById("dateBox").innerHTML = tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>";
  };
};

// Keyboard shortcuts
document.addEventListener("keydown", function(e) {
  e = e || window.event;
  if (e.keyCode === 27) {
    clearMenu("true");
  } else if (e.keyCode === 79) {
    clearMenu("false");
    styleVisibility(1000, "opM", "visible");
    styleOpacity(1000, "opM", 0.9);
  } else if (e.keyCode === 78) {
    styleOpacity(0, "header", "0");
    styleOpacity(1100, "header", "1");
    setTimeout(function() {
      setBack("random");
    }, 1000);
  };
}, false);

// Options button click
document.getElementById("options").addEventListener("click", function() {
  clearMenu("false");
  styleVisibility(300, "opM", "visible");
  styleOpacity(300, "opM", 0.9);
}, false);

// Options close
document.getElementById("opMclose").addEventListener("click", function() {
  clearMenu("true");
}, false);

// Option menu options
  // Show & hide the AM/PM
if (getCookie("opAMPM") === "") {
  setCookie("opAMPM", "show", 365);
};
var opAMPM = function(value) {
  if (value === "show") {
    setCookie("opAMPM", "show", 365);
    document.getElementById("opAMPM").innerHTML = "Hide the AM/PM";
  } else if (value === "hide") {
    setCookie("opAMPM", "hide", 365);
    document.getElementById("opAMPM").innerHTML = "Show the AM/PM";
  } else if (value === "pageLoad") {
    if (getCookie("opAMPM") === "show") {
      opAMPM("show");
    } else {
      opAMPM("hide");
    };
  };
};
document.getElementById("opAMPM").addEventListener("click", function() {
  if (getCookie("opAMPM") === "show") {
    opAMPM("hide");
  } else {
    opAMPM("show");
  };
}, false);
opAMPM("pageLoad");
  // Change your name
document.getElementById("opChngNme").addEventListener("click", function() {
  retriveUserName();
}, false);
  // Change the date format
document.getElementById("opChngeDteFrmt").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(300, "dteFom", "visible");
  styleOpacity(300, "dteFom", 0.9);
}, false);
document.getElementById("dteFomclose").addEventListener("click", function() {
  styleOpacity(0, "dteFom", 0);
  styleVisibility(300, "dteFom", 0);
}, false);
if (getCookie("opDteFom") === "") {
  setCookie("opDteFom", 1, 365);
};
setTimeout(function() {
  document.getElementById("opDteFom1").innerHTML = tday[nday] + ", " + tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>";
  document.getElementById("opDteFom2").innerHTML = tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>";
  document.getElementById("opDteFom3").innerHTML = tday[nday] + ", " + ndate + " " + tmonth[nmonth];
  document.getElementById("opDteFom4").innerHTML = tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>";
}, 200);
document.getElementById("opDteFom1").addEventListener("click", function() {
  setCookie("opDteFom", 1, 365);
}, false);
document.getElementById("opDteFom2").addEventListener("click", function() {
  setCookie("opDteFom", 2, 365);
}, false);
document.getElementById("opDteFom3").addEventListener("click", function() {
  setCookie("opDteFom", 3, 365);
}, false);
document.getElementById("opDteFom4").addEventListener("click", function() {
  setCookie("opDteFom", 4, 365);
}, false);
  // Hide or show the Google search box
if (getCookie("opGSearch") === "") {
  setCookie("opGSearch", "show", 365);
  document.getElementById("opGSearch").innerHTML = "Hide the Google search box";
} else if (getCookie("opGSearch") === "show") {
  document.getElementById("opGSearch").innerHTML = "Hide the Google search box";
} else {
  document.getElementById("opGSearch").innerHTML = "Show the Google search box";
}
document.getElementById("opGSearch").addEventListener("click", function() {
  if (getCookie("opGSearch") === "show") {
    setCookie("opGSearch", "hide", 365);
    document.getElementById("opGSearch").innerHTML = "Show the Google Search box";
    styleOpacity(0, "gSearchF", 0);
    styleVisibility(300, "gSearchF", "hidden");
  } else {
    setCookie("opGSearch", "show", 365);
    document.getElementById("opGSearch").innerHTML = "Hide the Google search box";
    styleOpacity(0, "gSearchF", 1);
    styleVisibility(0, "gSearchF", "visible");
  }
}, false);
  // Hide or show the welcome messages
if (getCookie("opWlcmMsgs") === "") {
  setCookie("opWlcmMsgs", "show", 365);
  document.getElementById("opWlcmMsgs").innerHTML = "Hide the welcome message";
} else if (getCookie("opWlcmMsgs") === "show") {
  document.getElementById("opWlcmMsgs").innerHTML = "Hide the welcome message";
} else {
  document.getElementById("opWlcmMsgs").innerHTML = "Show the welcome message";
};
document.getElementById("opWlcmMsgs").addEventListener("click", function() {
  if (getCookie("opWlcmMsgs") === "show") {
    setCookie("opWlcmMsgs", "hide", 365);
    document.getElementById("opWlcmMsgs").innerHTML = "Show the welcome message";
    styleOpacity(0, "alertBox", 0);
  } else {
    setCookie("opWlcmMsgs", "show", 365);
    document.getElementById("opWlcmMsgs").innerHTML = "Hide the welcome message";
    styleOpacity(0, "alertBox", 1);
  };
}, false);
  // Keyboard controls menu
document.getElementById("opKybdCntrls").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(300, "kybdCntrls", "visible");
  styleOpacity(300, "kybdCntrls", 1);
}, false);
document.getElementById("kybdCntrlsclose").addEventListener("click", function() {
  clearMenu("true");
}, false);
  // 24 hour time option
if (getCookie("opTwntyFrHrTm") === "") {
  setCookie("opTwntyFrHrTm", "12", 365);
  document.getElementById("opTwntyFrHrTm").innerHTML = "Change to 24 hour time";
} else if (getCookie("opTwntyFrHrTm") === "12") {
  setCookie("opTwntyFrHrTm", "12", 365);
  document.getElementById("opTwntyFrHrTm").innerHTML = "Change to 24 hour time";
} else {
  setCookie("opTwntyFrHrTm", "24", 365);
  document.getElementById("opTwntyFrHrTm").innerHTML = "Change to 12 hour time";
};
document.getElementById("opTwntyFrHrTm").addEventListener("click", function() {
  if (getCookie("opTwntyFrHrTm") === "12") {
    setCookie("opTwntyFrHrTm", "24", 365);
    document.getElementById("opTwntyFrHrTm").innerHTML = "Change to 12 hour time";
  } else {
    setCookie("opTwntyFrHrTm", "12", 365);
    document.getElementById("opTwntyFrHrTm").innerHTML = "Change to 24 hour time";
  };
}, false);

// Run when page finished loading
window.onload = function() {
  styleOpacity(0, "body", 1);
  styleOpacity(200, "options", 1);
  styleOpacity(400, "unsplash", 1);
  styleOpacity(600, "title", 1);
  styleOpacity(800, "clockBox", 1);
  styleOpacity(1000, "dateBox", 1);
  if (getCookie("opWlcmMsgs") === "show") {
    styleOpacity(1200, "alertBox", 1);
  };
  styleOpacity(1400, "linkDiv", 1);
  if (getCookie("opGSearch") === "show") {
    styleOpacity(1600, "gSearchF", 1);
  };
};
