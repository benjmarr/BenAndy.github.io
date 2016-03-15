// Copyright Benjamin (c) 2016 - All rights reserveda

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
var loadSpin;
var pageLoad = function() {
  var loadSpinDeg = 0;
  loadSpin = setInterval(function() {
    if (loadSpinDeg === 361) {
      loadSpinDeg = 0;
    } else {
      loadSpinDeg++;
    };
    document.getElementById("loadImg").style.transform = "rotate(" + loadSpinDeg + "deg)";
  }, 1);
};
if (pageLoad) {pageLoad()};

// Page finish Loading
window.onload = function() {
  if (mainPage) {
    document.getElementById("loadImg").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.opacity = "0.4";
      document.getElementById("loadImg").style.visibility = "hidden";
      document.getElementById("loadImg").style.marginTop = "0";
      document.getElementById("loadImg").style.height = "0";
      clearInterval(loadSpin);
      setTimeout(function() {
        document.getElementById("titleImage").style.opacity = "1";
        setTimeout(function() {
          document.getElementById("ttl").style.opacity = "1";
          setTimeout(function() {
            document.getElementById("nb").style.opacity = "1";
          }, 400);
        }, 400);
      }, 1200);
    }, 1000);
  };
};
