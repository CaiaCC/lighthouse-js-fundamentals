var assert = require('assert');

const blocksAway = function(directions) {
  let output = {
		east: 0,
		north: 0
	};
	let direction = "";

	if (directions[0] === "right") {
		direction = "east";
		output.east += directions[1]
	} else {
		direction = "north";
		output.north += directions[1]
	}
// console.log(output)
	for (let i = 2; i < directions.length; i+=2) {
		let nextDirection = directions[i];
		let numSteps = directions[i + 1];
		
		direction = getNextDirection(direction, nextDirection);
		
		if (direction === "west") {
			output.east -= numSteps;
		} else if (direction === "east") {
			output.east += numSteps;
		} else if (direction === "north") {
			output.north += numSteps;
		} else if (direction === "south") {
			output.north -= numSteps;
		} 	
	}
	return output;
};

const getNextDirection = function(currentDirection, nextDirection) {

	switch (currentDirection) {
		case "north":
			if (nextDirection === "left") {
				return "west";
			} else {
				return "east";
			}
		case "east":
			if (nextDirection === "left") {
				return "north";
			} else {
				return "south";
			}
		case "west":
			if (nextDirection === "left") {
				return "south";
			} else {
				return "north";
			}	
			case "south":
			if (nextDirection === "left") {
				return "east";
			} else {
				return "west";
			}	
	}
}



// console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

assert.deepEqual(blocksAway(["right", 2, "left", 3, "left", 1]), {east: 1, north: 3});
assert.deepEqual(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]), {east: 3, north: 3});
assert.deepEqual(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]), {east: 0, north: 0});