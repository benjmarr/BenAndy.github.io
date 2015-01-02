/*
	Developed by Ben_Andy
	http://benandy.github.io

	DO NOT STEAL ANY CODE WITHOUT DIRECTLY GIVEN PERMISSIONS FROM IT'S OWNER
*/

API.on(API.chatLog("AutoPlug| AutoPlug v0.1.5.47 "));
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
var antiAFK = setInterval(function() {
	API.on(API.chatLog("AutoPlug| Reset AFK time"));
	API.on(API.sendChat("lol"));
	API.on(API.chatLog("AutoPlug| AFK time has been reset by sending a messsage into chat"));
}, 5220000);

// Sharing AutoPlug
var shareAutoPlug = function fn60sec() {
	API.on(API.chatLog("AutoPlug| "));
	API.on(API.chatLog("AutoPlug| Share AutoPlug with your friends!"));
	API.on(API.chatLog("AutoPlug| http://benandy.github.io/randms/autoplug"));
	API.on(API.chatLog("AutoPlug| "));
}, 900000);

var shareAutoPlugSTOP = setInterval(function() {
	clearInterval(shareAutoPlug);
}, 1800000);

API.on(API.chatLog(" "));
API.on(API.chatLog("AutoPlug| Share AutoPlug with your freinds! "));
API.on(API.chatLog("AutoPlug| http://benandy.github.io/randoms/autoplug "));
