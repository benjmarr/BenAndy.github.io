/*
	Developed by Ben_Andy (BenAndy)
	http://benandy.github.io

	DO NOT STEAL ANY CODE WITHOUT DIRECTLY GIVEN PERMISSIONS FROM IT'S OWNER
*/

API.on(API.chatLog("Loading VultureBot v0.0.2.3"));

API.on(API.ADVANCE, autoplug);
function autoplug(){
	// Auto woot
	var autowoot = setInterval(funcion() {
		$("#woot").click();	
		clearInterval(autowoot);
	}, 2000);
}

// AutoPlug support
var autoplugSupport = setInterval(funcion() {
	API.on(API.sendChat("We support #AutoPlug!"));
	API.on(API.sendChat("Download it here:"));
	API.on(API.sendChat("http://goo.gl/NlQiko"));
},900000 );
