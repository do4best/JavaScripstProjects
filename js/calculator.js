let btnEle  = document.getElementById("calculate");
let billEle = document.getElementById("bill");
let totalEle = document.getElementById("tip")
const totalSpan = document.getElementById('total')

const calculateTotal=()=>{
    const billValue = billEle.value;
    const tipValue = totalEle.value;
    

    const totalResult = billValue  * (1 +tipValue/100 )

    totalSpan.innerText = "$ "+totalResult.toFixed(2)
    console.log('done')
}
btnEle.addEventListener("click",calculateTotal);