console.info("This page is under creative commons copyright (c) Ben WM, 2015");

function githubImageHover() { // Change "images\github.png" to "images\githubHOVER.png" when mouse hovered
  document.getElementById("githubImage").src = "images/githubHOVER.png";
}

function githubImageNotHover() { // Change "images\githubHOVER.png" to "images\github.png" when mouse is not hovered
  document.getElementById("githubImage").src = "images/github.png";
}
