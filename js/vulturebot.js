// Copyright Benjamin (c) 2015 - All rights reserved

var ver = "v0.1.2.5";
var app = "VultureBot " + ver;
var appDetail = app + " for plug.dj";
var load = 500;

API.on(API.chatLog("Loading " + appDeatil + "! Please wait..."));
API.on(API.sendChat("Loading " + appDeatil + "! Please wait..."));

setTimeout(function() {
	API.on(API.ADVANCE, vulturebot);
	function vulturebot() {
		setTimeout(function() {
			$("#woot").click();
		}, 3000);
	}
	API.on(API.chatLog(appDeatil + " loaded!"));
	API.on(API.sendChat(appDeatil + " loaded!"));
} load);
