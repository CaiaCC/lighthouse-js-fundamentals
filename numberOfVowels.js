const numberOfVowels = function(data) {
	let count = 0;
	for (i = 0; i < data.length; i++) {
		if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
			count += 1;
		}
	}
	return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));