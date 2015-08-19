// #####################################
// # Copyright Ben Watts-Marr (c) 2015 #
// #####################################

console.log("main.js file loaded\nCopyright Ben Watts-Marr (c) 2015");

var pageLoad = setInterval(function() {
  clearInterval(pageLoad);
  document.getElementById("title").innerHTML = "<a href='index.html'>Henry's Cafe</a>&nbsp&nbsp<a href='index.html'><span onmouseover='logoHover()' onmouseout='logoOut()'><img id='titleLogoImage' src='content/logo.png' alt='Logo' height='3%' width='3%'></a></span>";
  document.getElementById("nav").innerHTML = "<a href='index.html'>Home</a> - <a href='menu.html'>Menu</a> - <a href='about.html'>About</a> - <a href='contact.html'>Contact</a>";
  document.getElementById("copyright").innerHTML = "Copyright Ben Watts-Marr &copy; 2015";
  var headerChange = setInterval(function() {
    clearInterval(headerChange);
    document.getElementById("copyright").innerHTML = "<a onclick='windowLocationHome()'>Home</a> - <a onclick='windowLocationMenu()'>Menu</a> - <a onclick='windowLocationAbout()'>About</a> - <a onclick='windowLocationContact()'>Contact</a> - <a onclick='reloadPage()'>Reload Page</a>"
  }, 10000);
}, 10);

var userAg = navigator.userAgent;
var map = setInterval(function() {
  clearInterval(map);
  if (userAg.indexOf("Sarafi") != -1) {
    document.getElementById("map").innerHTML = "<a href='https://www.google.com/maps/d/viewer?mid=zQ73pULRxiR0.kDii_js51sbw' target='_blank'>Our Location: CLICK HERE</a>";
  } else {
    console.log(userAg);
  }
}, 1000);

function xHoverHOVER() {
  console.log("xHoverHOVER() function called");
  document.getElementById("formSentImage").src = "http://benandy.github.io/dev/1/images/xHover.png";
}

function xHoverOUT() {
  console.log("xHoverOUT() function called");
  document.getElementById("formSentImage").src = "http://benandy.github.io/dev/1/images/x.png";
}

function xHoverCLOSE() {
  console.log("xHoverCLOSE() function called");
  document.getElementById("contactFormSent").style.visibility = "hidden";
  document.getElementById("contactFormSent").innerHTML = "";
  document.getElementById("nope").innerHTML = "";
}

function contacFormSend() {
  console.log("contacFormSend() function called");
  window.location = "scontact.html";
}

function windowLocationHome() {
  console.log("windowLocationHome() function called");
  window.location = "home.html";
}

function windowLocationMenu() {
  console.log("windowLocationMenu() function called");
  window.location = "menu.html";
}

function windowLocationAbout() {
  console.log("windowLocationAbout() function called");
  window.location = "about.html";
}

function windowLocationContact() {
  console.log("windowLocationContact() function called");
  window.location = "contact.html";
}

function reloadPage() {
  console.log("reloadPage() function called");
  window.location=window.location.href;
}

function logoHover() {
  console.log("logoHover() function called");
  document.getElementById("titleLogoImage").src = "content/logoDark.png";
}

function logoOut() {
  console.log("logoOut() function called");
  document.getElementById("titleLogoImage").src = "content/logo.png";
}
