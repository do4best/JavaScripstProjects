const buttonsEle = document.querySelectorAll("button")
const inputFieldValue = document.getElementById("result")
for(let i=0; i<buttonsEle.length; i++){
    buttonsEle[i].addEventListener("click",()=>{
        const buttonValue = buttonsEle[i].textContent;
        if(buttonValue === "C"){
            clearResult()
        }else if(buttonValue === "="){
            calculateResult()
        }else{
            appendValue(buttonValue)
        }
    })
}
function clearResult(){
inputFieldValue.value = ""
}
function calculateResult(){
inputFieldValue.value = eval(inputFieldValue.value)
}
function appendValue(buttonValue){
inputFieldValue.value  += buttonValue
}