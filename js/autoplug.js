// Do not steal code without direct permission from it's owner

API.on(API.chatLog("AutoPlug enabled! "));
$("#woot").click();
API.on(API.ADVANCE, autoplug);
function autoplug(){ $("#woot").click(); }