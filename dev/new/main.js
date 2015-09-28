// Copyright Benjamin (c) 2015 - All rights reserved

console.log("Copyright Benjamin (c) 2015 - All rights reserved");

function mainBuildPage() {
  setTimeout(function() {
    document.getElementById("body").style.backgroundColor = "#555555";
    setTimeout(function() {
      document.getElementById("header").style.marginTop = "0%";
      setTimeout(function() {
        document.getElementById("nav").style.opacity = "1";
        setTimeout(function() {
          document.getElementById("welcome").style.opacity = "1";
          setTimeout(function() {
            document.getElementById("news").style.opacity = "1";
          }, 500);
        }, 500);
      }, 1000);
    }, 500);
  }, 500);
}

function pageClose() {
  document.getElementById("body").style.backgroundColor = "#838383";
  document.getElementById("body").style.opacity = "0";
}

function page404() {
  var url = window.location.href;
  console.log("Requested URL: " + url);
  document.getElementById("404x").innerHTML = "Error 404<br />Page was not found";
  setTimeout(function() {
    document.getElementById("body").style.backgroundColor = "#3A3A3A";
    document.getElementById("404y").style.width = "500px";
    setTimeout(function() {
      document.getElementById("404x").style.opacity = "1";
      setTimeout(function() {
        document.getElementById("help").style.opacity = "1";
        setTimeout(function() {
          document.getElementById("url").style.opacity = "1";
        }, 1000);
      }, 300);
    }, 400);
  }, 1);
  document.getElementById("help").innerHTML = "The requested URL was not found!<br /><strong class='red' id='url'>" + url + "</strong><br />Please make sure that you have typed all the characters in correctly and try again. If you are 100% certain all the characters are typed correctly, then the requested page may not exist anymore.<br />< <a onclick='back()'>Back</a> | <a onclick='redirectHome()'>Home</a> >";
  setTimeout(function() {
    setInterval(function() {
      setTimeout(function() {
        document.getElementById("url").style.color = "#FF6E6E";
      }, 1000);
      document.getElementById("url").style.color = "#FF1C1C";
    }, 2000);
  }, 2000);
}

function back() {
  document.getElementById("body").style.opacity = "0";
  setTimeout(function() {
    window.history.back();
  }, 800);
}

function redirectHome() {
  document.getElementById("body").style.opacity = "0";
  document.getElementById("body").style.backgroundColor = "#838383";
  setTimeout(function() {
    window.location = "index.html";
  }, 1000);
}

function redirectInformation() {
  document.getElementById("body").style.opacity = "0";
  document.getElementById("body").style.backgroundColor = "#838383";
  setTimeout(function() {
    window.location = "information.html";
  }, 1000);
}

function redirectContact() {
  document.getElementById("body").style.opacity = "0";
  document.getElementById("body").style.backgroundColor = "#838383";
  setTimeout(function() {
    window.location = "contact.html";
  }, 1000);
}
