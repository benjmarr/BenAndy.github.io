// #####################################################
// # Copyright Benjamin (c) All rights reserved - 2015 #
// #####################################################

document.title = "New Tab"

function options() {
  document.getElementById("optionsMenu").style.visibility = "visible";
  document.getElementById("optionsImg").style.visibility = "hidden";
  document.getElementById("optionsImg").style.height = "0px";
}

function optionsClose() {
  document.getElementById("optionsMenu").style.visibility = "hidden";
  document.getElementById("optionsImg").style.visibility = "visible";
  document.getElementById("optionsImg").style.height = "3%";
}

function optionsTEXTCOLOUR1() {
  document.getElementById("optionTextColour").innerHTML = "<a onclick='optionsTEXTCOLOUR2()'>Colour Scheme</a>";
  document.getElementById("optionsMenu").style.backgroundColor = "white";
  document.getElementById("options").style.color = "black";
  document.getElementById("unsplash").style.color = "black";
  document.getElementById("clockbox").style.color = "black";
  document.getElementById("datebox").style.color = "black";
  document.getElementById("newtab").style.color = "black";
}

function optionsTEXTCOLOUR2() {
  document.getElementById("optionTextColour").innerHTML = "<a onclick='optionsTEXTCOLOUR1()'>Colour Scheme</a>";
  document.getElementById("optionsMenu").style.backgroundColor = "black";
  document.getElementById("options").style.color = "white";
  document.getElementById("unsplash").style.color = "white";
  document.getElementById("clockbox").style.color = "white";
  document.getElementById("datebox").style.color = "white";
  document.getElementById("newtab").style.color = "white";
}

var background = setInterval(function() {
  if (Math.random() < 0.3) {
    document.getElementById("header").style.backgroundImage = "url('content/background/photo-1436891620584-47fd0e565afb.jpg')";
  } else {
    if (Math.random() < 0.3) {
      document.getElementById("header").style.backgroundImage = "url('content/background/photo-1436891678271-9c672565d8f6.jpg')";
    } else {
      document.getElementById("header").style.backgroundImage = "url('content/background/photo-1437532437759-a0ce0535dfed.jpg')";
    }
  }
  clearInterval(background);
}, 1);

setInterval(options1,1000);
function options1() {
  document.getElementById("optionsImg").src = "content/options.png";
  var options = setInterval(function() {
    document.getElementById("optionsImg").src = "content/optionsHover.png";
    clearInterval(options);
  }, 500);
}

var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
setInterval(GetClock,1000);

function GetClock() {
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
  var d=new Date();
  var nhour=d.getHours(),nmin=d.getMinutes(),ap;
  if(nhour==0){ap=" AM";nhour=12;}
  else if(nhour<12){ap=" AM";}
  else if(nhour==12){ap=" PM";}
  else if(nhour>12){ap=" PM";nhour-=12;}
  if(nmin<=9) nmin="0"+nmin;
  document.getElementById('datebox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+"";
  document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
}
