console.log("main.js file");

function pageLoad() {
  console.log("Dev> function pageLoad() called");
  document.title = "ChickenMan 2.0";
  document.getElementById("title").innerHTML = "<strong>ChickenMan</strong>";

  // Index information
  document.getElementById("info").innerHTML = "Welcome to the ChickMan site..."
}
