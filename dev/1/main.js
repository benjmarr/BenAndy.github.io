console.log("main.js file loaded\nThis is the main JavaScript file for the website.\nMost, if not all, pages under this domain link to this JavaScript document.\nYou can view the JavaScript source code here > https://benandy.github.io/main.js");
console.warn("Copyright Benjamin (c) 2015 - All Rights Reserved.");

var doc = document; // USE "doc" as "document"
var userAg = navigator.userAgent; // USE "userAg" as "navigator.userAgent"

function buildPage() { //Make the title, page links(navbar) & footer
  console.log("buildPage() function called");
  doc.title = "Benjamin!";
  doc.getElementById("title").innerHTML = "<a href='index.html'>Benjamin</a>";
  doc.getElementById("siteLinks").innerHTML = "<a href='index.html'>Home</a> - <a href='about.html'>About</a> - <a href='projects.html'>Projects</a> - <a href='contact.html'>Contact</a><br><br>";
  doc.getElementById("topHeader").innerHTML = "Copyright Benjamin &copy; 2015 - All Rights Reserved.<img src='images/x.png' onmouseover='copyrightHover()' onmouseout='copyrightUnHover()' onclick='copyrightClose()' align='right' alt='Close the copyright notice' id='copyrightImage'>";
}

function copyrightClose() { // Close the copyright notice
  console.log("copyrightClose() function called");
  doc.getElementById("topHeader").innerHTML = "<a target='_blank' href='http://benandy.github.io/github'>GitHub</a> - <a href='http://benandy.github.io'>Website</a> - <a href='contact.html'>Contact</a> - <a target='_blank' href='http://benandy.github.io/randoms/ytplay/original'>Music Playlist</a> - <a href='' onclick='reloadPage()'>Reload Page</a>";
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

function noUseChome() { //Hides the useChrome window when useChrome() is not called
  console.log("noUseChome() function called");
  doc.getElementById("useChrome").style.height = "0px";
  doc.getElementById("useChrome").style.width = "0px";
  doc.getElementById("useChrome").style.visibility = "hidden";
  doc.getElementById("useChrome").innerHTML = "";
}

function reloadPage() { //When called, the page will be reloaded
  console.log("reloadPage() function called");
  window.location = window.location.href;
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

function redirectGithubDOTcomSLASHbenandy() { // Redirect to "github.com/BenAndy"
  console.log("redirectGithubDOTcomSLASHbenandy() function called");
  window.location = "http://github.com/BenAndy/";
}

function redirectTwitterDOTcomSLASHbenUNDERSCOREandymc() { // Redirect to "twitter.com/Ben_AndyMC"
  console.log("redirectTwitterDOTcomSLASHbenUNDERSCOREandymc() function called");
  window.location = "http://twitter.com/Ben_AndyMC/";
}

function redirectYoutubeDOTcomSLASHbenandygaming() { // Redirect to "youtube.com/BenAndyGaming"
  console.log("redirectYoutubeDOTcomSLASHbenandygaming() function called");
  window.location = "http://youtube.com/BenAndyGaming/";
}

function redirectRandomsSLASHmadi() { // Redirect to "benandy.github.io/randoms/madi"
  console.log("redirectRandomsSLASHmadi() function called");
  window.location = "http://benandy.github.io/randoms/madi";
}

function redirectRandomsSLASHytplaySLASHchill() { // Redirect to "benandy.github.io/randoms/ytplay/chill"
  console.log("redirectRandomsSLASHytplaySLASHchill() function called");
  window.location = "http://benandy.github.io/randoms/ytplay/chill";
}

function redirectThechunkDOTnetSLASHforumSLASH6637() { // Redirect to "thechunk.net/forum/6637"
  console.log("redirectThechunkDOTnetSLASHforumSLASH6637() function called");
  window.location = "https://thechunk.net/forum/6637";
}

function redirectDriveDOTgoogleDOTcomSLASHopenid1h3kv8CFr58bfykv87cOyaBmhehZRoRdaBoLO8ejHZQauthuser() { // Redirect to "drive.google.com/open?id=1h3kv8C-Fr58bfykv87cOyaBmhehZRoRdaBoLO8ejHZQ&authuser=0"
  console.log("redirectDriveDOTgoogleDOTcomSLASHopenid1h3kv8CFr58bfykv87cOyaBmhehZRoRdaBoLO8ejHZQauthuser() function called");
  window.location = "https://drive.google.com/open?id=1h3kv8C-Fr58bfykv87cOyaBmhehZRoRdaBoLO8ejHZQ&authuser=0";
}

function redirectRandomsSLASHytplay() { // Redirect to "benandy.github.io/randoms/ytplay"
  console.log("redirectRandomsSLASHytplay() function called");
  window.location = "http://benandy.github.io/randoms/ytplay";
}

function redirectRandomsSLASHautoplug() { // Redirect to "randoms/autoplug"
  console.log("redirectRandomsSLASHautoplug() function called");
  window.location = "http://benandy.github.io/randoms/autoplug";
}

function redirectDevSLASH2() { // Redirect to "dev/2"
  console.log("redirectDevSLASH2() function called");
  window.location = "http://benandy.github.io/dev/2";
}

function redirectThechunkDOTnetSLASHforumSLASH6549() { // Redirect to "thechunk.net/forum/6549"
  console.log("redirectThechunkDOTnetSLASHforumSLASH6549() function called");
  window.location = "https://thechunk.net/forum/6549";
}

function redirectRandomsSLASHchickenman2() { // Redirect to "benandy.github.io/randoms/ChickenMan2"
  console.log("redirectRandomsSLASHchickenman2() function called");
  window.location = "http://benandy.github.io/randoms/ChickenMan2";
}
