const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  // Your code in here ...
  let x = 0;
  let y = 0;
  let position = [];
  for (let move of moves) {
    switch(move) {
    case "west":
      x -= 1;
      break;
    case "east":
      x += 1;
      break;
    case "north":
      y += 1;
      break;
    case "south":
      y -= 1;
      break;
    }
    position = [x , y];
  }
  return position;
}
console.log(finalPosition(moves));