// Copyright Benjamin Developments (c) 2017 - All rights reserved
console.log("Copyright Benjamin Developments (c) 2017 - All rights reserved");
window.onload = function() {
  document.getElementById("body").style.backgroundColor = "#BDBDBD";
  setTimeout(function() {
    document.getElementById("1").style.opacity = "1";
    setTimeout(function() {
      document.getElementById("2").style.opacity = "1";
      setTimeout(function() {
        document.getElementById("3").style.opacity = "1";
        setTimeout(function() {
          document.getElementById("3").style.fontSize = "200%";
        }, 200);
      }, 300);
    }, 300);
  }, 200);
};
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-89454896-2', 'auto');
ga('send', 'pageview');
