console.info("This page is under creative commons copyright (c) Ben WM, 2015");
function buildPage() {
  // Main page title
  document.getElementById("title").innerHTML = "<a href='index.html'>Benjamin</a>";
  // Page title tag
  document.getElementById("docTitle").innerHTML = "Benjamin";
  // Page footer
  document.getElementById("footer").innerHTML = "<div id='footerImage'><a href='http://benandy.github.io/github.html' target='_blank'><img height='30' width='30' title='GitHub!' id='githubImage' src='images/github.png' onmouseover='githubImageHover()' onmouseout='githubImageNotHover()'></a></div>Copyright &copy; Ben Andy, 2015";
  // Links under title
  document.getElementById("siteLinks").innerHTML = "<a href='index.html'>Home</a> / <a href='about.html'>About</a> / <a href='projects.html'>Projects</a> / <a href='contact.html'>Contact</a>";
}

function githubImageHover() { // Change "images\github.png" to "images\githubHOVER.png" when mouse hovered
  document.getElementById("githubImage").src = "images/githubHOVER.png";
}

function githubImageNotHover() { // Change "images\githubHOVER.png" to "images\github.png" when mouse is not hovered
  document.getElementById("githubImage").src = "images/github.png";
}
