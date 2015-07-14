console.log("Creative commons copyright (c) Benjamin WM, 2015");

function getInfo() {
  document.getElementById("browserVersion").innerHTML = "<strong>Version:</strong> " + navigator.appVersion;
  console.log("Version: " + navigator.appVersion);
  document.getElementById("browserCodeName").innerHTML = "<strong>Code Name:</strong> " + navigator.appCodeName;
  console.log("Code name: " + navigator.appCodeName);
  document.getElementById("cookieEnabled").innerHTML = "<strong>Cookies Enabled:</strong> " + navigator.cookieEnabled;
  console.log("Cookies enabled: " + navigator.cookieEnabled);
  document.getElementById("language").innerHTML = "<strong>Langauge:</strong> " + navigator.language;
  console.log("Langauge: " + navigator.language);
  document.getElementById("online").innerHTML = "<strong>Online:</strong> " + navigator.onLine;
  console.log("Online: " + navigator.onLine);
  document.getElementById("platform").innerHTML = "<strong>Platform:</strong> " + navigator.platform;
  console.log("Platform: " + navigator.platform);
  document.getElementById("product").innerHTML = "<strong>Product:</strong> " + navigator.product;
  console.log("Product: " + navigator.product);
  document.getElementById("userAgent").innerHTML = "<strong>User Agent:</strong> " + navigator.userAgent;
  console.log("User agent: " + navigator.userAgent);
  document.getElementById("java").innerHTML = "<strong>Java Enabled:</strong> " + navigator.javaEnabled();
  console.log("Java enabled: " + navigator.javaEnabled());
  document.getElementById("maxTouchPoints").innerHTML = "<strong>Max Simultaneous Touch Contacts:</strong> " + navigator.maxTouchPoints;
}
