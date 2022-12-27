// 5 round game of Rock-Paper-Scissors

let playerScore = 0;
let computerScore = 0;
let roundwinner = '';
let playerSelection;

const buttons = document.querySelectorAll('.btn');

const player = document.querySelector("#player-score");
player.textContent = 'Player Score: ${playerScore}';

const computer = document.querySelector("#computer-score");
player.textContent = 'Computer Score: ${computerScore}';

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        let playerSelection = button.id;
        
        if (playerSelection == "rock"){
            playerChoice = 0;
        }
        if (playerSelection == "paper"){
            playerChoice = 1;
        }
        if (playerSelection == "scissors"){
            playerChoice = 2;
        }

        getComputerChoice();
        playGame();
    })
})

function getComputerChoice(){
    randomValue = Math.floor(Math.random() * 3);
        if(randomValue == "0") {
            return "rock";
        }
        if(randomValue == "1") {
            return "paper";
        }
        if(randomValue == "2") {
            return "scissors";
        }

}
function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        roundwinner = 'tie';
        output.textContent = 'Its a Tie! You both chose ${playerSelection}'
    }

    if((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection ==='PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')){
            playerScore++;
            roundwinner = 'player';
            output.textContent = 'You Won! ${playerSelection} beats ${computerSelection}';
    }

    if((playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
        (playerSelection === 'PAPER' && computerSelection ==='SCISSORS') ||
        (playerSelection === 'ROCK' && computerSelection === 'PAPER')){
            computerScore++;
            roundwinner = 'computer';
            output.textContent = 'You Lost! ${computerSelection} beats ${playerSelection}';
    }



}


const computerSelection = getComputerChoice();

function playGame(){
    for (let i=0; i<=5; i++){
        output.textContent = "Choose Rock, Paper or Scissors";
        playRound();
    }
}