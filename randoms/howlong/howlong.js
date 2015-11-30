// Copyright Benjamin (c) 2015 - All rights reserved

console.log("Copyright Benjamin (c) 2015 - All rights reserved");

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

var sec;

if (getCookie("howlong") == "") {
  setCookie("howlong", 0, 365);
  sec = 0;
} else {
  sec = getCookie("howlong");
}

setInterval(function() {
  sec = sec + 1;
  document.getElementById("time").innerHTML = sec;
  setCookie("howlong", sec, 365);
  console.log(sec);
}, 1000);
