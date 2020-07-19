const urlDecode = function(text) {
	const output = {};
	const word = text.split("&");

	for (let i = 0; i < word.length; i++) {
		const keyPair = word[i].split("=");
		output[keyPair[0]] = replaceWithWhitespace(keyPair[1]);
	};
	return output;
};

const replaceWithWhitespace = function (input) {
	const words = input.split("%20");
	return words.join(" ");
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);