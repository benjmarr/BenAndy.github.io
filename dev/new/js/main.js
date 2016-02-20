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
