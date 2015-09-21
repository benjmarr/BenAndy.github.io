// Copyright Benjamin (c) 2015 - All rights reserved

console.log("Copyright Benjamin (c) 2015 - All rights reserved");
document.title = "Change Something";

function startHover() {
  document.getElementById("startButton").style.backgroundColor = "#3CFF63";
  document.getElementById("startText").style.paddingTop = "25%";
  document.getElementById("body").style.backgroundColor = "#CCCCCC";
  document.getElementById("startButton").style.width = "150px";
  document.getElementById("title").style.fontSize = "550%";
}

function startUnHover() {
  document.getElementById("startButton").style.backgroundColor = "#DEDEDE";
  document.getElementById("startText").style.paddingTop = "20%";
  document.getElementById("body").style.backgroundColor = "#FCFCFC";
  document.getElementById("startButton").style.width = "100px";
  document.getElementById("title").style.fontSize = "500%";
}

function startClick() {
  document.getElementById("titleReset").innerHTML = "<div class='startButtonX' onmouseover='startHover()' id='startButton'><div class='startText' id='startText'>Begin</div></div>";
  document.getElementById("titleSCREEN").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("body").style.backgroundColor = "#FCFCFC";
    setTimeout(function() {
      document.getElementById("titleSCREEN").style.visibility = "hidden";
      document.getElementById("body").style.backgroundColor = "#3E3E3E";
      document.getElementById("titleSCREEN").innerHTML = "";
      document.getElementById("titleSCREEN").style.position = "absolute";
      setTimeout(function() {
        document.getElementById("begin").style.position = "fixed";
        document.getElementById("begin").style.visibility = "visible";
        document.getElementById("beginTITLE").style.marginTop = "1%";
      }, 200);
    }, 500);
  }, 500);
}
