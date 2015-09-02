// Copyright Benjamin (c) 2015 - All rights reserved.

var version = "v0.2.13.128";
var app = "AutoPlug " + version;
var appDetail = app + " for Plug.Dj";
var load = 500;

console.log("autoplug.js file loaded\nCopyirght Benjamin (c) 2015 - All rights reserved.");
console.log(app);

API.on(API.chatLog("Starting " + app + "!\nPlease wait."));

var setTimeout(function() {
	var autoplugActive = setInterval(function() {
		if (Math.random() < 0.5) {
			$("#chat-input-field").attr("placeholder","Created by Benjamin!");
		} else {
			$("#chat-input-field").attr("placeholder",app);
		}
		var setTimeout(function() {
			$("#chat-input-field").attr("placeholder","Click here to type your chat message!");
		}, 1000);
	}, 2000);

	var setTimeout(function() {
		$("#dj-button").click();
		$("div.button.cancel").click();
		$("#woot").click();
	}, 10);

	setInterval(function() {
		var afkResetMsg = " ! ";
		API.on(API.sendChat(afkResetMsg));
		API.on(API.chatLog("AutoPlug >> AFK time has been reset by sending" + afkResetMsg + "into chat."));
	}, 5220000);

	API.on(API.ADVANCE, autoplug);
	function autoplug() {
		$("#dj-button").click();
		$("div.button.cancel").click();
		var setTimeout(function() {
			$("#woot").click();
		}, 5000);
	}

	API.on(API.WAIT_LIST_UPDATE, waitlistupdate);
	function waitlistupdate() {
		$("#dj-button").click();
		$("div.button.cancel").click();
	}

	API.on(API.MOD_SKIP, modskip);
	function modskip(username) {
		API.on(API.chatLog(username + " skipped the Dj!"));
	}

	API.on(API.chatLog(app + " loaded."));
}, load);
