const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

const playerChoiceElement = document.getElementById("player-choice");
const computerChoiceElement = document.getElementById("computer-choice");

const resultElement = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice-btn");
const resetButton = document.getElementById("reset-btn");

const choices = ["rock", "paper", "scissors"];

const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

let playerScore = 0;
let computerScore = 0;

// Play one round
function playGame(playerChoice) {

    // Generate computer choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    // Display both choices
    playerChoiceElement.textContent = emojis[playerChoice];
    computerChoiceElement.textContent = emojis[computerChoice];

    // Determine winner
    let result = "";
    let resultClass = "";

    if (playerChoice === computerChoice) {
        result = "It's a Draw! 🤝";
        resultClass = "draw";

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
        resultClass = "win";
        playerScore++;

    } else {
        result = "Computer Wins! 🤖";
        resultClass = "lose";
        computerScore++;
    }

    // Update scores
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    // Update result message
    resultElement.textContent = result;
    resultElement.className = "result-box " + resultClass;
}

// Listen for button clicks
choiceButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const playerChoice = button.dataset.choice;
        playGame(playerChoice);

    });

});

// Reset the game
function resetGame() {

    playerScore = 0;
    computerScore = 0;

    playerScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;

    playerChoiceElement.textContent = "?";
    computerChoiceElement.textContent = "?";

    resultElement.textContent = "Make your move!";
    resultElement.className = "result-box";
}

// Reset button event
resetButton.addEventListener("click", resetGame);