// Do not steal code without direct permission from it's owner

API.on(API.chatLog("AutoPlug: Loading... "));
$("#dj-button").click();
$("div.button.cancel").click();
$("#woot").click();
API.on(API.ADVANCE, autoplug);
function autoplug(){  $("#dj-button").click(); $("#woot").click(); $("div.button.cancel").click(); }
API.on(API.chatLog("AutoPlug: Alpha 0.2 "));
API.on(API.chatLog("AutoPlug: AutoPlug activated! "));