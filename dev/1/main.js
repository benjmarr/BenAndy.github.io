console.log("main.js file loaded");
console.log("This is the main JavaScript file for the website.");

var doc = document;
var userAg = navigator.userAgent;

function buildPage() { //Make the title, page links(navbar) & footer
  console.log("buildPage() function called");
  doc.getElementById("title").innerHTML = "<a href='index.html'>Benjamin</a>";
  doc.title = "Benjamin!";
  doc.getElementById("footer").innerHTML = "<div id='footerImage'><a href='http://benandy.github.io/github.html' target='_blank'><img height='30' width='30' title='GitHub!' id='githubImage' src='images/github.png' onmouseover='githubImageHover()' onmouseout='githubImageNotHover()'></a></div>Copyright &copy; Ben Andy, 2015";
  doc.getElementById("siteLinks").innerHTML = "<a href='index.html'>Home</a> / <a href='about.html'>About</a> / <a href='projects.html'>Projects</a> / <a href='contact.html'>Contact</a><br><br>";
}

function useChrome() { // Alert the user if they're not using Chrome
  console.log("useChrome() function called");
  doc.getElementById("useChrome").innerHTML = "<sup><a onclick='closeUseChrome()'>Click here to close this message</a></sup> This website was coded and based around the Google Chrome browser. If you use other browsers, don't expect all the feature to work correctly.<br><br>You can download the Google Chrome browser <a href='http://www.google.com/chrome/' target='_blank'>HERE</a>";
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

function githubImageHover() { // Change "images\github.png" to "images\githubHOVER.png" when mouse hovered
  console.log("githubImageHover() function called");
  doc.getElementById("githubImage").src = "images/githubHOVER.png";
}

function githubImageNotHover() { // Change "images\githubHOVER.png" to "images\github.png" when mouse is not hovered
  console.log("githubImageNotHover() function claled");
  doc.getElementById("githubImage").src = "images/github.png";
}

function page404() {
  console.log("page404() function called");
  var getURL = setInterval(function() {
    doc.getElementById("url404").innerHTML = "<br>" + window.location.href;
    doc.title = "Ben - 404";
  }, 10);
}
