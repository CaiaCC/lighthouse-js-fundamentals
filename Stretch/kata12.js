var assert = require('assert');

const organizeInstructors = function(instructors) {
	let organizedList = {};

	for (let i = 0; i < instructors.length; i++) {
		let courseName = instructors[i].course;
		let instructorName = instructors[i].name;

		if (Object.keys(organizedList).includes(courseName)) {
			organizedList[courseName].push(instructorName);
		} else {
			organizedList[courseName] = [instructorName];
		}
	}
	return organizedList;
}

assert.deepEqual(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]), {
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
});
assert.deepEqual(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]), {
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
});
	
// console.log(organizeInstructors([
//   {name: "Samuel", course: "iOS"},
//   {name: "Victoria", course: "Web"},
//   {name: "Karim", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));
// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));