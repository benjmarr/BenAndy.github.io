// Copyright Benjamin (c) 2015 - All rights reserved

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}

setTimeout(function() {
  document.getElementById("x").innerHTML = "> Loading...<br /><br />";
  setTimeout(function() {
    document.getElementById("xx").innerHTML = "> Please wait :)<br /><br />";
    setTimeout(function() {
      document.getElementById("xxx").innerHTML = "><br /><br />><br /><br />> " + navigator.appVersion + "<br /><br />";
      setTimeout(function() {
        document.getElementById("xxxx").innerHTML = "> " + navigator.platform + "<br /><br />";
        setTimeout(function() {
          document.getElementById("xxxxx").innerHTML = "> " + navigator.userAgent + "<br /><br />";
          setTimeout(function() {
            document.getElementById("xxxxxx").innerHTML = "> " + navigator.appVersion + "<br /><br />";
            setTimeout(function() {
              document.getElementById("xxxxxxx").innerHTML = "> Tracing IP...<br /><br />";
              setTimeout(function() {
                document.getElementById("xxxxxxxx").innerHTML = "> Done! Thanks for your contribution.";
              }, 2000);
            }, 150);
          }, 300);
        }, 150);
      }, 200);
    }, 2000);
  }, 1000);
}, 300);
