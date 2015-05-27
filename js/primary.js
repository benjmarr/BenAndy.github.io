/*
	CREATIVE-COMMS COPYRIGHT BENJAMIN WATTS-MARR 2015
*/
console.info("WEBSITE INFORMATION: Coded by Benjamin Watts-Marr, designed for Google Chrome.");
console.warn("All code on this website is under creative-comms copyright. Any code stolen can and will result in legal actions. You have been warned.");
console.log("By loading this page you have automatically consented to have your IP address logged. Your IP will not be shared and/or sold to anyone, it will stay on my data servers. If you have any questions about this please feel free to contact me.");
var setUUID = setInterval(function() {
	document.getElementById("uuid").innerHTML = Math.random();
	console.log("Set UUID.");
	clearInterval(setUUID);
}, 10000);