// Copyright Benjamin (c) 2015 - All rights reserved

var loadSpinDeg = 0;
var loadSpin = setInterval(function() {
  if (loadSpinDeg === 361) {
    loadSpinDeg = 0;
  } else {
    loadSpinDeg++;
  };
  document.getElementById("loadImg").style.transform = "rotate(" + loadSpinDeg + "deg)";
}, 1);

var pageSetup = function() {

};

window.onload = function() {
  setTimeout(function() {
    document.getElementById("loadImg").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("loadImg").style.visibility = "hidden";
      document.getElementById("loadImg").style.marginTop = "0";
      document.getElementById("loadImg").style.height = "0";
      clearInterval(loadSpin);
    }, 1000);
    setTimeout(function() {
      document.getElementById("titleBox").style.opacity = "1";
      document.getElementById("titleBox").style.fontSize = "500%";
    }, 1000);
  }, 500);
};


var beHappy = function() {
  throwAParty();
};
