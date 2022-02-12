/*   PLANNING

Create variable for computer play
Create variable for user play
Create variable for computer score
Create variable for user score
Create variable for rounds played
Create variable for game to keep going

Create function for a single round
    [F] Generate computer play and store it in a variable
    [F] Ask for user play and store it in a variable
    [F] Compare computer and user play
            Determine winner
    Display winner
    [F] Add score to corresponding variable
    [F] Display current score
    Increase rounds counter
    [F] Display round number out of 5

Create function for rounds checking
    Check if computer score is >= 3
    Computer wins
    Check if user score is >= 3
    User wins
    If anyone wins, return information to end game

Create loop to play game
    Run round
    Run rounds checker

*/

let computerPlay;
let userPlay;
let computerScore;
let userScore;
let currentRound = 1;
let keepGoing = true;

function playRound() {

    generateComputerPlay();
}

// For plays: 1 is rock, 2 is paper, 3 is scissors
function generateComputerPlay() {
    let num = Math.floor((Math.random() * 3)) + 1;
    switch (num) {
        case 1:
            computerPlay = "rock";
            break;
        case 2:
            computerPlay = "paper";
            break;
        case 3:
            computerPlay = "scissors";
            break;
    }
}

function getUserPlay() {
    userPlay = prompt("Enter your play:").toLowerCase();

    if (userPlay !== "rock" && userPlay !== "paper" && userPlay !== "scissors") {
        alert("Enter a valid choice! Your options are rock, paper or scissors.")
        getUserPlay();
    }
  
}