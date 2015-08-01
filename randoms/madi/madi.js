console.log("madi.js file loaded\nCopyright Benjamin WM (c) 2015 - All rights reserved.");

function buildPage() {
  document.title = "Madison";
  document.getElementById("copyright").innerHTML = "Copyright Benjamin &copy; 2015 - All rights reserved.";
  document.getElementById("madison").innerHTML = "Madison <img onmouseover='madiHover()' onmouseout='madiNotHover()' src='content/desk.png' alt='Emoji' width='10%' height='10%'>";
}

function madiHover() {
  document.getElementById("madison").innerHTML = "Madison <img onmouseover='madiHover()' onmouseout='madiNotHover()' src='content/deskDark.png' alt='Emoji' width='10%' height='10%'>";
}

function madiNotHover() {
  document.getElementById("madison").innerHTML = "Madison <img onmouseover='madiHover()' onmouseout='madiNotHover()' src='content/desk.png' alt='Emoji' width='10%' height='10%'>";
}
