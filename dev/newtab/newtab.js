// Copyright Benjamin (c) All rights reserved - 2015
// Special thanks to Caleb Stewart for helping me with the random background image selection!
// https://twitter.com/RagingCow25

document.title = "New Tab";

function options() {
  document.getElementById("optionsMenu").style.visibility = "visible";
  document.getElementById("optionsImg").style.opacity = "hidden";
  document.getElementById("optionsImg").style.height = "0px";
}

function optionsClose() {
  document.getElementById("optionsMenu").style.visibility = "hidden";
  document.getElementById("optionsImg").style.visibility = "visible";
  document.getElementById("optionsImg").style.height = "3%";
}

function optionsSOCIALMEDIA1() {
  document.getElementById("optionSocialMedia").innerHTML = "<a onclick='optionsSOCIALMEDIA2()'>Social Media Icons</a>";
  document.getElementById("link").style.visibility = "hidden";
}

function optionsSOCIALMEDIA2() {
  document.getElementById("optionSocialMedia").innerHTML = "<a onclick='optionsSOCIALMEDIA1()'>Social Media Icons</a>";
  document.getElementById("link").style.visibility = "visible";
}

function optionsTEXTCOLOUR1() {
  document.getElementById("optionTextColour").innerHTML = "<a onclick='optionsTEXTCOLOUR2()'>Colour Scheme</a> (FEATURE UNDER DEVELOPMENT)";
  document.getElementById("optionsMenu").style.backgroundColor = "white";
  document.getElementById("options").style.color = "black";
  document.getElementById("unsplash").style.color = "black";
  document.getElementById("clockbox").style.color = "black";
  document.getElementById("datebox").style.color = "black";
  document.getElementById("newtab").style.color = "black";
}

function optionsTEXTCOLOUR2() {
  document.getElementById("optionTextColour").innerHTML = "<a onclick='optionsTEXTCOLOUR1()'>Colour Scheme</a> (FEATURE UNDER DEVELOPMENT)";
  document.getElementById("optionsMenu").style.backgroundColor = "black";
  document.getElementById("options").style.color = "white";
  document.getElementById("unsplash").style.color = "white";
  document.getElementById("clockbox").style.color = "white";
  document.getElementById("datebox").style.color = "white";
  document.getElementById("newtab").style.color = "white";
}

setTimeout(function() {
  var randomBackground = Math.floor((Math.random() * 17) + 1);
  console.log("Background ID: " + randomBackground + "\nSource: http://benandy.github.io/dev/newtab/content/background/back" + randomBackground + ".jpg");
  setTimeout(function() {
    document.getElementById("body").style.opacity = "1";
    setTimeout(function() {
      document.getElementById("optionsImg").style.opacity = "1";
      setTimeout(function() {
        document.getElementById("link1").style.opacity = "1";
        setTimeout(function() {
          document.getElementById("link2").style.opacity = "1";
          setTimeout(function() {
            document.getElementById("link3").style.opacity = "1";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 1500);
  if (randomBackground == 1) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back1.jpg')";
  };

  if (randomBackground == 2) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back2.jpg')";
  };

  if (randomBackground == 3) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back3.jpg')";
  };

  if (randomBackground == 4) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back4.jpg')";
  };

  if (randomBackground == 5) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back5.jpg')";
  };

  if (randomBackground == 6) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back6.jpg')";
  };

  if (randomBackground == 7) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back7.jpg')";
  };

  if (randomBackground == 8) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back8.jpg')";
  };

  if (randomBackground == 9) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back9.jpg')";
  };

  if (randomBackground == 10) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back10.jpg')";
  };

  if (randomBackground == 11) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back11.jpg')";
  };

  if (randomBackground == 12) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back12.jpg')";
  };

  if (randomBackground == 13) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back13.jpg')";
  };

  if (randomBackground == 14) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back14.jpg')";
  };

  if (randomBackground == 15) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back15.jpg')";
  };

  if (randomBackground == 16) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back16.jpg')";
  };

  if (randomBackground == 17) {
    document.getElementById("header").style.backgroundImage = "url('content/background/back17.jpg')";
  };
}, 50);

var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

setInterval(GetClock,10);
function GetClock() {
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
  var d=new Date();
  var nhour=d.getHours(),nmin=d.getMinutes(),ap;
  if (nhour==0) {
    ap=" AM";nhour=12;
  } else if (nhour<12) {
    ap=" AM";
  } else if (nhour==12) {
    ap=" PM";
  } else if (nhour>12) {
    ap=" PM";nhour-=12;
  } if (nmin<=9) {
    nmin="0"+nmin;
  }
  document.getElementById("datebox").innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
  document.getElementById("clockbox").innerHTML=""+nhour+":"+nmin+ap+"";
}
