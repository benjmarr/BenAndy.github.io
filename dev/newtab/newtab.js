// #####################################################
// # Copyright Benjamin (c) All rights reserved - 2015 #
// #####################################################

document.title = "New Tab";

document.getElementById("output").innerHTML = Math.random();

var loadDelay = setInterval(function() {
  clearInterval(loadDelay);
  if (Math.random() < 0.5) {
    document.body.style.background = "url('content/background/photo-1433785124354-92116416b870.jpg')";
  } else {
    document.body.style.background = "url('content/background/photo-1433785124354-92116416b870.jpg')";
  }
}, 10);
