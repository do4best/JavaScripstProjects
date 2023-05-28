const elBtn = document.getElementById('roll-dice')
const elDice = document.getElementById('dice')
const rollDiceHistoryEl = document.getElementById("roll-history")
let historyList= []
function rollDice(){
    const rollresult = Math.floor(Math.random()* 6 )+ 1;
    const diceFace = getDiceFace(rollresult);
    elDice.innerHTML = diceFace;
    historyList.push(rollresult)
    updateRollHistroy()
}
function updateRollHistroy(){
    rollDiceHistoryEl.innerHTML ="";
    for(let i=0; i<historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1} : <span>${getDiceFace(historyList[i])} </span>`;
        rollDiceHistoryEl.appendChild(listItem);
    }

}

function getDiceFace(roll){
    switch(roll){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
            case 3:
                return "&#9858;";
            case 4:
                return "&#9859;";
                case 5:
                    return "&#9860;";
                case 6:
                    return "&#9861;";
                default:
                    return " "
    }
}
elBtn.addEventListener("click",()=>{
elDice.classList.add('roll-animation');
setTimeout(()=>{
    elDice.classList.remove('roll-animation');
    rollDice()

},1000);

});