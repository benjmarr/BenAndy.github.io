console.log("main.js file");

function pageLoad() {
  console.log("Dev> function pageLoad() called");
  document.title = "ChickenMan 2.0";
  document.getElementById("title").innerHTML = "<strong><a href='index.html'>ChickenMan</a></strong>";
  document.getElementById("nav").innerHTML = "<a href='index.html'>Home</a> - <a href='pic.html'>Images</a><br><br>";
}
