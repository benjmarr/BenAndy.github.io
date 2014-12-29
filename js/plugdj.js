API.on(API.chatLog("Share these plug.dj changes with your freinds! "));
$("#woot").click();
API.on(API.ADVANCE, autowoot);
function autowoot(){ $("#woot").click(); }