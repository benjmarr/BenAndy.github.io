// Copyright Benjamin (c) 2015 - All rights reserved

console.log("disco.js file loaded\nCopyright Benjamin (c) 2015 - All rights reserved");

function start() {
  document.getElementById("warn").style.opacity = "0";
  document.getElementById("warn").style.height = "0%";
  document.getElementById("warn").innerHTML = "";
  document.getElementById("x").style.opacity = "1";
  document.getElementById("xx").style.opacity = "1";
  document.getElementById("time").style.opacity = "1";
  setTimeout(function() {
    setTimeout(function() {
      document.getElementById("time").innerHTML = "4";
      setTimeout(function() {
        document.getElementById("time").innerHTML = "3";
        setTimeout(function() {
          document.getElementById("time").innerHTML = "2";
          document.getElementById("x").style.opacity = "0";
          setTimeout(function() {
            document.getElementById("time").innerHTML = "1";
            document.getElementById("xx").style.opacity = "0";
            setTimeout(function() {
              document.getElementById("time").innerHTML = "0";
              document.getElementById("time").style.opacity = "0";
              var disco = setInterval(function() {
                var change = Math.floor((Math.random() * 7) + 1);
                if (change == 1) {
                  document.getElementById("body").style.backgroundColor = "red";
                };

                if (change == 2) {
                  document.getElementById("body").style.backgroundColor = "orange";
                };

                if (change == 3) {
                  document.getElementById("body").style.backgroundColor = "yellow";
                };

                if (change == 4) {
                  document.getElementById("body").style.backgroundColor = "lime";
                };

                if (change == 5) {
                  document.getElementById("body").style.backgroundColor = "black";
                };

                if (change == 6) {
                  document.getElementById("body").style.backgroundColor = "blue";
                };

                if (change == 7) {
                  document.getElementById("body").style.backgroundColor = "purple";
                };
              }, 10);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 500);
}
