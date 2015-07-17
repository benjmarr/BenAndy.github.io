console.log("main.js file loaded");
console.log("This is the main JavaScript file for the website.");

function githubImageHover() { // Change "images\github.png" to "images\githubHOVER.png" when mouse hovered
  console.log("githubImageHover() function called");
  document.getElementById("githubImage").src = "images/githubHOVER.png";
}

function githubImageNotHover() { // Change "images\githubHOVER.png" to "images\github.png" when mouse is not hovered
  console.log("githubImageNotHover() function claled");
  document.getElementById("githubImage").src = "images/github.png";
}


function buildPage() {
  console.log("buildPage() function called");
  // Page title
  document.getElementById("title").innerHTML = "<a href='index.html'>Benjamin</a>";
  // Page title tag
  document.title = "Benjamin!";
  // Page footer
  document.getElementById("footer").innerHTML = "<div id='footerImage'><a href='http://benandy.github.io/github.html' target='_blank'><img height='30' width='30' title='GitHub!' id='githubImage' src='images/github.png' onmouseover='githubImageHover()' onmouseout='githubImageNotHover()'></a></div>Copyright &copy; Ben Andy, 2015";
  // Links under title
  document.getElementById("siteLinks").innerHTML = "<a href='index.html'>Home</a> / <a href='about.html'>About</a> / <a href='projects.html'>Projects</a> / <a href='contact.html'>Contact</a>";
}

function page404() {
  console.log("page404() function called");
  var getURL = setInterval(function() {
    document.getElementById("url404").innerHTML = "<br>" + window.location.href;
    document.title = "Ben - 404";
  }, 10);
}
