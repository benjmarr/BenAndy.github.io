// Copyright Benjamin (c) 2015 - All rights reserved.
var version = "v0.1.2.8";
var namever = "PLAY " + version;

console.log("play.js file loaded\nCopyirght Benjamin (c) 2015 - All rights reserved.");
console.log(namever);

alert("Loading " + namever + "!");
var load = setInterval(function() {
  clearInterval(load);

}, 1000);
alert(namever + " loaded!");
