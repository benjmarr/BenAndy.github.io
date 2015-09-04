// Copyright Benjamin (c) 2015 - All rights reserved.

var version = "v0.2.14.149";
var app = "AutoPlug " + version;
var appDetail = app + " for Plug.Dj";
var load = 500;

console.log("autoplug.js file loaded\nCopyirght Benjamin (c) 2015 - All rights reserved.");
console.log(app);

API.on(API.chatLog("Starting " + app + "!\nPlease wait."));

setTimeout(function() {
	setTimeout(function() {
		API.on(API.chatLog("Type '/commands' in chat to list all the custom " + app + " commands!"));
		setTimeout(afk, 1);
	}, 1500);

	var chatBoxMessage = "Created by Benjamin! | " + app + " | Click here to type your chat message! | ";
	var autoplugActive = setInterval(function() {
		chatBoxMessage = chatBoxMessage.substring(1, chatBoxMessage.length) + chatBoxMessage.substring(0, 1);
		$("#chat-input-field").attr("placeholder", chatBoxMessage);		
	}, 40)

	setTimeout(function() {
		$("#dj-button").click();
		$("div.button.cancel").click();
		$("#woot").click();
	}, 10);

	function afk() {
		var antiAfk = setInterval(function() {
			var afkResetMsg = " ! ";
			API.on(API.sendChat(afkResetMsg));
			API.on(API.chatLog("AutoPlug >> AFK time has been reset by sending" + afkResetMsg + "into chat."));
		}, 5220000);
	}



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
				API.on(API.chatLog("/commands"));
				API.on(API.chatLog("- List of all the custom AutoPlug commands."));
				API.on(API.chatLog("/copyright"));
				API.on(API.chatLog("- Copyright information."));
				API.on(API.chatLog("/stop"));
				API.on(API.chatLog("- Stop the AutoPlug script."));
				API.on(API.chatLog("/reload"));
				API.on(API.chatLog("- Reload the current page."));
				API.on(API.chatLog("")); // Leave blank
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
			case "afkoff":
				clearInterval(antiAfk);
				API.on(API.chatLog("Anti-AFK feature turned off."));
			break;
			case "afkon":
				setTimeout(afk, 1);
				API.on(API.chatLog("Anti-AFK feature turned on."));
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
