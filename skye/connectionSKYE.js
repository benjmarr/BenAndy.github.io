// Copyright Benjamin Developments (c) 2016 - All rights reserved

document.getElementById("unsplash").innerHTML = "Connected";
styleOpacity(2000, "unsplash", "0");
setTimeout(function() {
  document.getElementById("unsplash").innerHTML = "Images provided by <a href='https://unsplash.com' target='_blank'>unsplash.com</a>";
}, 2001);
styleOpacity(2002, "unsplash", "1");
