const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerPlayersEl = document.getElementById("computer-score")
let playerScore=0;
let computerScore=0;
buttons.forEach(button => { button.addEventListener('click', ()=>{
    const result=playRound(button.id,computerPlay());
    resultEl.textContent = result;

});
})

function computerPlay(){
    const chices=["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random()*chices.length);
    return chices[randomChoice];
}
function playRound(userSelection,computerSelection){
    if(userSelection === computerSelection){
        return " It is a Tie";
    }else if((userSelection === "rock" && computerSelection === "scissors")||(userSelection === "paper" && computerSelection === "rock") || (userSelection === "scissor" && computerSelection === "paper"))
    {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win!" + userSelection + " beats " + computerSelection;
    }else{
        computerScore++
        computerPlayersEl.textContent = computerScore;

        return "You Lose!" + computerSelection + " beats " + userSelection
    }

}