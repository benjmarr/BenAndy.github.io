// Copyright Benjamin (c) 2015 - All rights reserved
API.on(API.chatLog("Loading VultureBot v0.1.6.20 "));

//UNDER DEVELOPMENT
var underDev = setInterval(function() {
	API.on(API.sendChat("I am still under development. Sorry for any bugs and/or troubles that occur within my code."));
}, 300000);

// Autoplug Support
var autoplugSupport = setInterval(function() {
	API.on(API.sendChat("VultureBot supports AutoPlug!"));
	API.on(API.sendChat("http://goo.gl/NlQiko"));
}, 900000);

API.on(API.ADVANCE, vulturebot);
function vulturebot() {

	// Woot the song
	var autowoot = setInterval(function() {
		$("#woot").click();
		clearInterval(autowoot);
	}, 2000);

	// Snooze
	var songSnooze = setInterval(function() {
		$(".button.snooze").click();
		clearInterval(songSnooze);
	}, 4000);
}
