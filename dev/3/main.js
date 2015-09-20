// Copyright Benjamin (c) 2015 - All rights reserved

console.log("Copyright Benjamin (c) 2015 - All rights reserved");
document.title = "Change Something";

function startHover() {
  document.getElementById("startButton").style.backgroundColor = "#3CFF63";
  document.getElementById("startText").style.paddingTop = "25%";
  document.getElementById("body").style.backgroundColor = "#CCCCCC";
  document.getElementById("title").style.color = "#2BEBFF";
  document.getElementById("startButton").style.width = "150px";
  document.getElementById("title").style.fontSize = "550%";
}

function startUnHover() {
  document.getElementById("startButton").style.backgroundColor = "#DEDEDE";
  document.getElementById("startText").style.paddingTop = "20%";
  document.getElementById("body").style.backgroundColor = "#FCFCFC";
  document.getElementById("title").style.color = "#000000";
  document.getElementById("startButton").style.width = "100px";
  document.getElementById("title").style.fontSize = "500%";
}

function startClick() {

}
