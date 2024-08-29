let playerScore=0;
let computerScore=0;
let draw=0;


const rock = document.querySelector(".btnr")
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    
  });
  const paper = document.querySelector(".btnp")
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    
  });
  const scissors = document.querySelector(".btns")
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    
  });
const p_score= document.querySelector(".player_score");
const c_score= document.querySelector(".computer_score");
const d_score= document.querySelector(".draw_score");
const w_result = document.querySelector(".winner_results");
const r_result=document.querySelector(".round_result");
function getComputerChoice (){
    let choice = Math.floor(Math.random() * 10);
    
    if (choice <= 3)
    {
        return "rock";
    }
    else if (choice <= 6)
    {
        return "paper";
    }
    else if(choice <= 9)
    {
        return "scissors";
    }
    return null;  
} 
function game() {
  //  console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}, Draws: ${draw}`);

  p_score.textContent = `${playerScore}`;
  c_score.textContent = `${computerScore}`;
  d_score.textContent = `${draw}`;

if(playerScore==5){
    w_result.textContent ="PLAYER WINS";
    disablegame();    
}
else if(computerScore==5){
    w_result.textContent ="COMPUTER WINS";
    disablegame();  
    
}

/*        if(playerScore>computerScore){
        console.log("The player has won the game");
        }
        else if(playerScore<computerScore){
        console.log("the computer has won the game");
    }
    else{
    console.log("the game was drawn");
}*/
};
function disablegame(){
    rock.disabled= true;
    paper.disabled=true;
    scissors.disabled=true;
}


function playRound(playerSelection, computerSelection) {
  
if (playerSelection==='rock' && computerSelection==='scissors'){
    playerScore++;
    r_result.textContent="You win, Computer Chose Scissors!";
    console.log("Player chose rock , player wins");
    //return playerScore;
   

}
if (playerSelection==='rock' && computerSelection==='paper'){
    computerScore++;
    r_result.textContent="You lose, Computer Chose Paper!";
    console.log("Player chose rock , computer chose paper, computer wins");
   // return computerScore;
}
if (playerSelection==='paper' && computerSelection==='scissors'){
    computerScore++;
    r_result.textContent="You lose, Computer Chose Scissors!";
    console.log("Player chose paper , computer chose scissors, computer wins");
   // return computerScore;
}
if (playerSelection==='paper' && computerSelection==='rock'){
    playerScore++;
    r_result.textContent="You win, Computer Chose Rock!";
    console.log("Player chose paper , computer chose rock, player wins");
   // return playerScore;
}
if (playerSelection==='scissors' && computerSelection==='paper'){
    playerScore++;
    r_result.textContent="You win, Computer Chose Paper!";
    console.log("Player chose scissors , computer chose paper, player wins");
   // return playerScore;
}
if (playerSelection==='scissors' && computerSelection==='rock'){
    computerScore++;
    r_result.textContent="You lose, Computer Chose Rock!";
    console.log("Player chose scissors , computer chose rock, computer wins");
   // return computerScore;
}
if (playerSelection==computerSelection){
    draw++;
    r_result.textContent="DRAW, Its a Tie!";
    //return draw;
}
game();
}



