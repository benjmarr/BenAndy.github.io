// Copyright Benjamin (c) 2015 - All rights reserved

console.log("Copyright Benjamin (c) 2015 - All rights reserved");

function page404() {
  var url = window.location.href;
  console.log("Requested URL: " + url);
  document.getElementById("404x").innerHTML = "Error 404<br />Page was not found";
}
