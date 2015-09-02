// Copyright Benjamin (c) 2015 - All rights reserved.

var version = "v0.2.14.136";
var app = "AutoPlug " + version;
var appDetail = app + " for Plug.Dj";
var load = 500;

console.log("autoplug.js file loaded\nCopyirght Benjamin (c) 2015 - All rights reserved.");
console.log(app);

API.on(API.chatLog("Starting " + app + "!\nPlease wait."));

setTimeout(function() {
	setTimeout(function() {
		API.on(API.chatLog("Type '/commands' in chat to list all the custom " + app + " commands!"));
	}, 1500);
	var autoplugActive = setInterval(function() {
		if (Math.random() < 0.5) {
			$("#chat-input-field").attr("placeholder","Created by Benjamin!");
		} else {
			$("#chat-input-field").attr("placeholder",app);
		}
		setTimeout(function() {
			$("#chat-input-field").attr("placeholder","Click here to type your chat message!");
		}, 1000);
	}, 2000);

	setTimeout(function() {
		$("#dj-button").click();
		$("div.button.cancel").click();
		$("#woot").click();
	}, 10);

	setInterval(function() {
		var afkResetMsg = " ! ";
		API.on(API.sendChat(afkResetMsg));
		API.on(API.chatLog("AutoPlug >> AFK time has been reset by sending" + afkResetMsg + "into chat."));
	}, 5220000);

	API.on(API.CHAT_COMMAND, command);
	function command(value) {
  	var commandfunction = "";
		if (value.indexOf(" ") == -1) {
			var commandfunction = value.substring(value.indexOf("/")+1,value.length);
		} else {
			var commandfunction = value.substring(value.indexOf("/")+1,value.indexOf(" "));
		}
		switch(commandfunction)
		{
			case "stop":
				alert(appDetail);
			break;
		}
	}

	API.on(API.ADVANCE, autoplug);
	function autoplug() {
		$("#dj-button").click();
		$("div.button.cancel").click();
		setTimeout(function() {
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
