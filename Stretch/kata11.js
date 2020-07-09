var assert = require('assert');

const calculateChange = function(total, cash) {
	let giveBack = cash - total;
	
	let change = {
		tenDollar: 0,
		twoDollar: 0,
		oneDollar: 0,
		quarter: 0,
		dime: 0,
		penny: 0
	}

	change.tenDollar = Math.trunc(giveBack/1000);
	giveBack %= 1000;
	change.twoDollar = Math.trunc(giveBack/200)
	giveBack %= 200;
	change.oneDollar = Math.trunc(giveBack/100);
	giveBack %= 100;
	change.quarter = Math.trunc(giveBack/25);
	giveBack %= 25;
	change.dime = Math.trunc(giveBack/10);
	giveBack %= 10;
	change.penny = giveBack;
	
	for (let propertyName in change) {
		if (change[propertyName] === 0) {
			delete change[propertyName];
		}
	}
	// if (change.tenDollar === 0) {
	// 	delete change.tenDollar;
	// } else if (change.twoDollar === 0) {
	// 	delete change.twoDollar;
	// } else if (change.oneDollar === 0) {
	// 	delete change.oneDollar;
	// } else if (change.quater === 0) {
	// 	delete change.quater;
	// } else if (change.dine === 0) {
	// 	delete change.dine;
	// } else if (change.penny === 0) {
	// 	delete change.penny;
	// }

	return change;
};
assert.deepEqual(calculateChange(1787, 2000), { twoDollar: 1, dime: 1, penny: 3 });
assert.deepEqual(calculateChange(2623, 4000), { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 });
assert.deepEqual(calculateChange(501, 1000), { twoDollar: 2, quarter: 3, dime: 2, penny: 4 });

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
