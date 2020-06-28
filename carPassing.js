const cars = [];
const carPassing = function (cars, speed) {
	// Your code in here ...
  cars.push({ time: Date.now(), speed: speed })
  return cars;
};
console.log(carPassing(cars, 56343));