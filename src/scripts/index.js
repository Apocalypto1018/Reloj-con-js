const clock = document.getElementById("clock");
const startButton = document.getElementById("startClock");
const stopButton = document.getElementById("stopClock");
const oneSecond = 1000;
let intervalId = null;

const runClock = () => {
  intervalId = setInterval(() => {
    const systemTime = new Date();
    const hours = systemTime.getHours();
    const minutes = systemTime.getMinutes();
    const seconds = systemTime.getSeconds();

    const showTime = `${hours}:${minutes}:${seconds}`;

    clock.innerHTML = showTime;

    startButton.disabled = true;
    stopButton.disabled = false;
  }, oneSecond);
};

const stopClock = () => {
  clearInterval(intervalId);

  startButton.disabled = false;
  stopButton.disabled = true;

  clock.innerHTML = "Clock stopped";
};

startButton.addEventListener("click", runClock);
stopButton.addEventListener("click", stopClock);
