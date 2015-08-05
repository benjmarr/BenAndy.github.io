// Copyright Benjamin (c) 2015 - All rights reserved

console.log("madi.js file loaded\nCopyright Benjamin WM (c) 2015 - All rights reserved.");

function buildPage() {
  document.title = "Sophie";
  document.getElementById("sophie").innerHTML = "Sophie <a href='http://benandy.github.io/randoms/madi' target='_self'><img onmouseover='sophHover()' onmouseout='sophNotHover()' src='content/cat.png' alt='Emoji' width='10%' height='10%'></a>";
}

function sophHover() {
  document.getElementById("sophie").innerHTML = "Sophie <a href='http://benandy.github.io/randoms/madi' target='_self'><img onmouseover='sophHover()' onmouseout='sophNotHover()' src='content/catDark.png' alt='Emoji' width='10%' height='10%'></a>";
}

function sophNotHover() {
  document.getElementById("sophie").innerHTML = "Sophie <a href='http://benandy.github.io/randoms/madi' target='_self'><img onmouseover='sophHover()' onmouseout='sophNotHover()' src='content/cat.png' alt='Emoji' width='10%' height='10%'></a>";
}
