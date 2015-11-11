// Copyright Benjamin (c) All rights reserved - 2015

console.log("Skye New Tab page copyright (c) Benjamin, 2015 - All rights reserved.");
var backgroundNumber = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
// NOTE Maximum of 20 backgrounds NOTE Add number onto end for new images, delete lowest number (This is just a weird developer note)
var randomBackground = backgroundNumber[Math.floor(Math.random() * backgroundNumber.length)];
var PAGEurl = "http://benandy.github.io/skye/newtab";

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
  document.getElementById("shortcutMenu").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("shortcutMenu").style.visibility = "hidden";
  }, 600);
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

document.getElementById("optionNEWBACK").addEventListener("click", function() {
  setTimeout(function() {
    var newBack = Math.floor((Math.random() * randomBackground) + 1);
    document.getElementById("header").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.backgroundImage = "url('content/background/" + newBack + ".jpg')";
      setTimeout(function() {
        document.getElementById("header").style.opacity = "1";
      }, 200);
    }, 60);
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

setTimeout(function() { // Thanks to Mario2Sonic for the idea! https://www.youtube.com/user/raylfli
  setTimeout(function() {
    document.getElementById("quoteBox").style.opacity = "1";
  }, 3000);
  var quoteChoose = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
  var quoteNumber = quoteChoose[Math.floor(Math.random() * quoteChoose.length)];
  setTimeout(function() {
    var marked1 = "<sup>&quot;</sup>";
    var marked2 = "<sup>&quot; - ";
    // NOTE Change quote number 1
    if (quoteNumber == 1) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible." + marked2 + "Francis of Assisi</sup>";
    } else if (quoteNumber == 2) {
      document.getElementById("quoteBox").innerHTML = marked1 + "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." + marked2 + "Helen Keller</sup>";
    } else if (quoteNumber == 3) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Try to be a rainbow in someone's cloud." + marked2 + "Maya Angelou</sup>";
    } else if (quoteNumber == 4) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Anyone who has ever made anything of importance was disciplined." + marked2 + "Andrew Hendrixson</sup>";
    } else if (quoteNumber == 5) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Don’t spend time beating on a wall, hoping to transform it into a door." + marked2 + " Coco Chanel</sup>";
    } else if (quoteNumber == 6) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Creativity is intelligence having fun." + marked2 + "Albert Einstein</sup>";
    } else if (quoteNumber == 7) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Optimism is the one quality more associated with success and happiness than any other." + marked2 + "Brian Tracy</sup>";
    } else if (quoteNumber == 8) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Always keep your eyes open. Keep watching. Because whatever you see can inspire you." + marked2 + "Grace Coddington</sup>";
    } else if (quoteNumber == 9) {
      document.getElementById("quoteBox").innerHTML = marked1 + "What you get by achieving your goals is not as important as what you become by achieving your goals." + marked2 + "Henry David Thoreau</sup>";
    } else if (quoteNumber == 10) {
      document.getElementById("quoteBox").innerHTML = marked1 + "If the plan doesn’t work, change the plan, but never the goal." + marked2 + "Author Unknown</sup>";
    } else if (quoteNumber == 11) {
      document.getElementById("quoteBox").innerHTML = marked1 + "I destroy my enemies when I make them my friends." + marked2 + "Abraham Lincoln</sup>";
    } else if (quoteNumber == 12) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Don’t live the same year 75 times and call it a life." + marked2 + "Robin Sharma</sup>";
    } else if (quoteNumber == 13) {
      document.getElementById("quoteBox").innerHTML = marked1 + "You cannot save people, you can just love them." + marked2 + "Anaïs Nin</sup>";
    } else if (quoteNumber == 14) {
      document.getElementById("quoteBox").innerHTML = marked1 + "It wasn’t raining when Noah built the ark." + marked2 + "Howard Ruff</sup>";
    } else if (quoteNumber == 15) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Take your dreams seriously." + marked2 + "Author Unknown</sup>";
    } else if (quoteNumber == 16) {
      document.getElementById("quoteBox").innerHTML = marked1 + "There is no way to happiness. Happiness is the way." + marked2 + "Thich Nhat Hanh</sup>";
    } else if (quoteNumber == 17) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Champions keep playing until they get it right." + marked2 + "Billie Jean King</sup>";
    } else if (quoteNumber == 18) {
      document.getElementById("quoteBox").innerHTML = marked1 + "You will succeed because most people are lazy." + marked2 + "Shahir Zag</sup>";
    } else if (quoteNumber == 19) {
      document.getElementById("quoteBox").innerHTML = marked1 + "Genius is 1% inspiration, 99% perspiration." + marked2 + "Thomas Edison</sup>";
    } else if (quoteNumber == 20) {
      document.getElementById("quoteBox").innerHTML = marked1 + "How come you can drink a drink, but you can't food a food." + marked2 + "Jaden Smith</sup>";
    }
  }, 100);
}, 50);

setTimeout(function() {
  var imgURL = PAGEurl + "/content/background/" + randomBackground + ".jpg";
  document.getElementById("ImageURL").innerHTML = "<a href='" + imgURL + "' target='_blank'>" + imgURL + "</a>";
  document.getElementById("optionNEWBACK").innerHTML = "<a>Change the background image</a> [ID: " + randomBackground + "]";
  console.log("Background ID: " + randomBackground + "\nSource: " + imgURL);
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
  document.getElementById("ImageUpdateDate").innerHTML = "Sunday, 8<sup>th</sup> November 2015";
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
      if (ndate == "18") {
        var thisAlert = "Happy birthday, Matt!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000)
      };
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
      if (ndate == 25) {
        var thisAlert = "Merry Christmas!";
        document.getElementById("welcomeMessage").style.visibility = "hidden";
        alertName.innerHTML = thisAlert;
        setTimeout(function() {alertShow; document.title = thisAlert;}, 1000);
      };
      if (ndate == 26) {
        var thisAlert = "Happy birthday, Sophie!";
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

document.getElementById("optionTIMER").addEventListener("click", function() {setTimeout(timer,10)}, false);
var sec = 0;
var min = 0;
var hour = 0;
function timer() {
  var secondCount;
  secondCount = setInterval(time, 1000);
  document.getElementById("timer").style.opacity = "1";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("optionsImg").style.visibility = "visible";
  setTimeout(function() {
    document.getElementById("optionsImg").style.opacity = "1";
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 50);

  document.getElementById("timerButton").innerHTML = "<span id='timerStop'><a>Stop the timer</a></span>";

  document.getElementById("timerStop").addEventListener("click", function() {
    document.getElementById("timerButton").innerHTML = "Timer stopped."
    clearInterval(secondCount);
    setTimeout(function() {
      document.getElementById("timer").style.opacity = "0";
    }, 500);
  }, false);
}

function time() {
  sec = sec + 1;

  if (sec < 10) {
    document.getElementById("timerSecond").innerHTML = "0" + sec;
  } else {
    document.getElementById("timerSecond").innerHTML = sec;
  }

  if (min < 10) {
    document.getElementById("timerMinute").innerHTML = "0" + min;
  } else {
    document.getElementById("timerMinute").innerHTMl = min;
  }

  if (hour < 10) {
    document.getElementById("timerHour").innerHTML = "0" + hour;
  } else {
    document.getElementById("timerHour").innerHTML = hour;
  }

  if (sec == 58) {
    setTimeout(function() {
      min = min + 1;
      sec = sec - 60;
    }, 1000);
  }

  if (min == 60) {
    hour = hour + 1;
    min = min - 60;
  }

  var stopHour;
  var stopMinute;
  var stopSecond;

  if (hour == 0) {
    stopHour = "no hours";
  } else if (hour == 1) {
    stopHour = "1 hour";
  } else {
    stopHour = hour + " hours";
  }

  if (min == 0) {
    stopMinute = "no minutes";
  } else if (min == 1) {
    stopMinute = "1 minute";
  } else {
    stopMinute = min + " hours";
  }

  if (sec == 0) {
    stopSecond = "no seconds";
  } else if (sec == 1) {
    stopSecond = "1 second";
  } else {
    stopSecond = sec + " seconds";
  }
}
