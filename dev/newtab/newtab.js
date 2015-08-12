// #####################################################
// # Copyright Benjamin (c) All rights reserved - 2015 #
// #####################################################

document.title = "New Tab";

//photo-1438216983993-cdcd7dea84ce.jpg
//photo-1433785124354-92116416b870.jpg

if (Math.random() < 0.5) {
  document.getElementById("header").style.backgroundImage = "url('content/background/photo-1434145175661-472d90344c15.jpg')";
} else if (Math.random() < 0.5) {
  document.getElementById("header").style.backgroundImage = "url('content/background/photo-1433785124354-92116416b870.jpg')";
} else {
  document.getElementById("header").style.backgroundImage = "url('content/background/photo-1438216983993-cdcd7dea84ce.jpg')";
}

function time() {
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
}
