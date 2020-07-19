var assert = require('assert');

// const squareCode = function(message) {
// 	let spacesRemoved = noSpaces(message); 
// 	const charactersPerLine = Math.ceil(Math.sqrt(spacesRemoved.length));

// 	let rectangleCode = [];
// 	let answer = []

// 	// print X characters per line
// 	const rows = spacesRemoved.length / charactersPerLine;
// 	for (let row = 0; row < rows; row++) {
// 		let messageSplit = "";

// 		let messageLen = charactersPerLine;
// 		if (spacesRemoved.length < charactersPerLine) {
// 			messageLen = spacesRemoved.length;
// 		}

// 		for (let column = 0; column < messageLen; column++){
// 			messageSplit += spacesRemoved[column];		
// 		}
// 		spacesRemoved = spacesRemoved.slice(messageSplit.length);
// 		rectangleCode.push(messageSplit);
// 	}
	
// 	// rectangleCode[rectangleCode.length-1] = rectangleCode[rectangleCode.length-1].replace("undefined","");
// 	//take the characters from each colume
// 	const columns = charactersPerLine;
// 	console.log(rectangleCode, columns, rows);
// 	for (let column = 0; column < columns; column++) {
// 		let verticalString = "";

// 		for (let row = 0; row < rows; row++){
// 			console.log(rectangleCode[column])
// 			verticalString += rectangleCode[column][row];		
// 		}
// 		answer.push(verticalString);
// 	}
// 	return answer;
// };


const squareCodeWithArray = function(message) {
	let spacesRemoved = removeSpaces(message); 
	const charactersPerLine = Math.ceil(Math.sqrt(spacesRemoved.length));
	const rows = spacesRemoved.length / charactersPerLine;
	const cols = charactersPerLine;

	let board = [];
	
	// Create the board
	for (let i = 0; i < rows; i++) {
		board[i] = [];
	}

	let row = 0;
	let col = 0;
	for (let index = 0; index < spacesRemoved.length; index++) {
		board[row][col] = spacesRemoved[index];
		col++;
		if (col >= cols) {
			col = 0;
			row++;
		}
	}
	let result = "";

	for (col = 0; col < cols; col++) {
		for (row = 0; row < rows; row++) {
			if (board[row][col] !== undefined) {
				result += board[row][col];
			}
		}
		result += " ";
	}
	result = result.trim();

	// console.log(result);
	return result;
};


const removeSpaces = function (message) {
	let words = message.split(" ");
	return words.join("");
}


assert.equal(squareCodeWithArray("chill out"), "clu hlt io");
assert.equal(squareCodeWithArray("feed the dog"), "fto ehg ee dd");
assert.equal(squareCodeWithArray("have a nice day"), "hae and via ecy");
assert.equal(squareCodeWithArray("if man was meant to stay on the ground god would have given us roots"), "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau");



// [
// 	['i', 'f', 'm', 'a', 'n', 'w', 'a', 's'],
// 	['m', 'e', 'a', 'n'],
// 	[],
// ]

// ifmanwas
// meanttos
// tayonthe
// groundgo
// dwouldha
// vegivenu
// sroots  

// ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots

// (row * col) + col