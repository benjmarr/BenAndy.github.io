function ie() {
	// CREEPS THIS IS TOTALLY NOT YOUR CODE <3 <3
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		$("title").text("No Internet Explorer");
		$("body").html("\
		<div id='internetexploder'>\
			<span style='font-size: 2em'>NO IE FOR YOU</span><br>\
			<span>You are using Internet Exporer</span><br>\
			<span>Please consider getting a different browser</span><br><br>\
			<span>Why?<br>Because programming a website with Internet Exploder support... is horribly hard.</span><br>\
			<span>Better browsers:<br>\
			<a href='http://chrome.google.com'>Google Chrome</a>\
			<a href='http://www.apple.com/safari'>Apple Safari</a>\
			<a href='http://www.mozilla.com/firefox'>Mozilla Firefox</a>\
			</span>\
		</div>");
		return true;
		alert("Everyone hates you Microsoft");
	}
	return false;
}

$(document).ready(function(){

	//Don't mess with IE.
	if( ie() ) {
		return;
	}

	//AJAX request xheader.html
	$.ajax({
		url: '/xheader.html',
		async: false
	}).done(function(data){
		$("#header").html(data);
	});

	//AJAX request xfooter.html
	$.ajax({
		url: '/xfooter.html',
		async: false
	}).done(function(data){
		$("#footer").html(data);
		$(window).resize();
	});

	// EVENT HANDLERS
	$(document).mousemove(function(e){

		$("#content .background .bg").css("top", 75-(e.pageY / $(window).height() * 50) + "%" || "50%" );
		$("#content .background .bg").css("left", 75-(e.pageX / $(window).width() * 50) + "%" || "50%" );

	});

});


//relative element positioning
$(window).resize(function(){

	var documentHeight = 0;
	if( $("#footer").hasClass("fixed") || true ) {
		documentHeight = $("#header").outerHeight() + $("#content").outerHeight() + $("#footer").outerHeight();
	} else {
		documentHeight = $("#header").outerHeight() + $("#content").outerHeight();
	}

	if( documentHeight > $(window).height() ) {
		$("#footer").removeClass("fixed");
	} else {
		$("#footer").addClass("fixed");
	}
	// Yes Creeps sort of made this so.... <3 http://creeper32605.github.io
});
