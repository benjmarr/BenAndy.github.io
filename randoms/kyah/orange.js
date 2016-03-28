// Copyright Benjamin (c) 2016 - All rights reserved

console.log("Copyright Benjamin (c) 2016 - All rights reserved\nFor Kyah~");

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}

var opacity = function(id, opacity, delay) {
  setTimeout(function() {
    document.getElementById(id).style.opacity = opacity;
  }, delay);
};

opacity("x", "1", "1000");
opacity("xx", "1", "1500");
opacity("img", "1", "2000");

var imageAmount = 7;
var currentImage = 1;

document.getElementById("buttonBack").addEventListener("click", function() {
  if (currentImage < 2) {
    currentImage = imageAmount;
  } else {
    currentImage = currentImage - 1;
  }
}, false)

document.getElementById("buttonNext").addEventListener("click", function() {
  if (currentImage === imageAmount) {
    currentImage = 1;
  } else {
    currentImage = currentImage + 1;
  }
}, false);

var imageURL = new Array("http://mongabay-images.s3.amazonaws.com/780/indonesia/kalimantan_0278.jpg", "http://mongabay-images.s3.amazonaws.com/780/indonesia/kalimantan_0375.jpg", "http://il5.picdn.net/shutterstock/videos/4550051/thumb/1.jpg", "http://i.dailymail.co.uk/i/pix/2011/10/31/article-2055632-0E9BA74E00000578-168_634x484.jpg", "http://mongabay-images.s3.amazonaws.com/780/indonesia/kalimantan_0194.jpg", "http://travel.mongabay.com/indonesia/600/kalimantan_0164.jpg", "http://travel.mongabay.com/indonesia/600/kalimantan_0223.jpg");

setInterval(function() {
  document.getElementById("img").src = imageURL[currentImage - 1];
}, 50);
