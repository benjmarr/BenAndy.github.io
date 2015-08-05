// Copyright Benjamin (c) 2015 - All rights reserved

console.log("madi.js file loaded\nCopyright Benjamin WM (c) 2015 - All rights reserved.");

function buildPage() {
  document.title = "Sharnie";
  document.getElementById("sharnie").innerHTML = "Sharnie <a href='' target='_self'><img onmouseover='sharnieHover()' onmouseout='sharnieNotHover()' src='content/smirk.png' alt='Emoji' width='10%' height='10%'></a>";
}

function sharnieHover() {
  document.getElementById("sharnie").innerHTML = "Sharnie <a href='' target='_self'><img onmouseover='sharnieHover()' onmouseout='sharnieNotHover()' src='content/smirkDark.png' alt='Emoji' width='10%' height='10%'></a>";
}

function sharnieNotHover() {
  document.getElementById("sharnie").innerHTML = "Sharnie <a href='' target='_self'><img onmouseover='sharnieHover()' onmouseout='sharnieNotHover()' src='content/smirk.png' alt='Emoji' width='10%' height='10%'></a>";
}
