const listContainer = document.getElementById("list-container")
const inputBox = document.getElementById("input-box")
function addTask(){
    if(inputBox.value === ""){
        alert("Enter some data")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()

}
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
listContainer.addEventListener("click",function(e){
   if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked")
    saveData()}else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove()
       saveData()

   }
})
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
  