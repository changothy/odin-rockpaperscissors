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
    playerSelection = playerSelection.toUpperCase();

    switch(playerSelection) {
        case ROCK:
            if (computerSelection == PAPER) {
                return LOSE;
            } else if (computerSelection == SCISSORS) {
                return WIN;
            } else {
                return DRAW;
            }
            break;
        case PAPER:
            if (computerSelection == SCISSORS) {
                return LOSE;
            } else if (computerSelection == ROCK) {
                return WIN;
            } else {
                return DRAW;
            }
            break;
        case SCISSORS:
            if (computerSelection == ROCK) {
                return LOSE;
            } else if (computerSelection == PAPER) {
                return WIN;
            } else {
                return DRAW;
            }
            break;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        // add logic if user doesn't enter correct input
        // replace choices with numbers for easier play
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        console.log("You " + result + ".")
    }
}