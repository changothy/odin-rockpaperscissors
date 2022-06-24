const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const DRAW = "Draw";
const WIN = "Win";
const LOSE = "Lose"

let playerSelection = "";

let playerScore = 0;
let computerScore = 0;

// Calculate the computer's choice when playing the game
function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return ROCK;
            break;
        case 2:
            return PAPER;
            break;
        case 3:
            return SCISSORS;
            break;
        default:
            throw "Unexpected choice"
    }
}

// Play out a round of rock paper scissors and determine the winner. Return the result and computer's choice in an array
function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case ROCK:
            if (computerSelection == PAPER) {
                return [LOSE, PAPER];
            } else if (computerSelection == SCISSORS) {
                return [WIN, SCISSORS];
            } else {
                return [DRAW, ROCK];
            }
            break;
        case PAPER:
            if (computerSelection == SCISSORS) {
                return [LOSE, SCISSORS];
            } else if (computerSelection == ROCK) {
                return [WIN, ROCK];
            } else {
                return [DRAW, PAPER];
            }
            break;
        case SCISSORS:
            if (computerSelection == ROCK) {
                return [LOSE, ROCK];
            } else if (computerSelection == PAPER) {
                return [WIN, PAPER];
            } else {
                return [DRAW, SCISSORS];
            }
            break;
    }
}

// Tally the results of how many rounds each player has won
function setResults(playerWin, computerWin) {
    playerScore += playerWin;
    computerScore += computerWin;
}

// Compare each player's score and determine the winner
function getResults() {
    if (playerScore > computerScore) {
        console.log("You WIN the match! You scored " + playerScore + " against the computer's score of " + computerScore + ".");
    } else if (playerScore < computerScore) {
        console.log("You LOST the match. You scored " + playerScore + " against the computer's score of " + computerScore + ".");
    } else {
        console.log("It's a DRAW. You both scored " + playerScore + ".");
    }

}

// Helper function to check the input is valid
function isValidChoice(value) {
    if (value == ROCK || value == PAPER || value == SCISSORS) {
        return true;
    } else {
        return false;
    }
}

// Play through a game of rock paper scissors (5 rounds)
function game() {
    // for (let i = 0; i < 5; i++) {
        
        playerSelection = prompt("Rock, Paper, or Scissors?");
        while (true) {
            if (playerSelection === null) {
                return;
            } else {
                playerSelection = playerSelection.toUpperCase()
            }

            if (!isValidChoice(playerSelection)) {
                console.log("Not a valid choice - type 'Rock', 'Paper', or 'Scissors'.");
                playerSelection = prompt("Rock, Paper, or Scissors?");
            } else {
                break;
            }
        }
        
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        switch (result[0]) {
            case LOSE:
                console.log("You lose - the computer's " + result[1] + " beats your " + playerSelection + ".");
                setResults(0, 1);
                break;
            case WIN:
                console.log("You win - your " + playerSelection + " beats the computer's " + result[1] + ".");
                setResults(1, 0);
                break;
            case DRAW:
                console.log("It's a draw - you both chose " + playerSelection + ".");
                break;
        }
    // }

    getResults();
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id, computerPlay);
        // playRound(button.id, computerPlay);
    });
});