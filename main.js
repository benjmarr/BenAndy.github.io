// Copyright Benjamin 2016 (c) - All rights reserved

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}

setTimeout(function() {
  document.getElementById("x").style.opacity = "1";
  document.getElementById("body").style.backgroundColor = "#616161";
}, 1000);

var showOpacity = function(id, time) {
  setTimeout(function() {
    document.getElementById(id).style.opacity = "1";
  }, time);
};

showOpacity("nav0", 1500);
showOpacity("nav1", 2000);
showOpacity("nav2", 2500);
