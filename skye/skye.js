// Copyright Benjamin (c) All rights reserved - 2015

console.log("Copyright Benjamin (c) All rights reserved - 2015");

document.getElementById("header").style.backgroundImage = "url('content/background/5.jpg')";

setTimeout(function() {
  document.getElementById("title").style.opacity = "1";
  setTimeout(function() {
    document.getElementById("title").style.color = "white";
  }, 950);
}, 1500);

setInterval(function() {
  document.getElementById("xInstall").style.backgroundColor = "#D7D7D7";
  document.getElementById("xInstall").style.color = "#515151";
  setTimeout(function() {
    document.getElementById("xInstall").style.backgroundColor = "#515151";
    document.getElementById("xInstall").style.color = "#D7D7D7";
  }, 1100);
}, 2000);

document.getElementById("xInstall").addEventListener("click", function() {
  window.open("https://chrome.google.com/webstore/detail/skye-new-tab/hmgfgpieichmjmcbccbdcmfolhlmjcpg","_blank");
  setTimeout(function() {
    window.close()
  }, 10);
}, false);

document.getElementById("navContact").addEventListener("click", function() {
  window.open("https://benandy.typeform.com/to/zlElxa","_blank");
}, false);

document.getElementById("navReviews").addEventListener("click", function() {
  window.open("https://chrome.google.com/webstore/detail/skye-new-tab/hmgfgpieichmjmcbccbdcmfolhlmjcpg/reviews","_blank");
}, false);

document.getElementById("navGithub").addEventListener("click", function() {
  window.open("","_blank");
}, false)

document.getElementById("navSupport").addEventListener("click", function() {
  window.open("https://chrome.google.com/webstore/detail/skye-new-tab/hmgfgpieichmjmcbccbdcmfolhlmjcpg/support","_blank");
}, false);

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}
