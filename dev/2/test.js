console.log("Creative commons copyright (c) Benjamin WM, 2015");

function load() {

}

function getInfo() {
  document.getElementById("cancelInfoGet").innerHTML = "<button onclick='stopGather()'>Re-gather browser<br>information</button><br><br>";
  document.getElementById("results").innerHTML = "Gathering results...<br>Please wait!<br><br>";

  document.getElementById("browserVersion").innerHTML = "<strong>Version:</strong> " + navigator.appVersion;
  document.getElementById("browserCodeName").innerHTML = "<strong>Code Name:</strong> " + navigator.appCodeName;
  document.getElementById("cookieEnabled").innerHTML = "<strong>Cookies Enabled:</strong> " + navigator.cookieEnabled;
  document.getElementById("language").innerHTML = "<strong>Langauge:</strong> " + navigator.language;
  document.getElementById("online").innerHTML = "<strong>Online:</strong> " + navigator.onLine;
  document.getElementById("platform").innerHTML = "<strong>Platform:</strong> " + navigator.platform;
  document.getElementById("product").innerHTML = "<strong>Product:</strong> " + navigator.product;
  document.getElementById("userAgent").innerHTML = "<strong>User Agent:</strong> " + navigator.userAgent;
  document.getElementById("java").innerHTML = "<strong>Java Enabled:</strong> " + navigator.javaEnabled();
}

function stopGather() {
  window.location = "";
}
