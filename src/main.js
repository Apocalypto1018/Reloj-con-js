const startButton = document.getElementById("start_Clock");
const stopButton = document.getElementById("stop_Clock");
const oneSecond= 1000;
let intervalId=null;

let runClock = ()=>{

    intervalId = setInterval(()=>{

        let systemTime = new Date();
        let hour = systemTime.getHours();
        let minute = systemTime.getMinutes();
        let second = systemTime.getSeconds();    

        let showTime =`${hour} : ${minute}  : ${second}`; 
        
        document.formMain.showClock.value = showTime;

        startButton.disabled=true;
        stopButton.disabled=false;

    },oneSecond); 
}

let stopClock = ()=>{
    clearInterval(intervalId);
    
    startButton.disabled=false;
    stopButton.disabled=true;

    document.formMain.showClock.value = 'clock stopped';
}

startButton.addEventListener("click", runClock);
stopButton.addEventListener("click", stopClock);