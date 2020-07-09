var assert = require('assert');

const makeCase = function(input, cases) {
	let casesArray = [];

	if (typeof cases === "string") {
		casesArray.push(cases);
	} else {
		casesArray = cases;
	};
	let answer = input;
	
	for (let i = 0; i < casesArray.length; i++) {
		let caseElement = casesArray[i];
		
		if (caseElement === "camel") {
			answer = camel(answer);
		} else if (caseElement === "pascal") {
			answer = pascal(answer);
		} else if (caseElement === "snake") {
			answer = snake(answer);
		} else if (caseElement === "kebab") {
			answer = kebab(answer);
		} else if (caseElement === "title") {
			answer = title(answer);
		};

		if (caseElement === "vowel") {
			answer = vowel(answer);
		} else if (caseElement === "consonant") {
			answer = consonant(answer);
		};

		if (caseElement === "upper") {
			answer = answer.toUpperCase();
		} else if (caseElement === "lower") {
			answer = answer.toLowerCase();
		};
	}
	return answer;
}

const camel = function(input) {
	const words = input.split(" ");
	 
	for (let i = 1; i < words.length; i++) {
		words[i] = capitalizeWord(words[i]);
	}
  return words.join('');
};

const capitalizeWord = function(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

const pascal = function(input) {
	const words = input.split(" ");
	 
	for (let i = 0; i < words.length; i++) {
		words[i] = capitalizeWord(words[i]);
	}
  return words.join('');
};

const snake = function(input) {
	const words = input.split(" ");

  return words.join('_');
};

const kebab = function(input) {
	const words = input.split(" ");

  return words.join('-');
};

const title = function(input) {
	const words = input.split(" ");
	 
	for (let i = 0; i < words.length; i++) {
		words[i] = capitalizeWord(words[i]);
	}
  return words.join(' ');
};


const vowel = function(input) {
	const words = input.split(" ");
	 
	for (let i = 0; i < words.length; i++) {
		words[i] = capitalizeVowel(words[i]);
	}
  return words.join(' ');
};

const capitalizeVowel = function(word) {
	const  output = word.split("");
	for (let i = 0; i < output.length; i++) {
		if (isVowel(output[i])) {
			output[i] = output[i].toUpperCase();
		} else {
			output[i] = output[i];
		}
	}
	return output.join('');
}

const consonant = function(input) {
	const words = input.split(" ");
	 
	for (let i = 0; i < words.length; i++) {
		words[i] = capitalizeConsonant(words[i]);
	}
  return words.join(' ');
};

const capitalizeConsonant = function(word) {
	const output = word.split("");
	for (let i = 0; i < output.length; i++) {
		if (!isVowel(output[i])) {
			output[i] = output[i].toUpperCase();
		} else {
			output[i] = output[i];
		}
	}
	return output.join('');
}

const isVowel = function(word) {
	return word === "a" 
	|| word === "e" 
	|| word === "i" 
	|| word === "o" 
	|| word === "u"
};
// const capitalizeWord = function(word) {
// 	return word.charAt(0).toUpperCase() + word.slice(1);
// }

// const upper = function(input) {
//   return input.toUpperCase();
// };

// const lower = function(input) {
//   return input.toLowerCase();
// };

assert.deepEqual(makeCase("this is a string", "camel"), "thisIsAString");
assert.deepEqual(makeCase("this is a string", "pascal"), "ThisIsAString");
assert.deepEqual(makeCase("this is a string", "snake"), "this_is_a_string");
assert.deepEqual(makeCase("this is a string", "kebab"), "this-is-a-string");
assert.deepEqual(makeCase("this is a string", "title"), "This Is A String");
assert.deepEqual(makeCase("this is a string", "vowel"), "thIs Is A strIng");
assert.deepEqual(makeCase("this is a string", "consonant"), "THiS iS a STRiNG");
assert.deepEqual(makeCase("this is a string", ["upper", "snake"]), "THIS_IS_A_STRING");

// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));