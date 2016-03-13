// Copyright Benjamin (c) 2015 - All rights reserved

// Cookie handlers
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
};

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
};

// Disable right click
if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
};

// Loading animation
var loadSpinDeg = 0;
var loadSpin = setInterval(function() {
  if (loadSpinDeg === 361) {
    loadSpinDeg = 0;
  } else {
    loadSpinDeg++;
  };
  document.getElementById("loadImg").style.transform = "rotate(" + loadSpinDeg + "deg)";
}, 1);

// Load complete animations
window.onload = function() {
  setTimeout(function() {
    document.getElementById("loadImg").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.opacity = "0.3";
      document.getElementById("loadImg").style.visibility = "hidden";
      document.getElementById("loadImg").style.marginTop = "0";
      document.getElementById("loadImg").style.height = "0";
      clearInterval(loadSpin);
    }, 1000);
    setTimeout(function() {
      document.getElementById("titleBox").style.opacity = "1";
      document.getElementById("titleBox").style.fontSize = "500%";
      setTimeout(function() {
        document.getElementById("subTitleBox").style.opacity = "1";
        document.getElementById("subTitleBox").style.fontSize = "130%";
        setTimeout(function() {
          document.getElementById("navBox").style.opacity = "1";
        }, 200);
      }, 300);
    }, 1000);
  }, 500);
};
