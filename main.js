const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice-button");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resetButton = document.getElementById("reset-button");

let playerScore = 0;
let computerScore = 0;

playerChoiceSpan.textContent = "?";
computerChoiceSpan.textContent = "?";

choiceButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const playerChoice = event.currentTarget.id;
        startGame(playerChoice);
    });
});

resetButton.addEventListener("click", resetGame);

function startGame(playerChoice) {
    const choices = ["stone", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceSpan.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoiceSpan.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    const result = determineWinner(playerChoice, computerChoice);
    updateResultDisplay(result);
    updateScores(result.status);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return { message: "It's a Tie!", status: "tie" };
    } else if (
        (player === "stone" && computer === "scissors") ||
        (player === "paper" && computer === "stone") ||
        (player === "scissors" && computer === "paper")
    ) {
        return { message: "Player Wins!", status: "win" };
    } else {
        return { message: "Computer Wins!", status: "lose" };
    }
}

function updateResultDisplay(result) {
    resultDisplay.textContent = result.message;
    resultDisplay.classList.remove("win", "tie", "lose"); 
    if (result.status === "win") {
        resultDisplay.classList.add("win");
    } else if (result.status === "tie") {
        resultDisplay.classList.add("tie");
    } else {
        resultDisplay.classList.add("lose");
    }
}

function updateScores(status) {
    if (status === "win") {
        playerScore++;
    } else if (status === "lose") {
        computerScore++;
    }
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
    playerChoiceSpan.textContent = "?";
    computerChoiceSpan.textContent = "?";
    resultDisplay.textContent = "Choose your weapon!";
    resultDisplay.classList.remove("win", "tie", "lose");
}