const startButton = document.getElementById("start_Clock");
const stopButton = document.getElementById("stop_Clock");
const oneScond= 1000;
let intervalId=null;

function runClock(){

    intervalId = setInterval(()=>{

        let systemTime = new Date();
        let hour = systemTime.getHours();
        let minute = systemTime.getMinutes();
        let second = systemTime.getSeconds();    

        let showTime =`${hour} : ${hour}  : ${second}`; 
        
        document.formMain.showClock.value = showTime;

        startButton.disabled=true;
        stopButton.disabled=false;

    },oneScond); 
}

function stopClock(){
    clearInterval(intervalId);
    
    startButton.disabled=false;
    stopButton.disabled=true;
}

startButton.addEventListener("click", runClock);
stopButton.addEventListener("click", stopClock);