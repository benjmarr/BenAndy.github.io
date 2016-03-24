// Copyright Benjamin Developments (c) 2015 - All rights reserved
console.log("links.js loaded.");

if (getCookie("opIcnVsblty") === "") {
  setCookie("opIcnVsblty", "1", 365);
};
var goLink = function(url) {
  styleBackgroundColor(0, "body", "#FFFFFF");
  styleOpacity(0, "body", 0);
  window.location = url;
};
document.getElementById("link1").addEventListener("click", function() {
  goLink("https://google.com/");
}, false);
document.getElementById("link2").addEventListener("click", function() {
  goLink("https://facebook.com/");
}, false);
document.getElementById("link3").addEventListener("click", function() {
  goLink("https://instagram.com/");
}, false);
document.getElementById("link4").addEventListener("click", function() {
  goLink("https://pinterest.com/");
}, false);
document.getElementById("link5").addEventListener("click", function() {
  goLink("https://twitter.com/");
}, false);
document.getElementById("link6").addEventListener("click", function() {
  goLink("https://youtube.com/");
}, false);
document.getElementById("link1").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link1", "false");
  };
}, false);
document.getElementById("link1").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link1", "true");
  };
}, false);
document.getElementById("link2").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link2", "false");
  };
}, false);
document.getElementById("link2").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link2", "true");
  };
}, false);
document.getElementById("link3").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link3", "false");
  };
}, false);
document.getElementById("link3").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link3", "true");
  };
}, false);
document.getElementById("link4").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link4", "false");
  };
}, false);
document.getElementById("link4").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link4", "true");
  };
}, false);
document.getElementById("link5").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link5", "false");
  };
}, false);
document.getElementById("link5").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link5", "true");
  };
}, false);
document.getElementById("link6").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link6", "false");
  };
}, false);
document.getElementById("link6").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link6", "true");
  };
}, false);
var grayscaleOn = function() {
  styleGrayscale(0, "link1", "true");
  styleGrayscale(0, "link2", "true");
  styleGrayscale(0, "link3", "true");
  styleGrayscale(0, "link4", "true");
  styleGrayscale(0, "link5", "true");
  styleGrayscale(0, "link6", "true");
};
var grayscaleOff = function() {
  styleGrayscale(0, "link1", "false");
  styleGrayscale(0, "link2", "false");
  styleGrayscale(0, "link3", "false");
  styleGrayscale(0, "link4", "false");
  styleGrayscale(0, "link5", "false");
  styleGrayscale(0, "link6", "false");
};
var visibleOn = function() {
  styleVisibility(0, "link1", "visible");
  styleVisibility(0, "link2", "visible");
  styleVisibility(0, "link3", "visible");
  styleVisibility(0, "link4", "visible");
  styleVisibility(0, "link5", "visible");
  styleVisibility(0, "link6", "visible");
};
var visibleOff = function() {
  styleVisibility(500, "link1", "hidden");
  styleVisibility(500, "link2", "hidden");
  styleVisibility(500, "link3", "hidden");
  styleVisibility(500, "link4", "hidden");
  styleVisibility(500, "link5", "hidden");
  styleVisibility(500, "link6", "hidden");
};
var opacityOn = function() {
  styleOpacity(0, "link1", 1);
  styleOpacity(0, "link2", 1);
  styleOpacity(0, "link3", 1);
  styleOpacity(0, "link4", 1);
  styleOpacity(0, "link5", 1);
  styleOpacity(0, "link6", 1);
};
var opacityOff = function() {
  styleOpacity(0, "link1", 0);
  styleOpacity(0, "link2", 0);
  styleOpacity(0, "link3", 0);
  styleOpacity(0, "link4", 0);
  styleOpacity(0, "link5", 0);
  styleOpacity(0, "link6", 0);
};
var opIcnVsblty1 = function() {
  setCookie("opIcnVsblty", "1", 365);
  grayscaleOff();
  visibleOn();
  opacityOn();
};
document.getElementById("opIcnVsblty1").addEventListener("click", function() {
  opIcnVsblty1();
}, false);
var opIcnVsblty2 = function() {
  setCookie("opIcnVsblty", "2", 365);
  grayscaleOn();
  visibleOn();
  opacityOn();
};
document.getElementById("opIcnVsblty2").addEventListener("click", function() {
  opIcnVsblty2();
}, false);
var opIcnVsblty3 = function() {
  setCookie("opIcnVsblty", "3", 365);
  visibleOff();
  opacityOff();
};
document.getElementById("opIcnVsblty3").addEventListener("click", function() {
  opIcnVsblty3();
}, false);
var opIcnVsblty4 = function() {
  setCookie("opIcnVsblty", "4", 365);
  grayscaleOn();
  visibleOn();
  opacityOn();
};
document.getElementById("opIcnVsblty4").addEventListener("click", function() {
  opIcnVsblty4();
}, false);
document.getElementById("opIcnVsblty").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(1000, "icnVsblty", "visible");
  styleOpacity(1000, "icnVsblty", 0.9);
}, false);
document.getElementById("icnVsbltyclose").addEventListener("click", function() {
  clearMenu("true");
}, false);
if (getCookie("opIcnVsblty") === "1") {
  opIcnVsblty1();
} else if (getCookie("opIcnVsblty") === "2") {
  opIcnVsblty2();
} else if (getCookie("opIcnVsblty") === "3") {
  opIcnVsblty3();
} else if (getCookie("opIcnVsblty") === "4") {
  opIcnVsblty4();
};
