// Copyright Benjamin (c) 2015 - All rights reserved.

console.log("autoplug.js file loaded\nCopyirght Benjamin (c) 2015 - All rights reserved.");
console.log("AutoPlug " + version);

var version = "v0.2.11.93";

API.on(API.chatLog("Starting AutoPlug " + version + "!\nPlease wait."));

var autoplugActive = setInterval(function() {
	$("#chat-input-field").attr("placeholder","Click here to type your chat message!");
	var autoplugActiveMSG = setInterval(function() {
		clearInterval(autoplugActiveMSG);
		$("#chat-input-field").attr("placeholder","AutoPlug " + version);
	}, 1000);
}, 2000);

var loadDelay = setInterval(function() {
	clearInterval(loadDelay);
	$("#dj-button").click();
	$("div.button.cancel").click();
	$("#woot").click();
}, 10);

API.on(API.ADVANCE, autoplug);
function autoplug() {
	$("#dj-button").click();
	$("div.button.cancel").click();

	var wootDelay = setInterval(function() {
		clearInterval(wootDelay);
		$("#woot").click();
	}, 5000);
}

setInterval(function() {
	var afkResetMsg = " ! ";
	API.on(API.sendChat(afkResetMsg));
	API.on(API.chatLog("AutoPlug >> AFK time has been reset by sending" + afkResetMsg + "into chat."));
}, 5220000);

API.on(API.chatLog("AutoPlug " + version + " loaded."));
