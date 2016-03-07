// Copyright Benjamin (c) 2015 - All rights reserved

var MSGgreeting = function() {
  var options = Array("<br />Hello.", "<br />Greetings.");
  var selection = options[Math.floor(Math.random() * options.length)];
  return selection;
};

var MSGstartup = function() {
  var options = Array("> Loading... <br />> Please wait.", "> Starting up... <br />> Please wait.");
  var selection = options[Math.floor(Math.random() * options.length)];
  writeMsg("greeting");
  return selection;
};

var writeMsg = function(type) {
  if (type === "greeting") {
    document.getElementById("II").innerHTML = MSGgreeting();
  };

  if (type === "goodbye") {

  };

  if (type === "startup") {
    document.getElementById("I").innerHTML = MSGstartup();
  };
};

writeMsg("startup");
