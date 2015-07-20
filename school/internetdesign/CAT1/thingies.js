console.log("Webpage> UserAlert> JavaScript file loaded.");
//TODO NOTE fix "content/githubHOVER.png" background with Adobe Photoshop

function makeHeader() {  // Make the header
  console.log("Webpage> DevAlert> function makeHeader() called.");
  document.getElementById("header").innerHTML = "<a href='index.html'>Benjamin</a>";
  document.getElementById("linkOptions").innerHTML = "<a href='index.html'>Home</a> / <a href='about.html'>About</a> / <a href='hobbies.html'>Hobbies</a> / <a href='subjects.html'>Subjects</a>";
  document.getElementById("footer").innerHTML = "<div id='footerImage'><a href='http://benandy.github.io/github' target='_blank'><img onmouseover='githubHover()' id='githubimage' onmouseout='githubOut()' src='content/github.png' width='35' height='35'></a></div><center><a href='http://benandy.github.io' target='_blank'>Design by Ben Watts-Marr</a></center>";
}

function indexPageLoad() {
  console.log("Webpage> DevAlert> function indexPageLoad() called.");
  document.getElementById("browserVersion").innerHTML = navigator.appVersion;

  var userAg = navigator.userAgent;
  if (userAg.indexOf("Chrome") != -1) {
    document.getElementById("pageLoad").style.visibility = "hidden";
    document.getElementById("pageLoad").style.height = "0px";
	}
}

function indexLoadClose() {
  console.log("Webpage> DevAlert> function indexLoadClose() called.");
  document.getElementById("pageLoad").style.visibility = "hidden";
  document.getElementById("pageLoad").style.height = "0px";
}

function secondaryFunction() { // Secondary main page function
  console.log("Webpage> DevAlert> function secondaryFunction() called.");
  document.getElementById("indexLinkPageInfo").innerHTML = "&quot;<a href='index.html'>Home</a> / <a href='about.html'>About</a> / <a href='hobbies.html'>Hobbies</a> / <a href='subjects.html'>Subjects</a>&quot;";
}

function githubHover() {  //When mouse over the GitHub image in footer
  console.log("Webpage> DevAlert> function githubHover() called.");
  document.getElementById("githubimage").src = "content/githubHOVER.png";
}

function githubOut() {  //When mouse leaves the GitHub image in footer
  console.log("Webpage> DevAlert> function githubOut() called.");
  document.getElementById("githubimage").src = "content/github.png";
}
