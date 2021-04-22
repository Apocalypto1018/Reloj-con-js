const d= document;
let button1 = d.getElementById("startClock"),
button2 = d.getElementById("stopClock"),
interval;

function runClock(){

    interval = setInterval(()=>{

        let systemTime = new Date(),
        hour = systemTime.getHours(),
        minute = systemTime.getMinutes(),
        second = systemTime.getSeconds();    

        let showTime = hour + " : " + minute + " : " + second;
        
        d.formMain.showClock.value = showTime;

    },1000); 
}

function stopRun(){
    clearInterval(interval);
}

button1.addEventListener("click", runClock);
button2.addEventListener("click", stopRun);