// Copyright Benjamin Developments (c) 2017 - All rights reserved

function backgroundPulse() {
  setInterval(function() {
    $(".header").css({"background-color": "#585858"});
    setTimeout(function() {
      $(".header").css({"background-color": "#2E2E2E"});
    }, 4500);
  }, 9000);
};

window.onload = function() {
  setTimeout(function() {
    $(".header").css({"background-color": "#424242"});
    backgroundPulse();
  }, 300);
};
