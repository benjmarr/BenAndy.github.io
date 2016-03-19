// Copyright Benjamin (c) 2015 - All rights reserved
console.log("links.js loaded.");

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
