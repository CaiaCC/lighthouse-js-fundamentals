function ageCalculator(name, yearOfBirth, currnetYear) {
	let age = currnetYear - yearOfBirth;
	return `${name} is ${age} years old.`;
}
console.log(ageCalculator("Ferdinand", 1988, 2015));