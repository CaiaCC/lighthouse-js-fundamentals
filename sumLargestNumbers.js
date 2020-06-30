const sumLargestNumbers = function(data) {
	let firstMax = Number.MIN_VALUE;
  let secMax = 0;
	for (let i = 0; i < data.length; i++) {
		if (firstMax < data[i]) {
			secMax = firstMax;
			firstMax = data[i];
		} else if (secMax < data[i]) {
			secMax = data[i];
		}
	}
	return firstMax + secMax;
};
console.log(sumLargestNumbers([39, 100, 105, 2, 1, 101]));