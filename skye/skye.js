// Copyright Benjamin (c) 2016 - All rights reserved

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

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
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

// Detect page loading
window.onload = function() {
  document.getElementById("loadImg").style.opacity = "0";
  setTimeout(function() {
    clearInterval(loadSpin);
    document.getElementById("loadImg").style.visibility = "hidden";
    document.getElementById("loadImg").style.width = "0%";
    document.getElementById("loadImg").style.marginTop = "0%";
    document.getElementById("header").style.opacity = "0.7";
    setTimeout(function() {
      document.getElementById("titleLogo").style.visibility = "visible";
      document.getElementById("titleLogo").style.opacity = "1";
      setTimeout(function() {
        document.getElementById("welTxt").style.opacity = "1";
        if (main) {
          setTimeout(function() {
            document.getElementById("install").style.opacity = "1";
            setTimeout(function() {
              document.getElementById("nav").style.opacity = "1";
            }, 500);
          }, 500);
        };
      }, 500);
    }, 1000);
  }, 1000);
};

// Buttons
if (main) {
  // // Issues and suggestions
  document.getElementById("button4").innerHTML = "Issues &amp; Suggestions";
  document.getElementById("button4").addEventListener("click", function() {
    window.open("https://github.com/BenAndy/SkyeNewTab/issues","_blank");
  }, false);

  // // View on GitHub button
  document.getElementById("button3").innerHTML = "View Source on GitHub";
  document.getElementById("button3").addEventListener("click", function() {
    window.open("https://github.com/BenAndy/SkyeNewTab","_blank");
  }, false);

  // // Reviews button
  document.getElementById("button2").innerHTML = "Extension Reviews";
  document.getElementById("button2").addEventListener("click", function() {
    window.open("https://chrome.google.com/webstore/detail/skye-new-tab/hmgfgpieichmjmcbccbdcmfolhlmjcpg/reviews","_blank");
  }, false);

  // // Developer contact button
  document.getElementById("button1").innerHTML = "Contact the Developer";
  document.getElementById("button1").addEventListener("click", function() {
    window.open("https://benandy.typeform.com/to/zlElxa","_blank");
  }, false);

  // // Install Button
  document.getElementById("install").innerHTML = "INSTALL NOW";
  document.getElementById("install").addEventListener("click", function() {
    var userAg = navigator.userAgent;
    if (userAg.indexOf("Chrome") != -1) {
      // Browser is Chrome on desktop
      window.open("https://chrome.google.com/webstore/detail/skye-new-tab/hmgfgpieichmjmcbccbdcmfolhlmjcpg","_blank");
    } else {
      // Browser is not Chrome on desktop
      var wrongBrowser = confirm("Hey there! This extension only works on the Google Chrome browser and on non-mobile devises. Please move to a desktop version of Chrome to install this extension.\n\nDo you still want to view the extension on the Google Chrome store?");
      if (wrongBrowser) {
        window.open("https://chrome.google.com/webstore/detail/skye-new-tab/hmgfgpieichmjmcbccbdcmfolhlmjcpg","_blank");
      };
    };
  }, false);
};
