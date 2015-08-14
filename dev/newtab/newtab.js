// #####################################################
// # Copyright Benjamin (c) All rights reserved - 2015 #
// #####################################################

document.title = "New Tab"

var background = setInterval(function() {
  if (Math.random() < 0.5) {
    document.getElementById("header").style.backgroundImage = "url('content/background/photo-1436891620584-47fd0e565afb.jpg')";
  } else if (Math.random() < 0.5) {
    document.getElementById("header").style.backgroundImage = "url('content/background/photo-1436891678271-9c672565d8f6.jpg')";
  } else {
    document.getElementById("header").style.backgroundImage = "url('content/background/photo-1437532437759-a0ce0535dfed.jpg')";
  }
  clearInterval(background);
}, 100);

console.log("clockLoad");
var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
setInterval(GetClock,1000);

function GetClock() {
  console.log("secondCount");
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
