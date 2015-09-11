// Copyright Benjamin (c) All rights reserved - 2015
// Special thanks to Caleb Stewart for helping me with the random background image selection!
// https://twitter.com/RagingCow25

document.title = "New Tab";

function linkHover() {
  document.getElementById("link").style.opacity = "1";
}

function linkOutHover() {
  document.getElementById("link").style.opacity = "0.7";
}

function options() {
  document.getElementById("optionsMenu").style.opacity = "0.9";
  document.getElementById("optionsImg").style.opacity = "0";
}

function optionsClose() {
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("optionsImg").style.opacity = "0.9";
}

function optionsRELOAD() {
  document.getElementById("optionRELOAD").innerHTML = "<a onclick='optionsRELOAD()'>Reloading...</a>";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("link").style.opacity = "0";
  document.getElementById("body").style.opacity = "0";
  setTimeout(function() {
    window.location = "";
  }, 2500);
}

function optionsSOCIALMEDIA1() {
  document.getElementById("optionSocialMedia").innerHTML = "<a onclick='optionsSOCIALMEDIA2()'>Social Media Icons</a> [OFF]";
  document.getElementById("link").style.opacity = "0";
}

function optionsSOCIALMEDIA2() {
  document.getElementById("optionSocialMedia").innerHTML = "<a onclick='optionsSOCIALMEDIA1()'>Social Media Icons</a> [ON]";
  document.getElementById("link").style.opacity = "0.7";
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
            setTimeout(function() {
              document.getElementById("link4").style.opacity = "1";
              setTimeout(function() {
                document.getElementById("link5").style.opacity = "1";
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
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
  var thour = d.getHours();

  if (nhour == 0) {
    ap=" AM";
    nhour=12;
  } else if (nhour < 12) {
    ap=" AM";
  } else if (nhour == 12) {
    ap=" PM";
  } else if (nhour > 12) {
    ap=" PM";
    nhour-=12;
  }

  if (nmin<=9) {
    nmin="0"+nmin;
  }

  document.getElementById("datebox").innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
  document.getElementById("clockbox").innerHTML=""+nhour+":"+nmin+ap+"";

  setTimeout(function() {
    if (tmonth[nmonth] == "January") {
      if (ndate == 1) {
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        document.getElementById("dateAlert").innerHTML = "Happy new year!";
        setTimeout(function() {
          document.getElementById("dateAlert").style.opacity = "1";
        }, 2000)
      };
    } else if (tmonth[nmonth] == "February") {

    } else if (tmonth[nmonth] == "March") {

    } else if (tmonth[nmonth] == "April") {

    } else if (tmonth[nmonth] == "May") {

    } else if (tmonth[nmonth] == "June") {

    } else if (tmonth[nmonth] == "July") {

    } else if (tmonth[nmonth] == "August") {

    } else if (tmonth[nmonth] == "September") {
      if (ndate == 11) {
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        document.getElementById("dateAlert").innerHTML = "Happy birthday, Chantalle!";
        setTimeout(function() {
          document.getElementById("dateAlert").style.opacity = "1";
        }, 2000);
      };
    } else if (tmonth[nmonth] == "October") {
      if (ndate == 17) {
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        document.getElementById("dateAlert").innerHTML = "Happy birthday, Benjamin!";
        setTimeout(function() {
          document.getElementById("dateAlert").style.opacity = "1";
        }, 2000)
      };
    } else if (tmonth[nmonth] == "November") {

    } else if (tmonth[nmonth] == "December") {
      if (ndate == 24) {
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        document.getElementById("dateAlert").innerHTML = "Merry Christmas!";
        setTimeout(function() {
          document.getElementById("dateAlert").style.opacity = "1";
        }, 2000)
      };
    } else {
      document.getElementById("dateAlert").style.visibility = "hidden";
    }
  }, 2000);

  setTimeout(function() {
    if (thour == 0) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 1) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 2) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 3) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 4) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 5) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 6) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 7) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 8) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 9) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good morning";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 10) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good morning";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 11) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good morning";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 12) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 13) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 14) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 15) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 16) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 17) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 18) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 19) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good evening";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 20) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good evening";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 21) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good evening";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 22) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good evening";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 23) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good evening";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    } else if (thour == 24) {
      setTimeout(function() {
        document.getElementById("welcomeMessage").innerHTML = "Good evening";
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 3000);
    }
  }, 3000);
}
