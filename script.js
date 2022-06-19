const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const DRAW = "Draw";
const WIN = "Win";
const LOSE = "Lose"

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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
        // add logic if user doesn't enter correct input
        // replace choices with numbers for easier play
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        switch (result[0]) {
            case LOSE:
                console.log("You lose - the computer's " + result[1] + " beats your " + playerSelection + ".");
                break;
            case WIN:
                console.log("You win - your " + playerSelection + " beats the computer's " + result[1] + ".");
                break;
            case DRAW:
                console.log("It's a draw - you both chose " + playerSelection + ".");
                break;
        }
        
    }
}