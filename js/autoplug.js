// Copyright Benjamin (c) 2015 - All rights reserved.

var version = "v0.2.12.112";
var app = "AutoPlug " + version;
var appDetail = app + " for Plug.Dj";

console.log("autoplug.js file loaded\nCopyirght Benjamin (c) 2015 - All rights reserved.");
console.log(app);

API.on(API.chatLog("Starting " + app + "!\nPlease wait."));

var autoplugActive = setInterval(function() {
	if (Math.random() < 0.3) {
		$("#chat-input-field").attr("placeholder","Created by Benjamin!");
	} else {
		$("#chat-input-field").attr("placeholder","Click here to type your chat message!");
	}
	var autoplugActiveMSG = setInterval(function() {
		clearInterval(autoplugActiveMSG);
		$("#chat-input-field").attr("placeholder",app);
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

API.on(API.WAIT_LIST_UPDATE, waitlistupdate);
function waitlistupdate() {
	$("#dj-button").click();
	$("div.button.cancel").click();
}

API.on(API.chatLog(app + " loaded."));
