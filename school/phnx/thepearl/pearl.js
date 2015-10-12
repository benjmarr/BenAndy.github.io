// Copyright Benjamin (c) 2015 - All rights reserved

console.log("Copyright Benjamin (c) 2015 - All rights reserved");

setTimeout(function() {
  document.getElementById("body").style.opacity = "1";
  setTimeout(function() {
    document.getElementById("body").style.backgroundColor = "#E8E8E8";
  }, 500);
}, 1000);
