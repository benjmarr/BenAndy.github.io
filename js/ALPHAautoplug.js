/*
	Developed by Ben_Andy (BenAndy)
	http://benandy.github.io

	DO NOT STEAL ANY CODE WITHOUT DIRECTLY GIVEN PERMISSIONS FROM IT'S OWNER
*/

API.on(API.chatLog("AutoPlug| AutoPlug v0.1.6.64 "));
API.on(API.chatLog("AutoPlug| Developed and copyrighted (c) by Ben_Andy "));

// Enter Dj Wait List
$("#dj-button").click();
// Cancel leaving Dj Wait List
$("div.button.cancel").click();
// 'Woot' the current song
$("#woot").click();
API.on(API.ADVANCE, autoplug);
function autoplug(){ 

	// Enter Dj Wait List
	$("#dj-button").click();
	API.on(API.sendChat("/cap 1"));
	$("div.button.cancel").click();
	API.on(API.chatLog("AutoPlug| Attemping to join Dj Wait Llist" ));
	var cancelCount = setInterval(function() {
		$("div.button.cancel").click();
		clearInterval(cancelCount);
	}, 100);
	var capCount = setInterval(function() {
		API.on(API.sendChat("/cap 50"));
		clearInterval(capCount);
	}, 2000);

	// 'Woot' the current song
	$("#woot").click();
	API.on(API.chatLog("AutoPlug| Song 'Wooted'"));
}

// Anti-AFK
setInterval(function() {
	API.on(API.sendChat("k"));
	API.on(API.chatLog("AutoPlug| AFK time has been reset by sending a messsage into chat"));
}, 5220000);

// Sharing AutoPlug
setInterval(function() {
	API.on(API.chatLog(" "));
	API.on(API.chatLog("AutoPlug| Share AutoPlug with your friends!"));
	API.on(API.chatLog("AutoPlug| http://benandy.github.io/randoms/autoplug"));
	API.on(API.chatLog(" "));
}, 900000);

API.on(API.chatLog(" "));
API.on(API.chatLog("AutoPlug| Share AutoPlug with your freinds! "));
API.on(API.chatLog("AutoPlug| http://benandy.github.io/randoms/autoplug "));
API.on(API.chatLog(" "));
