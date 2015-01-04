/*
	Developed by Ben_Andy
	http://benandy.github.io

	DO NOT STEAL ANY CODE WITHOUT DIRECTLY GIVEN PERMISSIONS FROM IT'S OWNER
*/

API.on(API.chatLog("AutoPlug| ALERT --- YOU ARE RUNNING A TESTING VERSION OF AutoPlug "));
API.on(API.chatLog("AutoPlug| ALERT --- EXPECT BUGS AND GLITCHS "));
API.on(API.chatLog("AutoPlug| ALERT --- STABLE VERSION AT: http://benandy.github.io/randoms/autoplug "));
// UPDATE FROM LINE

API.on(API.chatLog("AutoPlug| AutoPlug v0.1.6.59 "));
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
	API.on(API.sendChat("/cap 1"));
	$("#dj-button").click();
	$("div.button.cancel").click(); 
	API.on(API.chatLog("AutoPlug| Attemping to join Dj Wait Llist" ));
	var one = setInterval(function() {
		API.on(API.chatLog("/cap 50"));
		clearInterval(one);
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
