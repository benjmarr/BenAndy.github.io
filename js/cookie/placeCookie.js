cookie_name = "Test Cookie";
function write_cookie() {
	if(document.cookie) {
		index = document.cookie.indexOf(cookie_name);
	} else {
		index = -1;
	}

	if (index == -1) {
		document.cookie=cookie_name+"=1; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
	} else {
		countbegin = (document.cookie.indexOf("=", index) + 1);
		counted = document.cookie.indexOf(";", index);
		if (counted == -1) {
			counted = document.cookie.length;
		}
		count = eval(document.cookie.substring(countbeing, counted)) + 1;
		document.cookie=cookie_name+"="+count+; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
	}
}