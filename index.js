function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    if(x == 0){
        return "rock";
    }else if(x == 1){
        return "paper";
    }else if(x == 2){
        return "scissors";
    }else{
        return "error";
    }
}

function getHumanChoice(){
    let x = prompt("Rock Paper or Scissors?").toLowerCase();
    return x;
}

var dict = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock"
};

function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        return "withdraw";
    }else{
        if(dict[humanChoice] === computerChoice){
            return "lose";
        }else{
            return "win";
        }
    }
}

function playGame(num){
    
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < num; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        let x = playRound(humanChoice,computerChoice);
        if(x === "win"){
            humanScore+=1;
        }else if(x === "lose"){
            computerScore+=1;
        }else{
            humanScore+=0;
            computerScore+=0;
        }
    }

    console.log(humanScore);
    console.log(computerScore);

    if(humanScore>computerScore){
        return "human win";
    }else{
        return "computer win";
    }
}

console.log(playGame(5));

