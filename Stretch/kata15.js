const squareCode = function(message) {
	const lineLength = Math.ceil(Math.sqrt(message.length));	
	console.log(lineLength)
	let newMessage = message.split(" ");
	newMessage = newMessage.join("");

	let code = "";
	// print X characters per line
	return code;
};




console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));