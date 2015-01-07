API.on(API.chatLog("Loading VultureBot v0.1.3.8"));
$("#chat-button").click();

API.on(API.ADVANCE, autowoot);
function autowoot() {
	$("#woot").click(); 
}