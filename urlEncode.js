const urlEncode = function(text) {
	let url = "";
	for (i = 0; i < text.length; i++) {
			let sub = text[i].replace(/ /, "%20");
		url += sub;
	}
	return url;
	// const url = text.replace(/ /, "%20");
	// return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));