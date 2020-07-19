var assert = require('assert');

function generateBoard(whiteQueen, blackQueen) {
	let board = new Array(8);

	for ( let i = 0; i < board.length; i++) {
		board[i] = new Array(8);
	}

	let row = 0;
	let col = 0;

	for (row = 0; row < board.length; row++) {
		for (col = 0; col < board.length; col++) {
			board[row][col] = 0;
		}
	}

	if (whiteQueen) {
		row = whiteQueen[0];
		col = whiteQueen[1];
		board[row][col] = 1;
	}
	if (blackQueen) {
		row = blackQueen[0];
		col = blackQueen[1];
		board[row][col] = 1;
	}
	return board;
};


function queenThreat(generateBoard) {
	let firstQueen = [];
	let secQueen = [];

	let row = 0;
	let col = 0;
	for (row = 0; row < generateBoard.length; row++) {
		for (col = 0; col < generateBoard.length; col++) {
			if (generateBoard[row][col] === 1) {
				firstQueen = [row, col];
			}
		}
	}
	generateBoard[firstQueen[0]][firstQueen[1]] = 0

	for (row = 0; row < generateBoard.length; row++) {
		for (col = 0; col < generateBoard.length; col++) {
			if (generateBoard[row][col] === 1) {
				secQueen = [row, col];
			}
		}
	}
	// Part 1: Check if in same row
	// O(1)
	if (firstQueen[0]-secQueen[0] === 0) {
		return true;
	}

	// O(1)
	// Part 2: Check if in the same column
	if (firstQueen[1]-secQueen[1] === 0) {
		return true;
	}

	// Part 3: Check if in left to right diagonal
	// Part 4: Check if in right to left diagonal
	// O(1)
	if (calculateSlope(firstQueen, secQueen) === 1) {
		return true;
	}

	return false;
	
	// if (Math.abs(firstQueen[0]-secQueen[0]) <=1 && Math.abs(firstQueen[1]-secQueen[1]) <= 1) {
	// 	return true;
	// } else {
	// 	return false;
	// }
}

// O(3) = O(1)
// O(2n) = O(n)
// O(n^2)
// O(n^3)

function calculateSlope (a, b) {
	const y = Math.abs(b[0]-a[0]);
	const x = Math.abs(b[1]-a[1]);
	return y / x;
}

// function queenThreat(board){
// 	let firstQueen = [];
// 	let secQueen = [];

// 	let row = 0;
// 	let col = 0;
// 	for (row = 0; row < board.length; row++) {
// 		for (col = 0; col < board.length; col++) {
// 			if (board[row][col] === 1) {
// 				firstQueen = [row, col];
// 			}
// 		}
// 	}
// board[firstQueen[0]][firstQueen[1]] = 0

// 	for (row = 0; row < board.length; row++) {
// 		for (col = 0; col < board.length; col++) {
// 			if (board[row][col] === 1) {
// 				secQueen = [row, col];
// 			}
// 		}
// 	}
// 	// console.log(firstQueen, secQueen)
// 	if (Math.abs(firstQueen[0]-secQueen[0]) <=1 && Math.abs(firstQueen[1]-secQueen[1]) <= 1) {
// 		return true;
// 	} else {
// 			return false;
// 		}
// }

let whiteQueen = [5, 6];
let blackQueen = [5, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
assert(queenThreat(generatedBoard));

whiteQueen = [5, 0];
blackQueen = [3, 0];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
assert(queenThreat(generatedBoard));


whiteQueen = [0, 0];
blackQueen = [7, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
assert(queenThreat(generatedBoard));

whiteQueen = [0, 4];
blackQueen = [4, 0];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
assert(queenThreat(generatedBoard));

whiteQueen = [1, 4];
blackQueen = [4, 0];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
assert(!queenThreat(generatedBoard));

