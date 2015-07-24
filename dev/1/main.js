console.log("main.js file loaded");
console.log("This is the main JavaScript file for the website.");
console.warn("Copyright Ben WM (c) 2015");

var doc = document; // USE "doc" as "document"
var userAg = navigator.userAgent; // USE "userAg" as "navigator.userAgent"

function buildPage() { //Make the title, page links(navbar) & footer
  console.log("buildPage() function called");
  doc.title = "Benjamin!";
  doc.getElementById("title").innerHTML = "<a href='index.html'>Benjamin</a>";
  doc.getElementById("siteLinks").innerHTML = "<a href='index.html'>Home</a> - <a href='about.html'>About</a> - <a href='projects.html'>Projects</a> - <a href='contact.html'>Contact</a><br><br>";
  doc.getElementById("topHeader").innerHTML = "Copyright Ben WM &copy; 2015<img src='images/x.png' onmouseover='copyrightHover()' onmouseout='copyrightUnHover()' onclick='copyrightClose()' align='right' alt='Close the copyright notice' id='copyrightImage'>";
}

function copyrightClose() { // Close the copyright notice
  console.log("copyrightClose() function called");
  doc.getElementById("topHeader").innerHTML = "<a target='_blank' href='http://benandy.github.io/github'>GitHub</a> - <a href='http://benandy.github.io'>Website</a> - <a href='contact.html'>Contact</a> - <a target='_blank' href='http://benandy.github.io/randoms/ytplay/original'>Music Playlist</a>";
}

function useChrome() { // Alert the user if they're not using Chrome
  console.log("useChrome() function called");
  doc.getElementById("useChrome").innerHTML = "<sup><a onclick='closeUseChrome()'>Click here to close this message</a></sup> This website was coded and based around the Google Chrome browser. If you use other browsers, don't expect all the features to work correctly.<br><br>You can download the Google Chrome browser <a href='http://www.google.com/chrome/' target='_blank'>HERE</a>";
  if (userAg.indexOf("Chrome") != -1) {
    doc.getElementById("useChrome").style.height = "0px";
    doc.getElementById("useChrome").style.width = "0px";
    doc.getElementById("useChrome").style.visibility = "hidden";
    doc.getElementById("useChrome").innerHTML = "";
	}
}

function closeUseChrome() { // Close the warn window about using Chrome
  console.log("closeUseChrome() function called");
  doc.getElementById("useChrome").style.height = "0px";
  doc.getElementById("useChrome").style.width = "0px";
  doc.getElementById("useChrome").style.visibility = "hidden";
  doc.getElementById("useChrome").innerHTML = "";
}

function page404() { // Get the 404 omnibox location
  console.log("page404() function called");
  var getURL = setInterval(function() {
    doc.getElementById("url404").innerHTML = "<br>" + window.location.href;
    doc.title = "Ben - 404";
    clearInterval(getURL);
  }, 10);
}

function copyrightUnHover() { // This is called when the mouse leaves the close copyright notice image
  console.log("copyrightUnHover() function called");
  doc.getElementById("copyrightImage").src = "images/x.png";
}

function copyrightHover() { // This is called when the mouse hoveres over the close copyright notice image
  console.log("copyrightHover() function called");
  doc.getElementById("copyrightImage").src = "images/xHover.png";
}
