/*
	Developed by Ben_Andy
	http://benandy.github.io

	DO NOT STEAL ANY CODE WITHOUT DIRECTLY GIVEN PERMISSIONS FROM IT'S OWNER
*/

API.on(API.chatLog("AutoPlug| AutoPlug v0.1.4.40 "));
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
	API.on(API.chatLog("AutoPlug| Attemping to join Dj Wait Llist"));

	// Cancel leaving Dj Wait List
	$("div.button.cancel").click(); 

	// 'Woot' the current song
	$("#woot").click();
	API.on(API.chatLog("AutoPlug| Song 'Wooted'"));
}

// Anti-AFK
setInterval(function() {
	API.on(API.sendChat("l"));
	API.on(API.chatLog("AutoPlug| Reset AFK time"));
}, 600000);

// Sharing AutoPlug
setInterval(funtion() {
	API.on(AWPI.chatLog("AutoPlug| Share AutoPlug with your friends!"))
	API.on(AWPI.chatLog("AutoPlug| http://benandy.github.io/randoms/autoplug"))
}, 9000000);

API.on(API.chatLog(" "));
API.on(API.chatLog("AutoPlug| Share AutoPlug with your freinds! "));
API.on(API.chatLog("AutoPlug| http://benandy.github.io/randoms/autoplug "));
