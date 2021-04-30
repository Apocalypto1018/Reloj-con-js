const startButton = document.getElementById("start_Clock");
const stopButton = document.getElementById("stop_Clock");
const oneSecond = 1000;
let intervalId = null;

stopButton.disabled = true;

const runClock = () => {
  intervalId = setInterval(() => {
    const systemTime = new Date();
    const hour = systemTime.getHours();
    const minute = systemTime.getMinutes();
    const second = systemTime.getSeconds();

    const showTime = `${hour} : ${minute}  : ${second}`;

    document.formMain.showClock.value = showTime;

    startButton.disabled = true;
    stopButton.disabled = false;
  }, oneSecond);
};

const stopClock = () => {
  clearInterval(intervalId);

  startButton.disabled = false;
  stopButton.disabled = true;

  document.formMain.showClock.value = "clock stopped";
};

startButton.addEventListener("click", runClock);
stopButton.addEventListener("click", stopClock);
