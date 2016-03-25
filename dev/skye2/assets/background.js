// Copyright Benjamin Developments (c) 2015 - All rights reserved

console.log("background.js loaded.");

// Random background selection script
var backgroundNames = Array(61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 54, 55, 56, 57, 58, 59, 60);
var imageUpdateDate = "Sunday, 21<sup>st</sup> February 2016";
var backgroundNumber = function() {
  return backgroundNames[Math.floor(Math.random() * backgroundNames.length)];
};

// Set last updated date in options & information menu
document.getElementById("infoImgUpdt").innerHTML = imageUpdateDate;

// Setting background
var setBackID;
var setBack = function(id) {
  if (id === "random") {
    setBackID = backgroundNumber();
    backImageData();
    document.getElementById("header").style.backgroundImage = "url('assets/images/backgrounds/" + setBackID + ".jpg')";
  } else {
    setBackID = id;
    backImageData();
    document.getElementById("header").style.backgroundImage = "url('assets/images/backgrounds/" + setBackID + ".jpg')";
  };
};

// Five minute background change
var newBackID;
newBackTimer = setInterval(function() {
  styleOpacity(0, "header", "0");
  styleOpacity(1100, "header", "1");
  setTimeout(function() {
    setBack("random");
  }, 1000);
}, 300000);

// New background image option
var opChBkImgFnctn = function() {
  clearInterval(newBackTimer);
  styleOpacity(0, "header", 0);
  styleOpacity(1100, "header", "1");
  setTimeout(function() {
    setBack("random");
  }, 1000);
};
document.getElementById("opChBkImg").addEventListener("click", function() {
  opChBkImgFnctn();
}, false);

// Background image information menu
var backImgInfo = function(imgUrl, imgAuth, imgAuthPro) {
  document.getElementById("bkgrndImgInf1").innerHTML = imgAuth;
  document.getElementById("bkgrndImgInf2").innerHTML = "<a target='_blank' href='" + imgAuthPro + "'>" + imgAuthPro + "</a>";
  document.getElementById("bkgrndImgInf3").innerHTML = "<a target='_blank' href='" + imgUrl + "'>" + imgUrl + "</a>";
};
document.getElementById("infoBackgroundImage").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(1000, "bkgrndImgInf", "visible");
  styleOpacity(1000, "bkgrndImgInf", 1);
}, false);
document.getElementById("bkgrndImgInfclose").addEventListener("click", function() {
  clearMenu("true");
}, false);

// Background image data
var backImageData = function() {
  if (setBackID === 61) {
    backImgInfo("https://unsplash.com/photos/7ALI0RYyq6s", "Мартин Тасев", "https://unsplash.com/pumabg");
  } else if (setBackID === 62) {
    backImgInfo("https://unsplash.com/photos/bClr95glx6k", "Vashishta Jogi", "https://unsplash.com/jogi");
  } else if (setBackID === 63) {
    backImgInfo("https://unsplash.com/photos/_h7aBovKia4", "Philippe Wuyts", "https://unsplash.com/photos/_h7aBovKia4");
  } else if (setBackID === 64) {
    backImgInfo("https://unsplash.com/photos/-oWyJoSqBRM", "Alexey Topolyanskiy", "https://unsplash.com/devilcoders");
  } else if (setBackID === 65) {
    backImgInfo("https://unsplash.com/photos/93Ep1dhTd2s", "William Hook", "https://unsplash.com/williamtm")
  } else if (setBackID === 66) {
    backImgInfo("https://unsplash.com/photos/KqVHRmHVwwM", "Erez Attias", "https://unsplash.com/erezattias");
  } else if (setBackID === 67) {
    backImgInfo("https://unsplash.com/photos/E7q00J_8N7A", "NASA", "https://unsplash.com/nasa");
  } else if (setBackID === 68) {
    backImgInfo("https://unsplash.com/photos/U5rMrSI7Pn4", "Metthew Wiebe", "https://unsplash.com/matthewwiebe");
  } else if (setBackID === 69) {
    backImgInfo("https://unsplash.com/photos/Ixp4YhCKZkI", "Steve Carter", "https://unsplash.com/stvcrtr");
  } else if (setBackID === 70) {
    backImgInfo("https://unsplash.com/photos/mWRR1xj95hg", "Christian Joudrey", "https://unsplash.com/cjoudrey");
  } else if (setBackID === 71) {
    backImgInfo("https://unsplash.com/photos/yEOCA6oiVqg", "Tim Marshall", "https://unsplash.com/timmarshall");
  } else if (setBackID === 72) {
    backImgInfo("https://unsplash.com/photos/HkTMcmlMOUQ", "Ales Krivec", "https://unsplash.com/aleskrivec");
  } else if (setBackID === 73) {
    backImgInfo("https://unsplash.com/photos/xcC5ozHk_N8", "Joseph Barrientos", "https://unsplash.com/thata7guy");
  } else if (setBackID === 54) {
    backImgInfo("https://unsplash.com/photos/6-jTZysYY_U", "NASA", "https://unsplash.com/nasa");
  } else if (setBackID === 55) {
    backImgInfo("https://unsplash.com/photos/R3LcfTvcGWY", "Annie Spratt", "https://unsplash.com/fableandfolk");
  } else if (setBackID === 56) {
    backImgInfo("https://unsplash.com/photos/GSzD6vGIWKM", "Mickey O'neil", "https://unsplash.com/mickeyoneil");
  } else if (setBackID === 57) {
    backImgInfo("https://unsplash.com/photos/uAgLGG1WBd4", "Scott Webb", "https://unsplash.com/scottwebb");
  } else if (setBackID === 58) {
    backImgInfo("https://unsplash.com/photos/JibIPPrvITE", "Micheal Hull", "https://unsplash.com/michaelhull");
  } else if (setBackID === 59) {
    backImgInfo("https://unsplash.com/photos/-wWRHIUklxM", "Vladimir Kudinov", "https://unsplash.com/madbyte");
  } else if (setBackID === 60) {
    backImgInfo("https://unsplash.com/photos/tBtuxtLvAZs", "Matthew Wiebe", "https://unsplash.com/matthewwiebe");
  };
};

setBack("random");
