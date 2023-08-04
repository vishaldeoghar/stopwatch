import "./styles.css";

let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function displayTime() {
  let formattedTime = `${hours
    .toString()
    .padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  document.getElementById("stopwatch").textContent = formattedTime;
}

function startTimer() {
  timerInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    displayTime();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
