let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
const timer = document.getElementById("timer");

function format(num) {
    return num < 10 ? "0" + num : num;
}

function updateTimer() {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    timer.textContent =
        format(hours) + "." +
        format(minutes) + "." +
        format(seconds);
}

function startTime() {
    if (!interval) {
        interval = setInterval(updateTimer, 1000);
        
    }
}

function stopTime() {
    clearInterval(interval);
    interval = undefined;
}

function clearTime() {
    stopTime();
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer.textContent = "00.00.00";
}
