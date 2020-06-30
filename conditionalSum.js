const conditionalSum = function(values, condition) {
	let sum = [];
	let answer = 0;
	for (i = 0; i < values.length; i++) {
    if(condition === "even") {
		  if (values[i] % 2 === 0) {
				sum.push(values[i]);
			}
		} else if (condition === "odd") {
			if (values[i] % 2 !== 0){
			sum.push(values[i]);
			}
		}
	}
	for (i = 0; i < sum.length; i++) {
		answer += sum[i];
	}
	return answer;
};

console.log(conditionalSum([13, 88, 12, 44, 99], "even"));

// const sumLargestNumbers = function(data) {
// 	let firstMax = 0;
//   let secMax = 0;
// 	for (let i = 0; i < data.length; i++) {
// 		if (firstMax < data[i]) {
// 			firstMax = data[i];
// 		}
// 	}
// 	for (let i = 0; i < data.length; i++) {		
// 		if (data[i] < firstMax && secMax < data[i] ) {
// 			secMax = data[i];
// 		}
// 	}
// 	return firstMax + secMax;
// };
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));