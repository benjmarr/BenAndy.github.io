// Copyright Benjamin (c) 2016 - All rights reserved

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

// opacity() method
var opacity = function(id, opacity, delay) {
  setTimeout(function() {
    document.getElementById(id).style.opacity = opacity;
  }, delay);
};

// Are development applications open (true) or closed (false)?
var devApps = false;
if (devApps) {
  document.getElementById("devApp").innerHTML = "open";
  document.getElementById("devInfo").innerHTML = "Fill in the details below to get your project underway!<br /><br />";
  document.getElementById("devApp").style.color = "#01DF3A";
} else {
  document.getElementById("devApp").innerHTML = "closed";
  document.getElementById("devInfo").innerHTML = "When applications are open, there will be a form you can fill in with information about your project.<br /><br />Check back later and they might be open!";
  document.getElementById("devApp").style.color = "#FF0040";
  document.getElementById("typeformX").style.height = "0%";
  document.getElementById("typeform").style.visibility = "hidden";
};
