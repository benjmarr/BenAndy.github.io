// Copyright Benjamin (c) 2015 - All rights reserved

var load = 1;
var loadTIME = 1 / 1000;
var pageLoad = setInterval(function() {
  clearInterval(pageLoad);
  console.log("JavaScript file delayed by " + loadTIME);
  document.title = "Serial Access";

  var daReload = setInterval(function() {
    if (Math.random() < 0.3) {
      document.getElementById("daLIST").innerHTML = "<span class='red'>[ACCESS DENIED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span>";
    } else if (Math.random() < 0.3) {
      document.getElementById("daLIST").innerHTML = "<span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span>";
    } else if (Math.random() < 0.3) {
      document.getElementById("daLIST").innerHTML = "<span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span>";
    } else {
      document.getElementById("daLIST").innerHTML = "<span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='red'>[ACCESS DENIED]</span>";
    }
  }, 100);
  var attemptReload = setInterval(function() {
    if (Math.random() < 0.3) {
      document.getElementById("attemptLIST").innerHTML = "> 1<br />> 2<br />> 3<br />> 4<br />> 5<br />";
    } else if (Math.random() < 0.3) {
      document.getElementById("attemptLIST").innerHTML = "> 2<br />> 3<br />> 4<br />> 5<br />> 1<br />";
    } else if (Math.random() < 0.3) {
      document.getElementById("attemptLIST").innerHTML = "> 3<br />> 4<br />> 5<br />> 1<br />> 2<br />";
    } else {
      document.getElementById("attemptLIST").innerHTML = "> 4<br />> 5<br />> 1<br />> 2<br />> 3<br />";
    }
  }, 100);
  var locationReload = setInterval(function() {
    if (Math.random() < 0.3) {
      document.getElementById("locationLIST").innerHTML = "[Australia]<br />[UNKNOWN]<br />[New_Zealand]<br />[Moscow]<br />[Washington]";
    } else if (Math.random() < 0.3) {
      document.getElementById("locationLIST").innerHTML = "[U.S.A]<br />[Paris]<br />[New_York]<br />[Sydney]<br />[Antartica]";
    } else if (Math.random() < 0.3) {
      document.getElementById("locationLIST").innerHTML = "[Hollywood]<br />[Mexico]<br />[UNKNOWN]<br />[California]<br />[Los_Angeleas]";
    } else {
      document.getElementById("locationLIST").innerHTML = "[Russia]<br />[Canada]<br />[China]<br />[UNKNWON]<br />[Japan]";
    }
  }, 200);
  var ipReload = setInterval(function() {
    if (Math.random() < 0.3) {
      document.getElementById("ipLIST").innerHTML = "192.168.0.120<br />281.274.5.388<br />257.950.4.358<br />749.163.7.947<br />747.185.9.146";
    } else if (Math.random() < 0.3) {
      document.getElementById("ipLIST").innerHTML = "281.274.5.388<br />257.950.4.358<br />749.163.7.947<br />747.185.9.146<br />192.168.0.120";
    } else if (Math.random() < 0.3) {
      document.getElementById("ipLIST").innerHTML = "747.185.9.146<br />192.168.0.120<br />281.274.5.388<br />257.950.4.358<br />749.163.7.947";
    } else {
      document.getElementById("ipLIST").innerHTML = "746.956.1.846<br />573.462.4.583<br />472.955.3.573<br />945.567.2.572<br />672.582.4.582";
    }
  }, 200);
  var serialReload = setInterval(function() {
    document.getElementById("serialLIST").innerHTML = Math.random() + "<br />" + Math.random() + "<br />" + Math.random() + "<br />" + Math.random() + "<br />" + Math.random();
  }, 50);
}, load);
