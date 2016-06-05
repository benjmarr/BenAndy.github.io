// Copyright Benjamin Developments (c) 2016 - All rights reserved

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

// Page loading
var loadSpinDeg = 0;
var loadSpin = setInterval(function() {
  if (loadSpinDeg === 361) {
    loadSpinDeg = 0;
  } else {
    loadSpinDeg++
  };
  document.getElementById("loadImg").style.transform = "rotate(" + loadSpinDeg + "deg)";
}, 1);
window.onload = function() {
  document.getElementById("loadImg").style.opacity = "0";
  setTimeout(function() {
    clearInterval(loadSpin);
    document.getElementById("loadImg").style.visibility = "hidden";
    document.getElementById("loadImg").style.width = "0%";
    document.getElementById("loadImg").style.marginTop = "0%";
    document.getElementById("header").style.opacity = "0.7";
    setTimeout(function() {
      document.getElementById("ttl").style.opacity = "1";
      document.getElementById("ftr").style.opacity = "1";
      setTimeout(function() {
        document.getElementById("nvBr").style.opacity = "1";
      }, 500);
    }, 500);
  }, 1000);
};
