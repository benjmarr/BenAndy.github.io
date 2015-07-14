console.log("main.js loaded.");

function buildPage() {
  console.log("function buildPage() called");
}

function pageOffline() {
  console.log("function pageOffline() called");
  function pageOnline() {
    console.log("function pageOnline() called");
  }
}
