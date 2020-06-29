const sumLargestNumbers = function(data) {
	let firstMax = 0;
  let secMax = 0;
	for (let i = 0; i < data.length; i++) {
		if (firstMax < data[i]) {
			firstMax = data[i];
		}
	}
	for (let i = 0; i < data.length; i++) {		
		if (data[i] < firstMax && secMax < data[i] ) {
			secMax = data[i];
		}
	}
	return firstMax + secMax;
};
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));