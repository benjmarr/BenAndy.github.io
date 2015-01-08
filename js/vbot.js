/*
	DEVELOPED AND MANAGED BY Ben_Andy (BenAndy)
	http://benandy.github.io

	DO NOT USE ANY CODE FROM THIS SCRIPT WITHOUT DIRECT PERMISSIONS FROM IT'S OWNER
*/

API.on(API.chatLog("Loading VultureBot v0.1.6.18 "));

//UNDER DEVELOPMENT
var underDev = setInterval(function() {
	API.on(API.sendChat("I am still under development. Sorry for any bugs and/or troubles that occur within my code."));
}, 300000);

$(".button.snooze").click();
$("#woot").click();

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

	// AutoPlug support
	var autoplugSupport = setInterval(function() {
		API.on(API.sendChat("VultureBot supports AutoPlug "));
		API.on(API.sendChat("Click this link to use it! http://goo.gl/NlQiko "));
	}, 900000);
}
