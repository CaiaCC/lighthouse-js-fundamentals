const instructorWithLongestName = function(instructors) {
	let currentLength = 0;
	let instructor = {};
	for (i = 0; i < instructors.length; i++) {
		const names = instructors[i].name;
		if (currentLength < names.length) {
			currentLength = names.length;
			instructor = instructors[i];
		}
	}
	return instructor;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));