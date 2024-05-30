const accesskey ="POMjaxumrQ2lzdrgB43KoDZVshCOpNo8UxqsNjO4WXk"; // this is api access key
const formEl = document.querySelector("form") // targeting form element
const searchInputEle = document.getElementById("search-input") // targeting the search input id
const searchResultEle = document.querySelector(".search-results") // targeting the class search-results
const showmoreEle = document.getElementById("show-more") // targeting the show more button

let inputData = "" // initiate the input data as string
let page = 1  // start with the page no 1
async function searchImage(){ // search function which is responcible for calling api
inputData = searchInputEle.value; // first check the value of search input value

        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}` // api url dafinition

    console.log(url) // check ether url is working
    const response = await fetch(url) // response when api respond
    const data = await  response.json()// api response should be printed in json
    if(page === 1){ //condation for if the page is one please respond nothing (i mean only one page)
        searchResultEle.innerHTML = ""// display nothing
    }
    const results = data.results; // when api call response it should store in a result variable
    results.map((result)=>{ // then loop through it and extract the desired data
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small;
        image.alt = result.alt_discription;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_discription;
        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResultEle.appendChild(imageWrapper)
        console.log(result)



    })
page++;
if(page > 1){
    showmoreEle.style.display = "block";
}
}

formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    searchImage()

})

showmoreEle.addEventListener("click",()=>searchImage())