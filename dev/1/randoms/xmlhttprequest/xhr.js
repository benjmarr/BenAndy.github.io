console.log("xhr.js file laoded\nCopyright Benjamin (c) 2015 - All rights reserved.");

document.title = "XML HTTP Requests"

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://benandy.github.io", false);
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);
