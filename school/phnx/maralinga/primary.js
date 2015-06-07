console.info("This website is under creative commons copyright, 2015.\nAny content stolen from this website can and will result in legal actions.");
console.warn("You have been warned!");
console.log("");
console.info("Page information gathered from various sites and put together by Vijay Chand, Cody Quarrell and Ben Watts-Marr.");
console.info("Coded by Ben Watts-Marr with wonderful assisstance from Caleb Stewart\nContact him at calebs2500@gmail.com");

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
