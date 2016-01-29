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

// opacity() method
var opacity = function(id, opacity, delay) {
  setTimeout(function() {
    document.getElementById(id).style.opacity = opacity;
  }, delay);
};

// Set header background
document.getElementById("header").style.backgroundImage = "url('../content/mobile.jpg')";

// Page load animations
opacity("titleBox", "1", 500);
setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    opacity("nav" + i, 1, i * 500);
    if (i === 4) {
      opacity("header", 1, 1000);
    };
  };
}, 1000);

// Nav Data
var nav0Data = ["Skye New Tab", "http://benandy.github.io/skye", "blank"];
var nav1Data = ["Should You?", "http://benandy.github.io/r/shouldyou", "blank"];
var nav2Data = ["Snapchat Online", "http://benandy.github.io/r/snapchat", "blank"];
var nav3Data = ["Web Development Services", "https://benandy.typeform.com/to/hLLp1H", "blank"];
var nav4Data = ["Contact Me", "https://benandy.typeform.com/to/EyWPJI", "blank"];

// Set Nav
var setNav0 = function() {document.getElementById("nav0").innerHTML = "<a href='" + nav0Data[1] + "' target='_" + nav0Data[2] + "'>" + nav0Data[0] + "</a>";};
var setNav1 = function() {document.getElementById("nav1").innerHTML = "<a href='" + nav1Data[1] + "' target='_" + nav1Data[2] + "'>" + nav1Data[0] + "</a>";};
var setNav2 = function() {document.getElementById("nav2").innerHTML = "<a href='" + nav2Data[1] + "' target='_" + nav2Data[2] + "'>" + nav2Data[0] + "</a>";};
var setNav3 = function() {document.getElementById("nav3").innerHTML = "<a href='" + nav3Data[1] + "' target='_" + nav3Data[2] + "'>" + nav3Data[0] + "</a>";};
var setNav4 = function() {document.getElementById("nav4").innerHTML = "<a href='" + nav4Data[1] + "' target='_" + nav4Data[2] + "'>" + nav4Data[0] + "</a>";};

setNav0();
setNav1();
setNav2();
setNav3();
setNav4();
