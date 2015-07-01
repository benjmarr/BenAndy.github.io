console.log("This page is under creative commons copyright (c) Ben WM, 2015");

var getURL = setInterval(function() {
  document.getElementById("url404").innerHTML = "<br>" + window.location.href;
}, 10);
