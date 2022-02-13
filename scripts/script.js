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
let keepGoing = false;
const results = document.querySelector('.narrator>p');
const displayUserScore = document.querySelector('.user-score-number');
const displayComputerScore = document.querySelector('.computer-score-number');
const displayRounds = document.querySelector('.rounds-number');

function playRound(choice) {
    let roundWinner;
    
    generateComputerPlay();
    //getUserPlay();
    userPlay = choice;
    comparePlays();
    displayWinner();
    updateScore();
    //displayRoundInfo();
    currentRound += 1;
    updateRoundNumber();
    checkGameStatus();
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
            results.textContent = "You've won this round!";
            break;
        case "computer":
            results.textContent = "You've lost this round.";
            break;
        case "tie":
            results.textContent = "It's a tie!";
            break;
    }
}

function updateScore() {
    switch (roundWinner) {
        case "user":
            userScore += 1;
            displayUserScore.textContent = userScore;
            break;
        case "computer":
            computerScore += 1;
            displayComputerScore.textContent = computerScore;
            break;
        case "tie":
            break;
    }
}

function displayRoundInfo() {
    results.textContent = ` The current score is: ${userScore} for you and ${computerScore} for the computer. This was round number ${currentRound}/5.`;
}

function updateRoundNumber() {
    displayRounds.textContent = (currentRound - 1) + "/5";
}
// END of single round mechanics

function checkGameStatus() {
    if (computerScore === 3) {
        results.textContent = "Game over, you lost!";
    
    }
    else if (userScore === 3) {
        results.textContent = "Congratulations, you've won!";
    
    }
    else if (currentRound === 6) {
        if (userScore === computerScore) {
            results.textContent = "It's a tie! We've run out of rounds.";
        }
        else if (userScore > computerScore) {
            results.textContent = "We've run out of rounds, but you won!";
            
        }
        else {
            results.textContent = "You've lost! We've run out of rounds."
            
        }
    }
}

function resetGame() {
    computerScore = 0;
    userScore = 0;
    currentRound = 1;
    displayComputerScore.textContent = 0;
    displayUserScore.textContent = 0;
    results.textContent = "Choose an option to start the game";
}

while(keepGoing) {
    playRound();
    checkGameStatus();
}

function startRound() {
    if (currentRound === 6) resetGame();
    playRound(this.getAttribute('data-choice'));
}

const buttons = document.querySelectorAll(".play-button");
buttons.forEach(button => {button.addEventListener('click', startRound)});

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGame);