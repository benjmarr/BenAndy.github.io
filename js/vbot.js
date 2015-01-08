/*
	DEVELOPED AND MANAGED BY Ben_Andy (BenAndy)
	http://benandy.github.io

	DO NOT USE ANY CODE FROM THIS SCRIPT WITHOUT DIRECT PERMISSIONS FROM IT'S OWNER
*/


API.on(API.chatLog("Loading VultureBot v0.1.5.16 "));
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
	}, 1000);	

	// AutoPlug support
	var autoplugSupport = setInterval(function() {
		API.on(API.sendChat("VultureBot supports AutoPlug "));
		API.on(API.sendChat("Click this link to use it! "));
		API.on(API.sendChat("http://goo.gl/NlQiko "))
	}, 900000);
}
