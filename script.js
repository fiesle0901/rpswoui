const choices = ['rock','paper','scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return choices[(Math.floor(Math.random()*3))];
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice;
}



function playGame(){
    function playRound(humanChoice, computerChoice){
        if(humanChoice===computerChoice){
            console.log(`IT'S A TIE! ${humanChoice} = ${computerChoice}`);
        }
        else if(humanChoice==="rock"){
            if(computerChoice==="paper"){
                computerScore++;
                console.log(`Computer won! ${computerChoice} > ${humanChoice}`);
            }
            else{
                humanScore++;
                console.log(`You won! ${humanChoice} > ${computerChoice}`);
            }
        }
        else if(humanChoice==="paper"){
            if(computerChoice==="rock"){
                humanScore++;
                console.log(`You won! ${humanChoice} > ${computerChoice}`);
            }
            else{
                computerScore++;
                console.log(`Computer won! ${computerChoice} > ${humanChoice}`);
            }
        }
        else if(humanChoice==="scissors"){
            if(computerChoice==="paper"){
                humanScore++;
                console.log(`You won! ${humanChoice} > ${computerChoice}`);
            }
            else{
                computerScore++;
                console.log(`Computer won! ${computerChoice} > ${humanChoice}`);
            }
        }
    }
    playRound(humanSelection,computerSelection);
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

while((humanScore+computerScore)<=5){
    playGame();
}

console.log(`Final score is ${humanScore} - ${computerScore}`);
    