const multiplicationTable = function(maxValue) {
	let multuplicationTable = "";
	for (i = 1; i <= maxValue; i++) {
		let lines = "";
		for (j = 1; j <= maxValue; j++) {
			const multiples = i * j;
			lines += multiples + " ";
		}
		multuplicationTable += lines + "\n";
	}
	return multuplicationTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));