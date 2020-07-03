function merge(array1, array2) {
	for (let i = 0; i < array2.length; i++) {
		array1.push(array2[i]);
	}
	return array1.sort();
}
console.log(merge([ 7, 8, 9 ], [ 1, 2, 3 ]), "=?", [ 1, 2, 3, 7, 8, 9 ]);
console.log(merge([ 2, 8 ], [ 1, 5, 9 ]), "=?", [ 1, 2, 5, 8, 9 ]);
console.log(merge([ 1, 5, 9 ], [ 2, 8]), "=?", [ 1, 2, 5, 8, 9 ]);