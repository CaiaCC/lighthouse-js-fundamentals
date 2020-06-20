const whichSchool = function(age) {
	if (age < 13){
		return "Elementary School";
	} else if (age >= 13 && age <= 18) {
		return "Secondary School";
	} else if(age >19 && age < 100){
		return "Lighthouse Lab";
	}
}

console.log(whichSchool(14));

