// Copyright Benjamin (c) 2017 - All rights reserved
console.log("Copyright Benjamin (c) 2017 - All rights reserved");
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
var sec = 0;
if (getCookie("record") === "") {
  setCookie("record", 0, 365);
  document.getElementById("record").innerHTML = getCookie("record");
};
setInterval(function() {
  sec = sec + 1;
  document.getElementById("time").innerHTML = sec;
  if (sec > getCookie("record")) {
    setCookie("record", sec, 365);
  };
  document.getElementById("record").innerHTML = getCookie("record");
}, 1000);
document.getElementById("record").innerHTML = getCookie("record");
