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
var loadSpin = function() {
  var loadSpinDeg = 0;
  var loadSpin = setInterval(function() {
    if (loadSpinDeg === 361) {
      loadSpinDeg = 0;
    } else {
      loadSpinDeg++;
    };
    document.getElementById("loadImg").style.transform = "rotate(" + loadSpinDeg + "deg)";
  }, 1);
};
if (loadSpin) {
  loadSpin();
};

// Load complete
window.onload = function() {
  if (homeSetup) {
    homePageLoad();
  };

  if (page404) {
    page404setUp();
  };

  if (privacyPage) {
    privacySetup();
  };

  if (dev) {
    devSetup();
  };

  if (navBar) {
    setTimeout(function() {
      document.getElementById("nvBr").style.opacity = "1";
    }, 1500);
  };
};

// Home page setup
var homePageLoad = function() {
  setTimeout(function() {
    document.getElementById("loadImg").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.opacity = "0.4";
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
          setTimeout(function() {
            document.getElementById("ftr").style.opacity = "0.8";
          }, 500);
        }, 200);
      }, 300);
    }, 1000);
  }, 500);
};

// 404 page setup
var page404setUp = function() {
  setTimeout(function() {
    document.getElementById("loadImg").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.opacity = "0.4";
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
          document.getElementById("title").style.opacity = "1";
          setTimeout(function() {
            document.getElementById("msg").style.opacity = "1";
            setTimeout(function() {
              document.getElementById("ftr").style.opacity = "0.8";
            }, 500);
          }, 300);
        }, 300);
      }, 300);
    }, 1000);
  }, 500);
};

// Privacy Polciy page setup
var privacySetup = function() {
  setTimeout(function() {
    document.getElementById("loadImg").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.opacity = "0.4";
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
          document.getElementById("title").style.opacity = "1";
          setTimeout(function() {
            document.getElementById("privMAIN").style.opacity = "1";
            setTimeout(function() {
              document.getElementById("ftr").style.opacity = "0.8";
            }, 500);
          }, 300);
        }, 300);
      }, 300);
    }, 1000);
  }, 500);
};

// Development services page setup
var devSetup = function() {
  setTimeout(function() {
    document.getElementById("loadImg").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.opacity = "0.4";
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
          document.getElementById("title").style.opacity = "1";
          setTimeout(function() {
            document.getElementById("dvInt").style.opacity = "1";
            document.getElementById("ftr").style.opacity = "0.8";
            setTimeout(function() {
              if (developing) {
                document.getElementById("formArea").style.visibility = "visible";
                document.getElementById("formArea").style.opacity = "1";
                document.getElementById("dvDsc").style.opacity = "1";
              };
            }, 300);
          }, 300);
        }, 300);
      }, 300);
    }, 1000);
  }, 500);

  if (developing) {
    document.getElementById("devYesNo").innerHTML = "developing websites.<br /><br />Please note; Benjamin Developments is a web development service not a web designer service. We will need design sketches to develop your website off. You can create your own and send them to us or get a professional web designer to design for you.<br /><br />If you're interested in having your website developed by Benjamin Developments, contact us below!";
  } else {
    document.getElementById("formArea").innerHTML = "<br /><br /><br /><br />";
    document.getElementById("dvDsc").style.visibility = "hidden";
    document.getElementById("dvDsc").innerHTML = "<br />";
    document.getElementById("devYesNo").innerHTML = "not developing websites. Please come back later to see what's happening!";
  };
};

// Nav bar build
if (navBar) {
  var navDataNAME = ["Home", "Skye New Tab", "Development Services"];
  var navDataURLS = ["http://benandy.github.io", "http://benandy.github.io/skye", "http://benandy.github.io/development"];
  document.getElementById("nvBr").innerHTML = "<a href='" + navDataURLS[0] + "'>" + navDataNAME[0] + "</a> - <a href='" + navDataURLS[1] + "'>" + navDataNAME[1] + "</a> - <a href='" + navDataURLS[2] + "'>" + navDataNAME[2] + "</a>";
};
