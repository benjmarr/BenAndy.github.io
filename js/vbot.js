/*
	Developed by Ben_Andy (BenAndy)
	http://benandy.github.io

	DO NOT STEAL ANY CODE WITHOUT DIRECTLY GIVEN PERMISSIONS FROM IT'S OWNER
*/

API.on(API.snedChat("Loading VultureBot v0.0.3.4"));
API.on(API.sendChat("/cap 1"));
API.on(API.sendChat("Capped avatars."));

// When user joins the room																<-- TESTING
API.on(API.USER_JOIN, listener); {
	API.on(API.chatLog("USER_JOIN"));
}
//																						<-- TESTING

API.on(API.sendChat("Loading plug.dj API"));
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
