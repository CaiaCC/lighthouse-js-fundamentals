function range (start, end, step) {
  let array = [];
  if (start < 0 && start <= end && step > 0) {
    array.push(start);
    for (let j = 1; j <= ((end - start) / step); j++) {
      array[j] = array[j - 1 ] + step;
    }
  } 
  return array;
}
console.log(range(-9, 3, 3));