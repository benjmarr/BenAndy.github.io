/*
Developed by Ben_Andy
http://benandy.github.io

DO NOT STEAL ANY CODE WITHOUT DIRECTLY GIVEN PERMISSIONS FROM IT'S OWNER
*/

API.on(API.chatLog("AutoPlug| Loading AutoPlug version 0.2.1 "));
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
	API.on(API.chatLog("AutoPlug| Joining Dj Wait List..."));

	// Cancel leaving Dj Wait List
	$("div.button.cancel").click(); 

	// 'Woot' the current song
	$("#woot").click();
	API.on(API.chatLog("AutoPlug| Song 'Wooted'"));
}

API.on(API.chatLog("AutoPlug| AutoPlug loaded! "));
API.on(API.chatLog(" "));
API.on(API.chatLog("AutoPlug| Share AutoPlug with your freinds! "));
API.on(API.chatLog("AutoPlug| http://benandy.github.io/randoms/autoplug "));
