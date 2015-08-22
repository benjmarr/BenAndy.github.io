// Copyright Benjamin (c) 2015 - All rights reserved.
var version = "v0.1.2.13";
var namever = "PLAY " + version;

console.log("play.js file loaded\nCopyirght Benjamin (c) 2015 - All rights reserved.");
console.log(namever);

alert("Loading " + namever + "!");
var load = setInterval(function() {
  clearInterval(load);
  document.getElementsByTagName("body").innerHTML = "<iframe src='http://benandy.github.io/dev/PLAY/PLAY.html></iframe>'";
  document.title = namever + " window";
}, 1000);
