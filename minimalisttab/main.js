// Copyright Benjamin Developments (c) 2016-2017 - All rights reserved

window.onload = function() {
  document.getElementById("body").style.backgroundColor = "#BDBDBD";
  setTimeout(function() {
    document.getElementById("1").style.opacity = "1";
    setTimeout(function() {
      document.getElementById("2").style.opacity = "1";
      setTimeout(function() {
        document.getElementById("3").style.opacity = "1";
        setTimeout(function() {
          document.getElementById("3").style.fontSize = "200%";
        }, 200);
      }, 300);
    }, 300);
  }, 200);
};
