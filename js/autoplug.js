// Do not steal code without direct permission from it's owner

API.on(API.chatLog("AutoPlug: Loading... "));
$("#dj-button").click();
$("#woot").click();
API.on(API.ADVANCE, autoplug);
function autoplug(){  $("#dj-button").click(); $("#woot").click(); }
API.on(API.chatLog("AutoPlug: AutoPlug activated! "));