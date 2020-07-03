const camelCase = function(input) {
	const words = input.split(" ");
	 
	for (let i = 1; i < words.length; i++) {
		words[i] = capitalizeWord(words[i]);
	}
  return words.join('');
};

const capitalizeWord = function(word) {
    // Will return capitalized first character of word
    // this -> This
    // 0123
	return word.charAt(0).toUpperCase() + word.slice(1);
}

// const capitalizeLastWord = function(string) {
//     // Will return capitalized first character of word
//     // this -> This
//     // 0123
//     // string length = 4
//     // 4 - 2 = 2 [  )
// 	return string.slice(0, string.length - 1) + string.charAt(string.length - 1).toUpperCase();
// }


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
