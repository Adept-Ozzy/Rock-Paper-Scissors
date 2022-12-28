// 5 round game of Rock-Paper-Scissors

let playerScore = 0;
let computerScore = 0;
let playerChoice = 0;
let computerChoice = 0;
let computerSelection = {Value: ''};
let playerSelection = {Value: ''};
let roundwinner = '';


const buttons = document.querySelectorAll('.btn');

const player = document.querySelector("#player-score");
// player.textContent = 'Player Score: ${playerScore}';

const computer = document.querySelector("#computer-score");
// computer.textContent = 'Computer Score: ${computerScore}';

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
            playerChoice = 2;
            playerSelection.Value = "paper";
        }
        if (playerBtn == "scissors"){
            playerChoice = 1
            playerSelection.Value = "scissors";
        }

        computerChoice = getComputerChoice();
        playGame();
    })
})

function getComputerChoice(){
    let randomValue = Math.round(Math.random() * 3);
        if(randomValue == "0") {
            computerSelection.Value = "rock";
        }
        else if(randomValue == "2") {
            computerSelection.Value = "paper";
        }
        else if(randomValue == "1") {
            computerSelection.Value = "scissors";
        }
        return randomValue;


}
function playRound() {

    roundwinner = "YOuuuuu";
    console.log(roundwinner);
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playerChoice);

    let result = 3;
    result = Math.abs(playerChoice - computerChoice);


    

    if(result ==  1){
        if(playerChoice>computerChoice){
            console.log("You Lose")
            computerScore++;
            message.textContent = 'AI wins: ' + computerSelection.Value + " beats " + playerSelection.Value;
        }
        else{
            console.log("You Win")
            playerScore++;
            message.textContent = 'Player wins: ' + playerSelection.Value + " beats " + computerSelection.Value;
        }    
        
    }

    else if(result ==  2){
        if(playerChoice>computerChoice){
            console.log("You Win")
            playerScore++;
            message.textContent = 'Player wins: ' + playerSelection.Value + " beats " + computerSelection.Value;
        }
        else{
            console.log("You Lose")
            computerScore++;
            message.textContent = 'AI wins: ' + computerSelection.Value + " beats " + playerSelection.Value;
        }    
    }

    else{
        console.log("You tie")
    }
    if(playerScore == 5){
        message.textContent = "It is done. The Player is the Victor";
        resetGame();
    }

    else if(computerScore == 5){
        message.textContent = "It is done. The Computer is the Victor";
        resetGame();
    }
}

function resetGame(){
        playerScore=0;
        computerScore=0;
}

function playGame(){
    
    playRound();
    player.textContent = "Player Score: " + playerScore;
    computer.textContent = "Computer Score: " + computerScore;
}