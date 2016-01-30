// Copyright Benjamin (c) 2016 - All rights reserved

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}

// opacity() method
var opacity = function(id, opacity, delay) {
  setTimeout(function() {
    document.getElementById(id).style.opacity = opacity;
  }, delay);
};

// Set header background
document.getElementById("header").style.backgroundImage = "url('content/background.jpg')";

// Nav Data
var nav0Data = ["Skye New Tab", "http://benandy.github.io/skye", "blank"];
var nav1Data = ["Should You?", "http://benandy.github.io/r/shouldyou", "blank"];
var nav2Data = ["Snapchat Online", "http://benandy.github.io/r/snapchat", "blank"];
var nav3Data = ["Web Development Services", "development.html", "self"];
var nav4Data = ["Contact Me", "https://benandy.typeform.com/to/EyWPJI", "blank"];

// Set Nav
var setNav0 = function() {document.getElementById("nav0").innerHTML = "<a href='" + nav0Data[1] + "' target='_" + nav0Data[2] + "'>" + nav0Data[0] + "</a>";};
var setNav1 = function() {document.getElementById("nav1").innerHTML = "<a href='" + nav1Data[1] + "' target='_" + nav1Data[2] + "'>" + nav1Data[0] + "</a>";};
var setNav2 = function() {document.getElementById("nav2").innerHTML = "<a href='" + nav2Data[1] + "' target='_" + nav2Data[2] + "'>" + nav2Data[0] + "</a>";};
var setNav3 = function() {document.getElementById("nav3").innerHTML = "<a href='" + nav3Data[1] + "' target='_" + nav3Data[2] + "'>" + nav3Data[0] + "</a>";};
var setNav4 = function() {document.getElementById("nav4").innerHTML = "<a href='" + nav4Data[1] + "' target='_" + nav4Data[2] + "'>" + nav4Data[0] + "</a>";};

setNav0();
setNav1();
setNav2();
setNav3();
setNav4();

// Page load animations
opacity("titleBox", "1", 500);
setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    opacity("nav" + i, 1, i * 500);
  };
}, 1000);

// Nav hovers
  // Skye New Tab
document.getElementById("nav0").addEventListener("mouseover", function() {
  opacity("header", "1", 0);
  opacity("nav1", "0", 0);
  opacity("nav2", "0", 0);
  opacity("nav3", "0", 0);
  opacity("nav4", "0", 0);
  document.getElementById("titleBox").style.color = "#FFFFFF";
}, false);

document.getElementById("nav0").addEventListener("mouseout", function() {
  opacity("header", "0", 0);
  opacity("nav1", "1", 0);
  opacity("nav2", "1", 0);
  opacity("nav3", "1", 0);
  opacity("nav4", "1", 0);
  document.getElementById("titleBox").style.color = "#000000";
}, false);

  // Should You?
document.getElementById("nav1").addEventListener("mouseover", function() {
  opacity("nav0", "0", 0);
  opacity("nav2", "0", 0);
  opacity("nav3", "0", 0);
  opacity("nav4", "0", 0);
  setTimeout(function() {
    document.getElementById("nav3").innerHTML = "Can't decide if you want to do something or not?";
    document.getElementById("nav4").innerHTML = "This page should help you out...!";
    opacity("nav3", "1", 100);
    opacity("nav4", "1", 100);
  }, 500);
}, false);

document.getElementById("nav1").addEventListener("mouseout", function() {
  opacity("nav3", "0", 0);
  opacity("nav4", "0", 0);
  setTimeout(function() {
    setNav3();
    setNav4();
    opacity("nav0", "1", 0);
    opacity("nav1", "1", 0);
    opacity("nav2", "1", 0);
    opacity("nav3", "1", 0);
    opacity("nav4", "1", 0);
  }, 500);
}, false);

  // Snapchat Online
document.getElementById("nav2").addEventListener("mouseover", function() {
  opacity("nav0", "0", 0);
  opacity("nav1", "0", 0);
  opacity("nav3", "0", 0);
  opacity("nav4", "0", 0);
  document.getElementById("body").style.backgroundColor = "#FFFC00";
}, false);

document.getElementById("nav2").addEventListener("mouseout", function() {
  opacity("nav0", "1", 0);
  opacity("nav1", "1", 0);
  opacity("nav3", "1", 0);
  opacity("nav4", "1", 0);
  document.getElementById("body").style.backgroundColor = "#FFFFFF";
}, false);

  // Web Development Services
document.getElementById("nav3").addEventListener("mouseover", function() {
  opacity("nav0", "0", 0);
  opacity("nav1", "0", 0);
  opacity("nav2", "0", 0);
  opacity("nav4", "0", 0);
  setTimeout(function() {
    document.getElementById("nav1").innerHTML = "Want a website or a web application?";
    document.getElementById("nav2").innerHTML = "Click to see what I can do!";
    opacity("nav1", "1", 0);
    opacity("nav2", "1", 0);
  }, 500);
}, false);

document.getElementById("nav3").addEventListener("mouseout", function() {
  opacity("nav1", "0", 0);
  opacity("nav2", "0", 0);
  setTimeout(function() {
    setNav1();
    setNav2();
    opacity("nav0", "1", 0);
    opacity("nav1", "1", 0);
    opacity("nav2", "1", 0);
    opacity("nav4", "1", 0);
  }, 500);
}, false);

document.getElementById("nav3").addEventListener("click", function() {
  opacity("body", 0, 0);
}, false);

  // Contact Me
document.getElementById("nav4").addEventListener("mouseover", function() {
  opacity("nav0", "0", 0);
  opacity("nav1", "0", 0);
  opacity("nav2", "0", 0);
  opacity("nav3", "0", 0);
  setTimeout(function() {
    document.getElementById("nav1").innerHTML = "Have a question you want to ask?";
    document.getElementById("nav2").innerHTML = "Feel free to reach out to me!";
    opacity("nav1", "1", 0);
    opacity("nav2", "1", 0);
  }, 500);
}, false);

document.getElementById("nav4").addEventListener("mouseout", function() {
  opacity("nav1", "0", 0);
  opacity("nav2", "0", 0);
  setTimeout(function() {
    setNav1();
    setNav2();
    opacity("nav0", "1", 0);
    opacity("nav1", "1", 0);
    opacity("nav2", "1", 0);
    opacity("nav3", "1", 0);
  }, 500);
}, false);

(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.location=b})(navigator.userAgent||navigator.vendor||window.opera,'/m/index.html');
