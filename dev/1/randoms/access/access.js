// Copyright Benjamin (c) 2015 - All rights reserved

var load = 1;
var loadTIME = 1 / 1000;
var pageLoad = setInterval(function() {
  clearInterval(pageLoad);
  console.log("Copyright Benjamin (c) 2015 - All rights reserved");
  console.log("JavaScript file delayed by " + loadTIME);
  document.title = "Serial Access";

  if (Math.random() < 0.3) {
    var COMPLETEtime = 60000;
    var COMPLETEhalfWay = COMPLETEtime / 2;
    console.log("ACCESS TIME IS " + COMPLETEtime / 1000 + " SECONDS");
    var COMPLETEtimeHalf = setInterval(function() {
      clearInterval(COMPLETEtimeHalf);
      console.log("ACCESS TIME IS 50% COMPLETE");
    }, COMPLETEhalfWay);
  } else if (Math.random() < 0.3) {
    var COMPLETEtime = 120000;
    var COMPLETEhalfWay = COMPLETEtime / 2;
    console.log("ACCESS TIME IS " + COMPLETEtime / 1000 + " SECONDS");
    var COMPLETEtimeHalf = setInterval(function() {
      clearInterval(COMPLETEtimeHalf);
      console.log("ACCESS TIME IS 50% COMPLETE");
    }, COMPLETEhalfWay);
  } else {
    var COMPLETEtime = 240000;
    var COMPLETEhalfWay = COMPLETEtime / 2;
    console.log("ACCESS TIME IS " + COMPLETEtime / 1000 + " SECONDS");
    var COMPLETEtimeHalf = setInterval(function() {
      clearInterval(COMPLETEtimeHalf);
      console.log("ACCESS TIME IS 50% COMPLETE");
    }, COMPLETEhalfWay);
  }

  var COMPLETE = setInterval(function() {
    clearInterval(COMPLETE);
    clearInterval(randomsReload);
    clearInterval(daReload);
    clearInterval(attemptReload);
    clearInterval(locationReload);
    clearInterval(serialReload);
    clearInterval(ipReload);
    document.getElementById("alert").innerHTML = "ACCESS GRANTED<div id='alertMSG'><a href=''>RELOAD</a></div>EVENTUAL ID<br />" + Math.random() * COMPLETEtime;
    document.getElementById("alert").style.visibility = "visible";
    setInterval(function() {
      document.getElementById("daLIST").innerHTML = "ACCESS<br /><br /><span class='lime'>[ACCESS GRANTED] <</span><br /><span class='lime'>[ACCESS GRANTED] <</span><br /><span class='lime'>[ACCESS GRANTED] <</span><br /><span class='lime'>[ACCESS GRANTED] <</span><br /><span class='lime'>[ACCESS GRANTED] <</span><br />";
      var accessGRANTED = setInterval(function() {
        document.getElementById("daLIST").innerHTML = "ACCESS<br /><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br />";
        clearInterval(accessGRANTED);
      }, 1000);
    }, 2000);
    document.getElementById("daLIST").innerHTML = "ACCESS<br /><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br />";
    document.getElementById("randoms").style.color = "lime";
  }, COMPLETEtime);

  var randomsReload = setInterval(function() {
    document.getElementById("randoms").innerHTML = "<br />" + Math.random() + Math.random() * 3 + "<br />" + Math.random() + Math.random() * 3 + "<br />" + Math.random() + Math.random() * 3 + "<br />" + Math.random() + Math.random() * 3 + "<br />" + Math.random() + Math.random() * 3;
    if (Math.random() < 0.3) {
      document.getElementById("randoms").style.color = "red";
    } else {
      document.getElementById("randoms").style.color = "lime";
    }
  }, 100);

  var daReload = setInterval(function() {
    if (Math.random() < 0.3) {
      document.getElementById("daLIST").innerHTML = "ACCESS<br /><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span>";
    } else if (Math.random() < 0.3) {
      document.getElementById("daLIST").innerHTML = "ACCESS<br /><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span>";
    } else if (Math.random() < 0.3) {
      document.getElementById("daLIST").innerHTML = "ACCESS<br /><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='lime'>[ACCESS GRANTED]</span>";
    } else {
      document.getElementById("daLIST").innerHTML = "ACCESS<br /><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='lime'>[ACCESS GRANTED]</span><br /><span class='red'>[ACCESS DENIED]</span><br /><span class='red'>[ACCESS DENIED]</span>";
    }
  }, 100);
  var attemptReload = setInterval(function() {
    if (Math.random() < 0.3) {
      document.getElementById("attemptLIST").innerHTML = "ID<br /><br />> 1<br />> 2<br />> 3<br />> 4<br />> 5<br />";
    } else if (Math.random() < 0.3) {
      document.getElementById("attemptLIST").innerHTML = "ID<br /><br />> 2<br />> 3<br />> 4<br />> 5<br />> 1<br />";
    } else if (Math.random() < 0.3) {
      document.getElementById("attemptLIST").innerHTML = "ID<br /><br />> 3<br />> 4<br />> 5<br />> 1<br />> 2<br />";
    } else {
      document.getElementById("attemptLIST").innerHTML = "ID<br /><br />> 4<br />> 5<br />> 1<br />> 2<br />> 3<br />";
    }
  }, 100);
  var locationReload = setInterval(function() {
    if (Math.random() < 0.3) {
      document.getElementById("locationLIST").innerHTML = "LOCATION<br /><br />[Australia]<br />[UNKNOWN]<br />[New_Zealand]<br />[Moscow]<br />[Washington]";
    } else if (Math.random() < 0.3) {
      document.getElementById("locationLIST").innerHTML = "LOCATION<br /><br />[U.S.A]<br />[Paris]<br />[New_York]<br />[Sydney]<br />[Antartica]";
    } else if (Math.random() < 0.3) {
      document.getElementById("locationLIST").innerHTML = "LOCATION<br /><br />[Hollywood]<br />[Mexico]<br />[UNKNOWN]<br />[California]<br />[Los_Angeleas]";
    } else {
      document.getElementById("locationLIST").innerHTML = "LOCATION<br /><br />[Russia]<br />[Canada]<br />[China]<br />[UNKNWON]<br />[Japan]";
    }
  }, 200);
  var serialReload = setInterval(function() {
    document.title = Math.random();
    document.getElementById("serialLIST").innerHTML = "SERIAL ID<br /><br />" + Math.random() + "<br />" + Math.random() + "<br />" + Math.random() + "<br />" + Math.random() + "<br />" + Math.random();
  }, 50);
  var ipReload = setInterval(function() {
    if (Math.random() < 0.3) {
      document.getElementById("ipLIST").innerHTML = "IP ADDRESS<br /><br />192.168.0.120<br />281.274.5.388<br />257.950.4.358<br />749.163.7.947<br />747.185.9.146";
    } else if (Math.random() < 0.3) {
      document.getElementById("ipLIST").innerHTML = "IP ADDRESS<br /><br />281.274.5.388<br />257.950.4.358<br />749.163.7.947<br />747.185.9.146<br />192.168.0.120";
    } else if (Math.random() < 0.3) {
      document.getElementById("ipLIST").innerHTML = "IP ADDRESS<br /><br />747.185.9.146<br />192.168.0.120<br />281.274.5.388<br />257.950.4.358<br />749.163.7.947";
    } else {
      document.getElementById("ipLIST").innerHTML = "IP ADDRESS<br /><br />746.956.1.846<br />573.462.4.583<br />472.955.3.573<br />945.567.2.572<br />672.582.4.582";
    }
  }, 200);
}, load);
