function howManyHundreds(num){
	let hundreds = num / 100;
	if (num < 100){
		return 0;
	}
	return Math.trunc(hundreds);
}
console.log(howManyHundreds(12), "=?", 0);