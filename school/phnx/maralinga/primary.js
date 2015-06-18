console.info("This website is under creative commons copyright, 2015.\nAny content taken from this website can and will result in legal actions.");
console.warn("You have been warned!");
console.log("");
console.info("Page information gathered from various sites and put together by Vijay Chand, Cody Quarrell and Ben Watts-Marr.");
console.info("Coded by Ben Watts-Marr with wonderful assisstance from Caleb Stewart\nContact him at calebs2500@gmail.com");

function copyright() {
  document.getElementById("word").innerHTML = "<br>This page is under creative commons copyright. If any code is taken from this page you can and most likely will be sued. You have been warned.<br>Creative Commons Copyright &copy; 2015 - Ben Watts-Marr & Caleb Stewart<br><a onclick='copyrightClear()' id='aColourDownside' title='Click me to close the copyright notice...'>Close copyright notice...</a>";
  var purk = setInterval(function() {
    document.getElementById("word").innerHTML = "<a id='aColourDownside' onclick='bibliography()'>Bibliography</a> | <a id='aColourDownside' onclick='copyright()'>Copyright Notice</a>";
    clearInterval(purk);
  }, 30000)
}

function copyrightClear() {
  document.getElementById("word").innerHTML = "<a id='aColourDownside' onclick='bibliography()'>Bibliography</a> | <a id='aColourDownside' onclick='copyright()'>Copyright Notice</a>";
  clearInterval(purk);
}

function bibliography() {
  document.getElementById("word").innerHTML = "<br>List of websites used to gather information for this site...<br>http://www.creativespirits.info/aboriginalculture/history/maralinga-how-british-nuclear-tests-changed-history-forever#axzz3coTK2xuZ<br>http://maps.google.com<br>http://www.naa.gov.au/collection/fact-sheets/fs129.aspx<br>http://www.sahistorians.org.au/175/chronology/september/25-september-1957-maralinga-atomic-tests.shtml<br>http://www.theage.com.au/articles/2003/05/11/1052280486255.html<br>http://www.theaustralian.com.au/arts/review/maralinga-nuclear-tests-frank-walker-shows-no-end-to-the-fallout/story-fn9n8gph-1227038874978<br><a onclick='closeBibli()' id='aColourDownside' title='Click me to close the bibliography!'>Close bibliography list...</a>";
  var chantallesHairyNips = setInterval(function() {
    document.getElementById("word").innerHTML = "<a id='aColourDownside' onclick='bibliography()'>Bibliography</a> | <a id='aColourDownside' onclick='copyright()'>Copyright Notice</a>";
    clearInterval(chantallesHairyNips);
  }, 30000);
}

function closeBibli() {
  document.getElementById("word").innerHTML = "<a id='aColourDownside' onclick='bibliography()'>Bibliography</a> | <a id='aColourDownside' onclick='copyright()'>Copyright Notice</a>";
  clearInterval(chantallesHairyNips);
}

var pageLoad = setInterval(function() {
  document.getElementById("arrow").src = "images/arrow.png";
}, 7500);

var imageHeader = setInterval(function() {
  document.getElementById("header").style.background = "url('images/radiationWarning.jpg')";
  document.getElementById("header").style.backgroundSize = "cover";
  clearInterval(imageHeader);

  var imageHeader1 = setInterval(function() {
    document.getElementById("header").style.background = "url('images/blastSite.jpg')";
    document.getElementById("header").style.backgroundSize = "cover";
    clearInterval(imageHeader1);

    var imageHeader2 = setInterval(function() {
      document.getElementById("header").style.background = "url('images/newsCast.jpg')";
      document.getElementById("header").style.backgroundSize = "cover";
      clearInterval(imageHeader2);

      var imageHeader3 = setInterval(function() {
          document.getElementById("header").style.background = "url('images/bombExplosion.jpg')";
          document.getElementById("header").style.backgroundSize = "cover";
          clearInterval(imageHeader3);
      }, 5000);
    }, 5000);
  }, 5000);
}, 5000);

function browserVersion() {
  var userAg = navigator.userAgent;
  if (userAg.indexOf("Chrome") != -1) {
    console.log("Browser 'Chrome' - Correct browser!");
	} else if (userAg.indexOf("Firefox")!=-1) {
    console.warn("Browser 'Firefox' - Incorrect browser!");
    document.write("Note: You are using Firefox" + navigator.appVersion + ", this webpage will not work on this browser!\nPlease use Google Chrome to view this page. This page is developed around the Google Chrome browser and due to issues with different browsers responding in different ways I have limited this webpage to only Google Chrome.\n\n - Thanks, Ben.");
	} else if (userAg.indexOf("Opera")!=-1) {
    console.warn("Browser 'Opera' - Incorrect browser!");
    document.write("Note: You are using Opera" + navigator.appVersion + ", this webpage will not work on this browser!\nPlease use Google Chrome to view this page. This page is developed around the Google Chrome browser and due to issues with different browsers responding in different ways I have limited this webpage to only Google Chrome.\n\n - Thanks, Ben.");
	} else if (userAg.indexOf("MSIE")!=-1) {
    console.warn("Browser 'Internet Explorer' - Incorrect browser!");
    document.write("Note: You are using Internet Explorer" + navigator.appVersion + ", this webpage will not work on this browser!\nPlease use Google Chrome to view this page. This page is developed around the Google Chrome browser and due to issues with different browsers responding in different ways I have limited this webpage to only Google Chrome.\n\n - Thanks, Ben.");
	} else if (userAg.indexOf("Safari")!=-1) {
    console.warn("Browser 'Safari' - Incorrect browser!");
    document.write("Note: You are using Safari" + navigator.appVersion + ", this webpage will not work on this browser!\nPlease use Google Chrome to view this page. This page is developed around the Google Chrome browser and due to issues with different browsers responding in different ways I have limited this webpage to only Google Chrome.\n\n - Thanks, Ben.");
	} else {
    console.warn("Browser 'Unknown' - Incorrect browser!");
    document.write("Note: You are using an unknown browser, this webpage will not work on this browser!\nPlease use Google Chrome to view this page. This page is developed around the Google Chrome browser and due to issues with different browsers responding in different ways I have limited this webpage to only Google Chrome.\n\n - Thanks, Ben.");
	}
}

/* Muskequeers easter-egg */
function muskequeers() {
  document.getElementById("muskInfo").src = "images/blank.png";
  document.getElementById("muskText").innerHTML = "VIJAY, CODY &amp; BEN";

  var ttm = setInterval(function() {
    document.getElementById("muskText").innerHTML = "THE THREE MUSKEQUEERS";
    clearInterval(ttm);
  }, 2000);

  var musk = setInterval(function() {
    document.getElementById("muskText").innerHTML = "";
    document.getElementById("muskInfo").src = "images/1.png";
    clearInterval(musk);
  }, 5000);
}
/* End Muskequeers */
/* EVERYTHING ABOVE IS LINE IS CREDITED TO BEN WATTS-MARR */
/* The Arrow Hover Picutre Change Magic Shit */
/* Credit to Caleb Stewart */
function arrowHoverIn() {
  document.getElementById("arrow").src = "images/arrowHover.png";
}
function arrowHoverOut() {
  document.getElementById("arrow").src = "images/arrow.png";
}
/* End of magical arrow hover stuff */

/* Cover up */
function shrinkCover() {
  document.getElementById("document").style.overflow = "visible";
  document.getElementById("header").className = "up";
  document.getElementById("pageSubHeading").className = "up";
  document.getElementById("arrow").className = "up";
  document.getElementById("arrow").onclick = expandCover;
  document.getElementById("body").className = "up";
}
/* End of up cover */

/* Cover down */
function expandCover() {
  document.getElementById("document").style.overflow = "hidden";
  document.getElementById("header").className = "down";
  document.getElementById("pageSubHeading").className = "down";
  document.getElementById("arrow").className = "down";
  document.getElementById("arrow").onclick = shrinkCover;
  document.getElementById("body").className = "down";
}
/* End of down cover */
