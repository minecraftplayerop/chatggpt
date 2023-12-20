// game.js
var secretNumber = Math.floor(Math.random() * 10) + 1;
var attempts = 3;

function guessNumber() {
    var userGuess = prompt("Guess the number (between 1 and 10):");

    if (userGuess == secretNumber) {
        alert("Congratulations! You guessed the correct number.");
    } else {
        attempts--;
        alert("Incorrect! You have " + attempts + " attempts left.");

        if (attempts > 0) {
            guessNumber();
        } else {
            alert("Game over. The correct number was " + secretNumber + ".");
        }
    }
}

guessNumber();
