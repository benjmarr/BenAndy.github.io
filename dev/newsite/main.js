// Copyright Benjamin Developments 2015-2017 (c) All rights reserved
var version = "3.0.4b";
console.log("Website version: v" + version);

// Cookie handlers
function sc(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};
function gc(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  };
  return "";
};

if (dsu) {

};

// Window on load
window.onload = function() {
  $(".footer").html("<br /><br />Copyright Benjamin Developments 2015-2017 &copy; All rights reserved<br /><a href='https://benandy.github.io/cookie.html' target='_blank'>Cookie Policy</a> - <a href='https://benandy.github.io/privacy.html' target='_blank'>Privacy Policy</a> - <a href='https://benandy.github.io/terms' target='_blank'>Terms and Conditions</a>");
  if (dsu) {
    $(".title").animate({"margin-top": "0px"}, 500);
    setTimeout(function() {
      $("header").animate({"opacity": "0.2"}, 500);
      $(".footer").animate({"opacity": "1"}, 2000);
      setTimeout(function() {
        $(".navBar").animate({"margin-left": "0px"}, 600);
        setTimeout(function() {
          $(".subTitle").animate({"margin-left": "0px"}, 500);
        }, 100);
      }, 150);
    }, 150);
  };
};

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89454896-1', 'auto');
ga('send', 'pageview');
