// Copyright Benjamin (c) 2015 - All rights reserved
console.log("Copyright Benjamin (c) 2015 - All rights reserved");

var reloadTime = 120000;
var reloadTimeSEC = reloadTime / 1000;

document.title = "AutoPlug for Plug.dj";

console.log("Page will reload " + reloadTimeSEC + " seconds after this message.");
var reload = setInterval(function() {
  console.log("Reloading");
  window.location = "index.html";
}, reloadTime);
