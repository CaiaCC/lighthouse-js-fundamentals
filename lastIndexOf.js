function lastIndexOf(array, elem) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === elem) {
      return i;
    } 
	}
	return -1;
}
console.log(lastIndexOf([ 3 ], 3), "=?", 3);