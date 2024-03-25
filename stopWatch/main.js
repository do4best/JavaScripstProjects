const minuteLabel = document.getElementById("minutes")
const secondLabel = document.getElementById("seconds")
const milliSecondLabel = document.getElementById("milliseconds")

const startButton = document.getElementById("startBtn")
const stopButton = document.getElementById("stopBtn")
const resetButton = document.getElementById("resetBtn")
const pauseButton = document.getElementById("pauseBtn")

const lapList = document.getElementById("laplist")

// stop watch variables
let minute=0;
let second=0;
let millisecond=0;
let fuss;
startButton.addEventListener('click',startTimer)
stopButton.addEventListener('click',stopTimer)
resetButton.addEventListener('click',resetTimer)
pauseButton.addEventListener('click',pauseTimer)
function startTimer(){
    fuss = setInterval(updateTimer,10)
startButton.disable = true;
}
function stopTimer(){

}
function resetTimer(){
clearInterval(fuss)
    resetTimerData()
    resetTimerData.disable=false;
}
function pauseTimer(){
    clearInterval(fuss)
    startButton.disable=true;

}
function updateTimer(){
    millisecond++;
    if(millisecond === 100){
        millisecond=0;
        second++;
        if(second === 60){
            second = 0;
            minute++;
        }

    }
    displayTimer();
}
function displayTimer(){
    milliSecondLabel.textContent = padTime(millisecond);
    secondLabel.textContent = padTime(secondLabel);
    minuteLabel.textContent = padTime(minute);
}
function padTime(time){
    return time.toString().padStart(2,'0')
}
function resetTimerData (){
    minute=0;
    second=0;
    millisecond=0;
    displayTimer();
}