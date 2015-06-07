console.info("This website is under creative commons copyright, 2015.\nAny content stolen from this website can and will result in legal actions.");
console.warn("You have been warned!");
console.log("");
console.info("Page information gathered from various sites and put together by Vijay Chand, Cody Quarrell and Ben Watts-Marr.");
console.info("Coded by Ben Watts-Marr with wonderful assisstance from Caleb Stewart\nContact him at calebs2500@gmail.com");

/* Cover background - gif change */
var gifCover1 = setInterval(function() {
  document.getElementById("header").style.background = "url('images/boom.gif')";
  document.getElementById("header").style.backgroundSize = "cover";
  clearInterval(gifCover1);

  var gifCover2 = setInterval(function() {
    document.getElementById("header").style.background = "url('images/stuff.gif')";
    document.getElementById("header").style.backgroundSize = "cover";
    clearInterval(gifCover2);

    var backgoundCover = setInterval(function() {
      document.getElementById("header").style.background = "url('images/bombExplosion.jpg')";
      document.getElementById("header").style.backgroundSize = "cover";
      clearInterval(backgroundCover);
    }, 10000);
  }, 10000);
}, 10000);
/* End cover background - gif change */

/* Muskequeers easter-egg */
function muskequeers() {
  document.getElementById("muskInfo").src = "images/blank.png";
  document.getElementById("muskText").innerHTML = "VIJAY, CODY &amp; BEN";

  var ttm = setInterval(function() {
    document.getElementById("muskText").innerHTML = "VIJAY, CODY &amp; BEN<br>THE THREE MUSKEQUEERS";
    clearInterval(ttm);
  }, 2000);

  var musk = setInterval(function() {
    document.getElementById("muskText").innerHTML = "";
    document.getElementById("muskInfo").src = "images/1.png";
    clearInterval(musk);
  }, 5000);
}
/* End Muskequeers */
/* EVERYTHING ABOVE IS LINE IS CREDITED TO BEN WATTS-MARR */
/* The Arrow Hover Picutre Change Magic Shit */
/* Credit to Caleb Stewart */
function arrowHoverIn() {
  document.getElementById("arrow").src = "images/arrowHover.png";
}
function arrowHoverOut() {
  document.getElementById("arrow").src = "images/arrow.png";
}
/* End of magical arrow hover stuff */

/* Cover up */
/* Credit to Caleb Stewart */
function shrinkCover() {
  document.getElementById("document").style.overflow = "visible";
  document.getElementById("header").className = "up";
  document.getElementById("pageSubHeading").className = "up";
  document.getElementById("arrow").className = "up";
  document.getElementById("arrow").onclick = expandCover;
  document.getElementById("body").className = "up";

  // following added by ben
  var arrowChange = setInterval(function() {
    document.getElementById("arrow").src = "images/arrowHover.png";
    clearInterval(arrowChange);
  }, 500);
}
/* End of up cover */

/* Cover down */
/* Credit to Caleb Stewart */
function expandCover() {
  document.getElementById("document").style.overflow = "hidden";
  document.getElementById("header").className = "down";
  document.getElementById("pageSubHeading").className = "down";
  document.getElementById("arrow").className = "down";
  document.getElementById("arrow").onclick = shrinkCover;
  document.getElementById("body").className = "down";
}
/* End of down cover */
