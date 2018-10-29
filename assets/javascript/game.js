var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f',
                        'g', 'h', 'i', 'j', 'k', 'l',
                        'm', 'n', 'o', 'p', 'q', 'r',
                        's', 't', 'u', 'v', 'w', 'x',
                        'y', 'z'];

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); //adding letter user guessed to guesses so far

    if (userGuess == computerGuess) {
        wins++;
        alert("You Won!");
        guessesLeft = 10; //reseting the guesses back to 10 so that the user can play again
        guessesSoFar.length = 0; // clear guessed letter to start new game
    }

    else if (guessesLeft == 0) {
        losses++;
        alert("Wrong! Let\'s try again.");
        guessesLeft = 10;
        guessesSoFar.length = 0;
    }

    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    var html =
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>" +
                "<p>Your Guesses so far: " + guessesSoFar + "</p>";

    document.querySelector('#game').innerHTML = html;

}