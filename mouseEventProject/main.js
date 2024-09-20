const containerEle = document.querySelector(".container")
window.addEventListener("mousemove",(e)=>{
    containerEle.innerHTML = `
    <div class="mouse-event">
    ${e.clientX}
    <h3>Mouse X Position (px)</h3>
  </div>
  <div class="mouse-event">
    ${e.clientY}
    <h3>Mouse Y Position (px)</h3>
  </div>
    `
})