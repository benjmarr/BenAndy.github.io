// Copyright Benjamin (c) 2015 - All rights reserved

console.log("madi.js file loaded\nCopyright Benjamin WM (c) 2015 - All rights reserved.");

function buildPage() {
  document.title = "Emma";
  document.getElementById("emma").innerHTML = "Emma <a href='' target='_self'><img onmouseover='emmaHover()' onmouseout='emmaNotHover()' src='content/okay.png' alt='Emoji' width='10%' height='10%'></a>";
}

function emmaHover() {
  document.getElementById("emma").innerHTML = "Emma <a href='' target='_self'><img onmouseover='emmaHover()' onmouseout='emmaNotHover()' src='content/okayDark.png' alt='Emoji' width='10%' height='10%'></a>";
}

function emmaNotHover() {
  document.getElementById("emma").innerHTML = "Emma <a href='' target='_self'><img onmouseover='emmaHover()' onmouseout='emmaNotHover()' src='content/okay.png' alt='Emoji' width='10%' height='10%'></a>";
}
