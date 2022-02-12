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
    If rounds = 6, compare score and declare winner or tie

Create loop to play game
    Run round
    Run rounds checker

*/

let computerPlay;
let userPlay;
let computerScore = 0;
let userScore = 0;
let currentRound = 1;
let keepGoing = true;

function playRound() {
    let roundWinner;
    
    generateComputerPlay();
    getUserPlay();
    comparePlays();
    displayWinner();
    updateScore();
    displayRoundInfo();
    currentRound += 1;
}

// START of single round mechanics
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

function comparePlays() {
    if (computerPlay === "rock") {
        switch (userPlay) {
            case "rock":
                roundWinner = "tie";
                break;
            case "paper":
                roundWinner = "user";
                break;
            case "scissors":
                roundWinner = "computer";
                break;
        }
    } 
    else if (computerPlay === "paper") {
        switch (userPlay) {
            case "rock":
                roundWinner = "computer";
                break;
            case "paper":
                roundWinner = "tie";
                break;
            case "scissors":
                roundWinner = "user";
                break;
        }
    }
    else if (computerPlay === "scissors") {
        switch (userPlay) {
            case "rock":
                roundWinner = "user";
                break;
            case "paper":
                roundWinner = "computer";
                break;
            case "scissors":
                roundWinner = "tie";
                break;s
        }
    }
}

function displayWinner() {
    switch (roundWinner) {
        case "user":
            console.log("You've won this round!");
            break;
        case "computer":
            console.log("You've lost this round.");
            break;
        case "tie":
            console.log("It's a tie!");
            break;
    }
}

function updateScore() {
    switch (roundWinner) {
        case "user":
            userScore += 1;
            break;
        case "computer":
            computerScore += 1;
            break;
        case "tie":
            break;
    }
}

function displayRoundInfo() {
    console.log(`The current score is: ${userScore} for you and ${computerScore} for the computer. This was round number ${currentRound}/5.`)
}
// END of single round mechanics

function checkGameStatus() {
    if (computerScore === 3) {
        console.log("Game over, you lost!");
        keepGoing = false;
        resetGame();
    }
    else if (userScore === 3) {
        console.log("Congratulations, you've won!");
        keepGoing = false;
        resetGame();
    }
    else if (currentRound === 6) {
        if (userScore === computerScore) {
            console.log("It's a tie! We've run out of rounds.")
            keepGoing = false;
            resetGame();
        }
        else if (userScore > computerScore) {
            console.log("We've run out of rounds, but you won!");
            keepGoing = false;
            resetGame();
        }
        else {
            console.log("You've lost! We've run out of rounds.")
            keepGoing = False;
            resetGame();
        }
    }
}

function resetGame() {
    computerScore = 0;
    userScore = 0;
    currentRound = 1;
}

while(keepGoing) {
    playRound();
    checkGameStatus();
}