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

// Set header background
document.getElementById("header").style.backgroundImage = "url('content/background.jpg')";

// Nav Data
var nav0Data = ["Skye New Tab", "http://benandy.github.io/skye", "blank"];
var nav1Data = ["Should You?", "http://benandy.github.io/r/shouldyou", "blank"];
var nav2Data = ["Snapchat Online", "http://benandy.github.io/r/snapchat", "blank"];
var nav3Data = ["Web Development Contracts", "development.html", "self"];
var nav4Data = ["Contact Me", "contact.html", "self"];

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

// Nav hovers
  // Skye New Tab
document.getElementById("nav0").addEventListener("mouseover", function() {
  opacity("header", "1", 0);
  opacity("nav1", "0", 0);
  opacity("nav2", "0", 0);
  opacity("nav3", "0", 0);
  opacity("nav4", "0", 0);
  document.getElementById("titleBox").style.color = "#FFFFFF";
}, false);

document.getElementById("nav0").addEventListener("mouseout", function() {
  opacity("header", "0", 0);
  opacity("nav1", "1", 0);
  opacity("nav2", "1", 0);
  opacity("nav3", "1", 0);
  opacity("nav4", "1", 0);
  document.getElementById("titleBox").style.color = "#000000";
}, false);

  // Should You?
document.getElementById("nav1").addEventListener("mouseover", function() {
  opacity("nav0", "0", 0);
  opacity("nav2", "0", 0);
  opacity("nav3", "0", 0);
  opacity("nav4", "0", 0);
  setTimeout(function() {
    document.getElementById("nav3").innerHTML = "Can't decide if you want to do something or not?";
    document.getElementById("nav4").innerHTML = "This page should help you out...!";
    opacity("nav3", "1", 100);
    opacity("nav4", "1", 100);
  }, 500);
}, false);

document.getElementById("nav1").addEventListener("mouseout", function() {
  opacity("nav3", "0", 0);
  opacity("nav4", "0", 0);
  setTimeout(function() {
    setNav3();
    setNav4();
    opacity("nav0", "1", 0);
    opacity("nav1", "1", 0);
    opacity("nav2", "1", 0);
    opacity("nav3", "1", 0);
    opacity("nav4", "1", 0);
  }, 500);
}, false);

  // Snapchat Online
document.getElementById("nav2").addEventListener("mouseover", function() {
  opacity("nav0", "0", 0);
  opacity("nav1", "0", 0);
  opacity("nav3", "0", 0);
  opacity("nav4", "0", 0);
  document.getElementById("body").style.backgroundColor = "#FFFC00";
}, false);

document.getElementById("nav2").addEventListener("mouseout", function() {
  opacity("nav0", "1", 0);
  opacity("nav1", "1", 0);
  opacity("nav3", "1", 0);
  opacity("nav4", "1", 0);
  document.getElementById("body").style.backgroundColor = "#FFFFFF";
}, false);
