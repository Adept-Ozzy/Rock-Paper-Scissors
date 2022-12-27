// 5 round game of Rock-Paper-Scissors

let playerScore = 0;
let computerScore = 0;
let roundwinner = '';

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        if (playerSelection =="rock"){
            playerChoice = 0;
        }
        if (playerSelection =="paper"){
            playerChoice = 1;
        }
        if (playerSelection =="scissors"){
            playerChoice = 2;
        }

        getComputerChoice();
        playGame();
    })
})

function getComputerChoice(){
    randomChoice = Math.floor(Math.random() * 3);
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
    }

    if((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection ==='PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')){
            playerScore++;
            roundwinner = 'player';
    }

    if((playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
        (playerSelection === 'PAPER' && computerSelection ==='SCISSORS') ||
        (playerSelection === 'ROCK' && computerSelection === 'PAPER')){
            computerScore++;
            roundwinner = 'computer';
    }



}

const playerSelection = button.id;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game(playRound){
    for (let i=0; i<=5; i++){

    }
}