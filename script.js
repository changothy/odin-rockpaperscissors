const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const DRAW = "Draw";
const WIN = "Win";
const LOSE = "Lose"

const BEST_OF = 5

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

// Tally the results of how many rounds each player has won, and get outcome if someone hits the BEST_OF value
function setResults(playerWin, computerWin) {
    playerScore += playerWin;
    computerScore += computerWin;

    if (playerScore == BEST_OF || computerScore == BEST_OF) {
        getOutcome();
    }
}

// Compare each player's score and display the winner
function getOutcome() {
    const outcomeDiv = document.createElement("div");
    const body = document.querySelector("body");

    if (playerScore > computerScore) {
        outcomeDiv.textContent = "You WIN the match! ";
    } else if (playerScore < computerScore) {
        outcomeDiv.textContent = "You LOST the match. ";
    }

    if (playerScore == 0 || computerScore == 0) {
        outcomeDiv.textContent += "FLAWLESS VICTORY"
    }

    body.appendChild(outcomeDiv);

    buttons.forEach((button) => {
        button.setAttribute("disabled", true);
    });
}

function getRoundResult(result, button) {
    switch (result[0]) {
        case LOSE:
            setResults(0, 1);    
            return "You lose - the computer's " + result[1] + " beats your " + button.id + ".";
        case WIN:
            setResults(1, 0);    
            return "You win - your " + button.id + " beats the computer's " + result[1] + ".";
        case DRAW:
            return "It's a draw - you both chose " + button.id + ".";
    }
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(button.id, computerPlay);
        
        const resultsDiv = document.querySelector("#results");
        resultsDiv.textContent = getRoundResult(playRound(button.id, computerPlay()), button);

        const scoreDiv = document.querySelector("#score");
        scoreDiv.textContent = "Player: " + playerScore + " | Computer: " + computerScore;
    });
});

