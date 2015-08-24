// Copyright Benjamin (c) 2015 - All rights reserved.
var version = "v0.1.2.24";
var appver = "PLAY " + version;
var appDetail = appver + " online game script";
var loadDelayTime = 1000;
var loadDelaySEC = loadDelayTime / 1000 + " second(s)";

console.log("play.js file loaded\nCopyirght Benjamin (c) 2015 - All rights reserved.\nPlease allow exactly " + loadDelaySEC + " for the script to start.");
console.log(appDetail);

alert("Loading " + appDetail + "! Please wait...\n\nPlease allow exactly " + loadDelaySEC + " for the script to start.");
var loadDelay = setInterval(function() {
  clearInterval(loadDelay);
  document.title = appver + "~";

  document.getElementById("loading").innerHTML = "Loading...<br />Please wait.";
}, loadDelayTime);
