// 5 round game of Rock-Paper-Scissors

let playerScore = 0;
let computerScore = 0;
let playerChoice = 0;
let computerChoice = 0;
let computerSelection = {Value: ""};
let playerSelection = {Value: ""};


const buttons = document.querySelectorAll('.btn');

const player = document.querySelector("#player-score");
player.textContent = 'Player Score: ${playerScore}';

const computer = document.querySelector("#computer-score");
player.textContent = 'Computer Score: ${computerScore}';

const message = document.querySelector("#message")
message.textContent = "May the Force be With You"

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        let playerBtn = button.id;
        

        if (playerBtn == "rock"){
            playerChoice = 0;
            playerSelection.Value = "rock";
        }
        if (playerBtn == "paper"){
            playerChoice = 1;
            playerSelection.Value = "paper";
        }
        if (playerBtn == "scissors"){
            playerChoice = 2;
            playerSelection.Value = "scissors";
        }

        computerChoice = getComputerChoice();
        playGame();
    })
})

function getComputerChoice(randomValue){
    randomValue = Math.floor(Math.random() * 3);
        if(randomValue == "0") {
            computerSelection.Value = "rock";
        }
        else if(randomValue == "1") {
            computerSelection.Value = "paper";
        }
        else if(randomValue == "2") {
            computerSelection.Value = "scissors";
        }
        return randomValue;


}
function playRound() {
    if(playerSelection == computerSelection) {
        roundwinner = 'tie';
        message.textContent = 'Its a Tie! You both chose ${playerSelection.Value}'
    }

    else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection =='paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')){
            playerScore++;
            message.textContent = 'You Won! ${playerSelection.Value} beats ${computerSelection.Value}';
    }

    else if((playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection =='scissors') ||
        (playerSelection == 'rock' && computerSelection == 'paper')){
            computerScore++;
            message.textContent = 'You Lost! ${computerSelection.Value} beats ${playerSelection.Value}';
    }



}




function playGame(){
    for (let i=0; i<=5; i++){
        playRound();
    }
}