const btnEle = document.getElementById("btn") // button Element when the user click it show result
const errormessageEle = document.getElementById("errormessage") // this is for error message when api is failed to load
const galleryEle = document.getElementById("gallery") // this element is responsible to display the result
function fetchImage(){       // this function is called by button element
    const inputValue = document.getElementById('input').value // when the input field which is in number and cannot be exceed then 10
    if(inputValue> 10 || inputValue<1){ //if condation that input value cannot be greater then 10 and not less then 1 and if the condation is meet
        errormessageEle.style.display = "block" // error message should be displayed
        errormessageEle.innerText = "Number should be between 0 and 11 " // and also show us in the document model
        return;  // as this message display and it should return nothing

    } // fetch image is end here


    let imgs =""      // images variable is decleared here
    try{       // try block is used in order to check if the code doesn't work properly
        btnEle.style.display = "none"; // button element should be disappeared
        const loading = `<img src="animation.svg" alt="loading"/>` // this line of code shows the loading animation logo while fetching the data
        galleryEle.innerHTML = loading // it should display while loading the data by API
        // below line is responsible for asking the api to present data
    fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page1=${Math.round(Math.random() * 1000)}&client_id=UNroZZMs0e63HIPDulMYkT1aC6gC_VBGTBJ5_KGQDgs`).then((res)=>res.json().then((data)=>{ if(data){data.forEach((pic)=>{
        imgs += `<img src=${pic.urls.small} alt="imges"/>`; // loading the parameter from Api
        galleryEle.style.display = "block" // gallery result should be presented on the body of page
        galleryEle.innerHTML = imgs////// same goes here
        btnEle.style.display = "block";////////button should be displayed when result is loaded
    })}}))/// end of try block
}catch (error){//// catch block is loaded when api doesn't works
        errormessageEle.style.display = "block"
        errormessageEle.innerText="We are facing an issue"
        btnEle.style.display = "block";
    }}



btnEle.addEventListener("click",fetchImage)// all the code will be executed when the button is pressed.