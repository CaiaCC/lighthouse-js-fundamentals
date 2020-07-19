let prompt = require("prompt-sync")();

const randomNumber = Math.floor(Math.random() * (1 - 1 + 100)) + 1 ;// Low <= x < High
console.log(randomNumber);
let answer;

let attempt = 0;
let lastGuess = undefined;

while (true) {
    answer = Number(prompt("Guess a number: "));

	if (isNaN(answer)) {
		console.log("Not a number! Try again!");
  } else if (lastGuess === answer) {
    console.log("Already Guessed!");
	} else {
        attempt += 1;

        if( answer > randomNumber) {
            console.log("Too High! Try again!");
        } else if( answer < randomNumber) {
        console.log("Too Low! Try again!");
        } else if( answer === randomNumber) {
            console.log("You got it! You took " + attempt + " attempts!");
            break;
        }
        lastGuess = answer;
    }
}



