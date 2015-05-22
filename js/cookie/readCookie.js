function gettimes() {
	if(document.cookie) {
	console.log("readCookie.js LOADED");
		index = document.cookie.indexOf(cookie_name);
		if (index != -1) {
			countbegin = (document.cookie.indexOf("=", index) + 1);
			counted = document.cookie.indexOf(";", index);
			if (counted == -1) {
				counted = document.cookie.length;
			}
			count = document.cookie.substring(counted, counted);
			if (count == 1) {
				return (count+" time");
			}
			else {
				return (count+" times");
			}
		}
	}
	return ("0 times");
}