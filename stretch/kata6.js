// const repeatNumbers = function(data) {
// 	const output = [];

// 	for (let i = 0; i < data.length; i++) {
// 		let result = "";
// 		const element = data[i];
// 		const repeatNum = element[0].toString();
// 		const repeatTimes = element[1];

// 		for (let j = 0; j < repeatTimes; j++) {
// 			result += repeatNum;
// 		}
// 		output.push(result);
// 	}
// 	return output.join(", ");
// };

const repeatNumbersWithForEach = function(data) {
	const output = [];

	data.forEach(function(element) {
		let result = "";
		const repeatNum = element[0].toString();
		const repeatTimes = element[1];


		
		for (let j = 0; j < repeatTimes; j++) {
			result += repeatNum;
		}
		output.push(result);
	});
	return output.join(", ");
};



console.log(repeatNumbersWithForEach([[1, 10]]));
console.log(repeatNumbersWithForEach([[1, 2], [2, 3]]));
console.log(repeatNumbersWithForEach([[10, 4], [34, 6], [92, 2]]));





const repeatNumbers = function(data) {
	const output = [];

	data.forEach(function(element) {
		let result = "";
		const repeatNum = element[0].toString();
		const repeatTimes = element[1];

		for (let j = 0; j < repeatTimes; j++) {
			result += repeatNum;
		}
		output.push(result);
	});
	return output.join(", ");
};