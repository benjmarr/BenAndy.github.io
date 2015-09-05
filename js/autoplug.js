// Copyright Benjamin (c) 2015 - All rights reserved.
// Thanks to Buddyblind (James) for some help with the code! https://twitter.com/BuddehDev

var version = "v0.2.14.165";
var app = "AutoPlug " + version;
var appDetail = app + " for Plug.Dj";
var load = 500;
var afkResetMsg = " ! ";

console.log("autoplug.js file loaded\nCopyirght Benjamin (c) 2015 - All rights reserved.");
console.log("Thanks to Buudyblind (James) for some help with the code! https://twitter.com/BuddehDev");
console.log(app);

API.on(API.chatLog("Starting " + app + "!\nPlease wait."));

setTimeout(function() {
	setTimeout(function() {
		API.on(API.chatLog("Type '/commands' in chat to list all the custom " + app + " commands!"));
	}, 1500);

	var chatBoxMessage = "Created by Benjamin! | " + appDetail + " | Click here to type your chat message! | ";
	var autoplugActive = setInterval(function() {
		chatBoxMessage = chatBoxMessage.substring(1, chatBoxMessage.length) + chatBoxMessage.substring(0, 1);
		$("#chat-input-field").attr("placeholder", chatBoxMessage);
	}, 100);

	setTimeout(function() {
		$("#dj-button").click();
		$("div.button.cancel").click();
		$("#woot").click();
	}, 10);

	var antiAfk = setInterval(function() {
		API.on(API.sendChat(afkResetMsg));
		API.on(API.chatLog("AFK time has been reset by sending" + afkResetMsg + "into chat."));
	}, 1800000);

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
			case "commands":
				API.on(API.chatLog("List of commands for AutoPlug:"));
				API.on(API.chatLog("'/commands' List of all the AutoPlug commands"));
				API.on(API.chatLog("'/copyright' Copyright information"));
				API.on(API.chatLog("'/stop' Stop the AutoPlug script"));
				API.on(API.chatLog("'/reload' Reload the page"));
				API.on(API.chatLog("'/playlist' Opens your playlist menu"));
				API.on(API.chatLog("'/history' Opens the Dj history list"));
				API.on(API.chatLog(" ")); // Leave blank
			break;
			case "copyright":
				API.on(API.chatLog(appDetail + " is under creative commons copyright laws."));
			break;
			case "stop":
				API.on(API.chatLog("To stop " + app + " the webpage will have to be reloaded - Don't worry as you will not lose your place in the wait list. If you wish to continue with the reload, type '/reload'."));
			break;
			case "reload":
				API.on(API.chatLog("Reloading the page..."));
				window.location = "";
			break;
			case "playlist":
				API.on(API.chatLog("Opening your playlist menu..."));
			 	$("#your-active-playlist").click();
			break;
			case "history":
				API.on(API.chatLog("Opening Dj history list..."));
				$("#history-button").click();
			break;
			case "afktoggle":
				if (afkOnOff == 1) {
					var afkOnOff = 0;
					var afkOnOffStatus = "off";
				} else {
					var afkOnOff = 1;
					var afkOnOffStatus = "on";
				}
				setTimeout(function() {
					API.on(API.chatLog("Anti-AFK is now " + afkOnOffStatus));
				}, 10);
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
