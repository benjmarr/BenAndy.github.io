// Copyright Benjamin Developments (c) 2017 - All rights reserved
console.log("js start");
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

// Get name
var rum = function() {
  var pn = prompt("What would you like to be called? You can change your name later in the options menu if need be. If you don't wish to have your name displayed, just press [ENTER].", "Your name");
  if (pn === "Your name" || pn === "" || pn === null) {
    sc("n", "false", 99*99);
  } else {
    sc("n", pn, 99*99);
  };
};
if (gc("n") === "") {
  rum();
};

// Background image & information
var bn = Array(208, 209, 210);
var iud = "Saturday 18<sup>th</sup> February, 2017";
var bo = function() {
  return bn[Math.floor(Math.random() * bn.length)];
};
var sbi = bo();
document.getElementById("iue", iud);
document.getElementById("b").style.backgroundImage = "url('a/i/b/" + sbi + ".jpg')";
document.getElementById("iue").innerHTML = iud;
var bii = function(x, y, z) {
  z = "https://unsplash.com/@" + z;
  document.getElementById("bii0").innerHTML = y;
  document.getElementById("bii1").innerHTML = "<a target='_blank' href='" + z + "'>" + z + "</a>";
  document.getElementById("bii2").innerHTML = "<a target='_blank' href='https://unsplash.com/photos/" + x + "'>" + "https://unsplash.com/photos/" + x + "</a>"
  document.getElementById("bii3").innerHTML = "<a target='_blank' href='" + z + "/portfolio'>Click to see</a>";
};
if (sbi === bn[0]) {
  bii("Sq8rpq2KB7U", "Vinh Pham", "fluffpiece");
} else if (sbi === bn[1]) {
  bii("pGKyqck99cg", "Jacob Rank", "jacobaustinrank");
} else if (sbi === bn[2]) {
  bii("EARYIkg21D4", "Maja Petric", "majapetric");
};

// Set/Read/Change/Open options
    // Close all menus
var cn = function(x) {
  var ms = Array("mom", "dfm");
  var y = function(z) {
    setTimeout(function() {
      document.getElementById(z).style.visibility = "hidden";
    }, 301);
  };
  for (i = 0; i < ms.length; i++) {
    document.getElementById(ms[i]).style.opacity = 0;
    y(ms[i]);
    console.log(i);
  };
  if (x) {
    setTimeout(function() {
      document.getElementById("mom").style.visibility = "visible";
      document.getElementById("mom").style.opacity = 1;
      document.getElementById("o").style.opacity = 0;
      setTimeout(function() {
        document.getElementById("o").style.visibility = "hidden";
      }, 301);
    }, 300);
  } else {
    document.getElementById("o").style.opacity = 1;
    document.getElementById("o").style.visibility = "visible";
  };
};
    // Close menu button
document.getElementById("cn").addEventListener("click", function() {
  cn();
}, false);
    // Open options menu
document.getElementById("o").addEventListener("click", function() {
  cn(true);
}, false);
    // Toggle background grayscale
if (gc("ogs") === "") {
  sc("ogs", "f", 99*99);
};
document.getElementById("gs").addEventListener("click", function() {
  if (gc("ogs") === "f") {
    sc("ogs", "t", 99*99);
    document.getElementById("b").style.webkitFilter = "grayscale(1)";
  } else {
    sc("ogs", "f", 99*99);
    document.getElementById("b").style.webkitFilter = "grayscale(0)";
  };
}, false);
    // Toggle 24 hour time
if (gc("otht") === "") {
  sc("ogs", "12", 99*99);
};
document.getElementById("tht").addEventListener("click", function() {
  if (gc("otht") === "12") {
    gc("otht", "24", 99*99);
  } else {
    get("otht", "12", 99*99);
  };
}, false);
    // Toggle AM/PM visibility
if (gc("oap") === "") {
  sc("oap", "v", 99*99);
};
document.getElementById("ap").addEventListener("click", function() {
  if (gc("oap") === "v") {
    sc("oap", "h", 99*99);
  } else {
    sc("oap", "v", 99*99);
  };
}, false);
    // Change date format
if (gc("dfo") === "") {
  sc("dfo", "0", 99*99);
};
document.getElementById("df").addEventListener("click", function() {
  cn();
  setTimeout(function() {
    document.getElementById("dfm").style.visibility = "visible";
    document.getElementById("dfm").style.opacity = 1;
  }, 300);
}, false);
document.getElementById("dfo0").addEventListener("click", function() {
  sc("dfo", "0", 99*99);
}, false);
document.getElementById("dfo1").addEventListener("click", function() {
  sc("dfo", "1", 99*99);
}, false);
document.getElementById("dfo2").addEventListener("click", function() {
  sc("dfo", "2", 99*99);
}, false);
document.getElementById("dfo3").addEventListener("click", function() {
  sc("dfo", "3", 99*99);
}, false);
// TODO MAKE SURE THIS WORKS AND FIX grayscale

// Clock and date
var nd;
var nm;
var ne;
var st;
var htf
var td = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tm = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
setInterval(c, 100);
function c() {
  var d = new Date();
  nd = d.getDay();
  nm = d.getMonth();
  ne = d.getDate();
  var nh = d.getHours(), nmm = d.getMinutes(), ap;
  var th = d.getHours();
  if (nh === 0) {
    ap = " AM";
    nh = 12;
  } else if (nh < 12) {
    ap = " AM";
  } else if (nh === 12) {
    ap = " PM";
  } else if (nh > 12) {
    ap = " PM";
    nh -= 12;
  };
  if (nmm <= 9) {
    nmm = "" + nmm;
  };
  if (ne === 1 || ne === 21 || ne === 31) {
    st = "st";
  } else if (ne === 2 || ne === 22) {
    st = "nd";
  } else if (ne === 3 || ne === 23) {
    st = "rd";
  } else {
    st = "th";
  };
  var nnn;
  if (gc("n") != "false") {
    nnn = true;
  };
  if (th < 12) {
    if (nnn) {
      document.getElementById("ab").innerHTML = "Good morning, " + gc("n");
    } else {
      document.getElementById("ab").innerHTML = "Good morning";
    };
  } else if (th < 18) {if (nnn) {
      document.getElementById("ab").innerHTML = "Good afternoon, " + gc("n");
    } else {
      document.getElementById("ab").innerHTML = "Good afternoon";
    };
  } else {
    if (nnn) {
      document.getElementById("ab").innerHTML = "Good evening, " + gc("n");
    } else {
      document.getElementById("ab").innerHTML = "Good evening";
    };
  };
  if (gc("otht") === "24") {
    htf = nh + 12;
    document.getElementById("cb").innerHTML = htf + ":" + nmm;
  } else {
    if (gc("oap") === "v") {
      document.getElementById("cb").innerHTML = nh + ":" + nmm + ap;
    } else {
      document.getElementById("cb").innerHTML = mh + ":" + nmm;
    };
  };
  if (gc("dfo") === "0") {
    document.getElementById("db").innerHTML = td[nd] + ", " + tm[nm] + " " + ne + "<sup>" + st + "</sup>";
  } else if (gc("dfo") === "1") {
    document.getElementById("db").innerHTML = tm[nm] + " " + ne + "<sup>" + st + "</sup>";
  } else if (gc("dfo") === "2") {
    document.getElementById("db").innerHTML = td[nd] + ", " + ne + " " + tm[nm];
  } else if (gc("dfo") === "3") {
    document.getElementById("db").innerHTML = tm[nm] + " " + ne + "<sup>" + st + "</sup>";
  };
};

// Page load complete
window.onload = function() {
  document.getElementById("a").style.opacity = 1;
  if (gc("ogs") === "f") {
    document.getElementById("b").style.webkitFilter = "grayscale(0)";
  };
  setTimeout(function() {
    document.getElementById("o").style.opacity = 1;
    document.getElementById("dt").style.opacity = 1;
    document.getElementById("cb").style.opacity = 1;
    document.getElementById("db").style.opacity = 1;
    document.getElementById("ab").style.opacity = 1;
  }, 300);
  setTimeout(function() {
    document.getElementById("dt").style.opacity = 0;
    setTimeout(function() {
      document.getElementById("dt").innerHTML = "Skye New Tab";
      setTimeout(function() {
        document.getElementById("dt").style.opacity = 1;
      }, 99);
    }, 501);
  }, 2300);
};

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-89454896-3']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

console.log("js end");
