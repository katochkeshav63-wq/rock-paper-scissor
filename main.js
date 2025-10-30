const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice-button");


choiceButtons.forEach(button => {
    button.addEventListener("click",(event)=>{
        const playerChoice = event.currentTarget.id;
        startGame(playerChoice);
    });
});
function startGame(playerChoice){
    const choices = ["stone","paper","scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    playerChoiceSpan.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoiceSpan.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    const result = winner(playerChoice,computerChoice)
    updateResultDisplay( result )
}

function winner (player, computer){
    if(player ===  computer){
        return{message : "it is tie", status : "tie"}
    }else if (
        (player === "stone" && computer === "scissors")||
         (player === "paper" && computer === "stone")||
          (player === "scissors" && computer === "paper")
    ){
        return {message : "player wins", status:"win"};
    }else{
        return {message: "computer wins" , status : "lose"};
    }
}
function updateResultDisplay (result){
    resultDisplay.textContent = result.message;
    resultDisplay.classList.remove("win", "tie", "lose");
    if (result.status === "win"){
        resultDisplay.classList.add("win");
    }else if (result.status === "tie"){
        resultDisplay.classList.add("tie")
    }else{
        resultDisplay.classList.add("lose");
    }

}