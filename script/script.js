// 5 round game of Rock-Paper-Scissors

let playerScore = 0;
let computerScore = 0;
let roundwinner = '';

function getComputerChoice(){

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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game(playRound){
    for (let i=0; i<=5; i++){

    }
}