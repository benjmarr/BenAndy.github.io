// Copyright Benjamin (c) All rights reserved - 2015

console.log("Skye New Tab page copyright (c) Benjamin, 2015 - All rights reserved.");
var backgroundNumber = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
// NOTE Maximum of 20 backgrounds NOTE Add number onto end for new images, delete lowest number (This is just a weird developer note)
var randomBackground = backgroundNumber[Math.floor(Math.random() * backgroundNumber.length)];
var PAGEurl = "http://benandy.github.io/dev/newtab";

var decideHappyBirthdayBenjaminORHappyBirthdayOlivia = Math.floor((Math.random() * 2) + 1);


document.getElementById("shortcutList").addEventListener("click", function() {
  document.getElementById("shortcutMenu").style.visibility = "visible";
  document.getElementById("shortcutMenu").style.opacity = "0.9";
  document.getElementById("optionsImg").style.visibility = "visible";
  document.getElementById("optionsImg").style.opacity = "1";
  document.getElementById("optionsMenu").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("shortcutX").addEventListener("click", function() {
  function shortcutClose() {
    document.getElementById("shortcutMenu").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("shortcutMenu").style.visibility = "hidden";
    }, 600);
  }
}, false);

document.getElementById("optionsImg").addEventListener("click", function() {
  document.getElementById("optionsMenu").style.visibility = "visible";
  document.getElementById("optionsMenu").style.opacity = "0.9";
  document.getElementById("optionsImg").style.opacity = "0";
  document.getElementById("shortcutMenu").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("shortcutMenu").style.visibility = "hidden";
    document.getElementById("optionsImg").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("optionsX").addEventListener("click", function() {
  document.getElementById("optionsImg").style.visibility = "visible";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("optionsImg").style.opacity = "0.9";
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("shortcutX").addEventListener("click", function() {
  document.getElementById("optionsImg").style.visibility = "visible";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("optionsImg").style.opacity = "0.9";
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("optionNEWBACK").addEventListener("click", function() {
  setTimeout(function() {
    var newBack = Math.floor((Math.random() * randomBackground) + 1);
    document.getElementById("header").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.backgroundImage = "url('content/background/" + newBack + ".jpg')";
      setTimeout(function() {
        document.getElementById("header").style.opacity = "1";
      }, 200);
    }, 500);
    setTimeout(function() {
      var newimgURL = PAGEurl + "/content/background/" + newBack + ".jpg";
      document.getElementById("optionNEWBACK").innerHTML = "<a>Change the Background image</a> [ID: " + newBack + "]";
      document.getElementById("ImageURL").innerHTML = "<a href='" + newimgURL + "' target='_blank'>" + newimgURL + "</a>";
    }, 100);
  }, 500);
}, false);

document.getElementById("optionRELOAD").addEventListener("click", function() {
  document.getElementById("optionRELOAD").innerHTML = "<a>Reloading...</a>";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("shortcutMenu").style.opacity = "0";
  document.getElementById("link").style.opacity = "0";
  document.getElementById("body").style.opacity = "0";
  setTimeout(function() {
    window.location = "";
  }, 2500);
}, false);

setTimeout(function() {
  var imgURL = PAGEurl + "/content/background/" + randomBackground + ".jpg";
  document.getElementById("ImageURL").innerHTML = "<a href='" + imgURL + "' target='_blank'>" + imgURL + "</a>";
  document.getElementById("optionNEWBACK").innerHTML = "<a>Change the background image</a> [ID: " + randomBackground + "]";
  console.log("Background ID: " + randomBackground + "\nSource:" + imgURL);
  setTimeout(function() {
    document.getElementById("body").style.opacity = "1";
    setTimeout(function() {
      document.getElementById("optionsImg").style.opacity = "1";
      setTimeout(function() {
        document.getElementById("link1").style.opacity = "0.6";
        setTimeout(function() {
          document.getElementById("link2").style.opacity = "0.6";
          setTimeout(function() {
            document.getElementById("link3").style.opacity = "0.6";
            setTimeout(function() {
              document.getElementById("link4").style.opacity = "0.6";
              setTimeout(function() {
                document.getElementById("link5").style.opacity = "0.6";
                setTimeout(function() {
                  document.getElementById("link6").style.opacity = "0.6";
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 250);
  document.getElementById("header").style.backgroundImage = "url('content/background/" + randomBackground + ".jpg')";
  document.getElementById("ImageUpdateDate").innerHTML = "Monday, 2<sup>nd</sup> November 2015";
}, 50); // NOTE WHEN ADDING NEW BACKGROUNDS CHANGE BACKGROUND VALUE AT TOP OF PAGE

var tday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

setInterval(GetClock,100);
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

  if (ndate == 1) {
    var strdndth = "st";
  } else if (ndate == 2) {
    var strdndth = "nd";
  } else if (ndate == 3) {
    var strdndth = "rd";
  } else {
    var strdndth = "th";
  }

  document.getElementById("datebox").innerHTML = "" + tday[nday] + ", " +tmonth[nmonth]+ " " +ndate+ "" + "<sup>" + strdndth + "</sup>";
  document.getElementById("clockbox").innerHTML = "" + nhour + ":" + nmin + ap + "";

  setTimeout(function() {
    var alertShow = document.getElementById("dateAlert").style.opacity = "1";
    var alertName = document.getElementById("dateAlert");

    if (tmonth[nmonth] == "January") {
      if (ndate == 1) {
        var thisAlert = "Happy new year!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
    } else if (tmonth[nmonth] == "February") {

    } else if (tmonth[nmonth] == "March") {
      if (ndate == 16) {
        var thisAlert = "Happy birthday, Amber!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
      if (ndate == 27) {
        var thisAlert = "Happy Easter!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
    } else if (tmonth[nmonth] == "April") {
      if (ndate == "23") {
        var thisAlert = "Happy birthday, Lorelle!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
    } else if (tmonth[nmonth] == "May") {
      if (ndate == 2) {
        var thisAlert = "Happy birthday, Caleb";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
    } else if (tmonth[nmonth] == "June") {

    } else if (tmonth[nmonth] == "July") {

    } else if (tmonth[nmonth] == "August") {

    } else if (tmonth[nmonth] == "September") {
      if (ndate == 11) {
        var thisAlert = "Happy birthday, Chantalle!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
    } else if (tmonth[nmonth] == "October") {
      if (ndate == 17) {
        if (decideHappyBirthdayBenjaminORHappyBirthdayOlivia == 1) {
          var thisAlert = "Happy birthday, Benjamin!";
        } else {
          var thisAlert = "Happy birthday, Olivia!";
        }
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
      if (ndate == 28) {
        var thisAlert = "Happy birthday, Vijay!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
    } else if (tmonth[nmonth] == "November") {
      if (ndate == 16) {
        var thisAlert = "Happy birthday, Emma!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
    } else if (tmonth[nmonth] == "December") {
      if (ndate == 24) {
        var thisAlert = "Merry Christmas!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
    } else {
      document.getElementById("dateAlert").style.visibility = "hidden";
    }
  }, 2000);

  setTimeout(function() {
    if (thour < 12) {
      document.getElementById("welcomeMessage").innerHTML = "Good morning";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 2000);
    } else if (thour < 18) {
      document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 2000);
    } else {
      document.getElementById("welcomeMessage").innerHTML = "Good evening";
      setTimeout(function() {
        document.getElementById("welcomeMessage").style.opacity = "1";
      }, 2000);
    }
  }, 3000);
}

document.addEventListener("keydown", function(e) {
  e = e || window.event;
  if (e.keyCode == "27") {
    document.getElementById("optionsMenu").style.opacity = "0";
    document.getElementById("shortcutMenu").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("optionsMenu").style.visibility = "hidden";
      document.getElementById("shortcutMenu").style.visibility = "hidden";
      document.getElementById("optionsImg").style.visibility = "visible";
      document.getElementById("optionsImg").style.opacity = "0.9";
    }, 600);
  } else if (e.keyCode == "79") {
    document.getElementById("optionsMenu").style.visibility = "visible";
    document.getElementById("optionsMenu").style.opacity = "0.9";
    document.getElementById("optionsImg").style.opacity = "0";
    document.getElementById("shortcutMenu").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("shortcutMenu").style.visibility = "hidden";
      document.getElementById("optionsImg").style.visibility = "hidden";
    }, 600);
  } else if (e.keyCode == "82") {
    document.getElementById("optionsMenu").style.opacity = "0";
    document.getElementById("shortcutMenu").style.opacity = "0";
    document.getElementById("link").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.opacity = "0";
      setTimeout(function() {
        window.location = "";
      }, 500);
    }, 500);
  }
}, false);

setTimeout(function() {
  document.getElementById("link1").onmouseover = function() {
    document.getElementById("link1").style.opacity = "1";
  }
  document.getElementById("link1").onmouseout = function() {
    document.getElementById("link1").style.opacity = "0.6";
  }
  document.getElementById("link2").onmouseover = function() {
    document.getElementById("link2").style.opacity = "1";
  }
  document.getElementById("link2").onmouseout = function() {
    document.getElementById("link2").style.opacity = "0.6";
  }
  document.getElementById("link3").onmouseover = function() {
    document.getElementById("link3").style.opacity = "1";
  }
  document.getElementById("link3").onmouseout = function() {
    document.getElementById("link3").style.opacity = "0.6";
  }
  document.getElementById("link4").onmouseover = function() {
    document.getElementById("link4").style.opacity = "1";
  }
  document.getElementById("link4").onmouseout = function() {
    document.getElementById("link4").style.opacity = "0.6";
  }
  document.getElementById("link5").onmouseover = function() {
    document.getElementById("link5").style.opacity = "1";
  }
  document.getElementById("link5").onmouseout = function() {
    document.getElementById("link5").style.opacity = "0.6";
  }
  document.getElementById("link6").onmouseover = function() {
    document.getElementById("link6").style.opacity = "1";
  }
  document.getElementById("link6").onmouseout = function() {
    document.getElementById("link6").style.opacity = "0.6";
  }
}, 100);

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}
