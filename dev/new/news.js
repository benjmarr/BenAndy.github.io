// Copyright Benjamin (c) 2015 - All rights reserved

setTimeout(function() {
  var thisItemID = "1";
  document.getElementById("newsItem" + thisItemID + "DATE").innerHTML = "Saturday, 17<sup>th</sup> October 2015";
  document.getElementById("newsItem" + thisItemID + "TITLE").innerHTML = "New Website!";
  document.getElementById("newsItem" + thisItemID + "CONTENT").innerHTML = "TODO; ADD CONTENT";
}, 500);

setTimeout(function() {
  var thisItemID = "2";
  document.getElementById("newsItem" + thisItemID + "DATE").innerHTML = "Saturday, 17<sup>th</sup> October 2015";
  document.getElementById("newsItem" + thisItemID + "TITLE").innerHTML = "Test Item";
  document.getElementById("newsItem" + thisItemID + "CONTENT").innerHTML = "Test Content";
}, 1000);
