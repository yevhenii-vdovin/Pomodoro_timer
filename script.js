let minute = 0;
let second = 0;
let millisecond = 0;

let test;

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const innerMinute = document.getElementById('minute');
const innerSecond = document.getElementById('second');
const innerMillisecond = document.getElementById('millisecond');
const barTimer = document.getElementById('barTimer');

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);

function start() {
  pause();
  test = setInterval(timer, 10);
}

function pause() {
  clearInterval(test);
}

function reset() {
  minute = 0;
  second = 0;
  millisecond = 0;

  innerMinute.innerText = '00';
  innerSecond.innerText = '00';
  innerMillisecond.innerText = '00';
}

function timer() {
  if ((millisecond += 10) === 100) {
    millisecond = 0;
    second++;
  }
  if (second === 60) {
    second = 0;
    minute++;
  }

  innerMinute.innerText = returnData(minute);
  innerSecond.innerText = returnData(second);
  innerMillisecond.innerText = returnData(millisecond);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}

function myBarTimer() {
  let start = 0;
  let timer = setInterval(function () {
    start++;
    if (start >= 100) {
      clearInterval(timer);
      myBarTimer();
    }
    barTimer.style.display = 'block';
    barTimer.style.left = start + 'px';
  }, 10);
}

//---------------------------------

let seconds;
let intervalHandle;

const btnStart = document.getElementById('btnstart');
const pausePomodoroc = document.querySelector('.pause-pomodoro');
const startPomodoroc = document.querySelector('.start-pomodoro');

btnStart.addEventListener('click', startCountdown);
pausePomodoroc.addEventListener('click', pausePomodoro);
startPomodoroc.addEventListener('click', startPomodoro);

function startCountdown() {
  let minutes = document.getElementById('minutes').value;

  if (isNaN(minutes)) {
    alert('Please enter a number');
    return;
  }

  seconds = minutes * 60;
  intervalHandle = setInterval(tick, 1000);
}

function tick() {
  let timeDisplay = document.getElementById('time');
  let minutes = document.getElementById('minutes').value;
  let elem = document.getElementById('barPomodoro');

  let min = Math.floor(seconds / 60);
  let sec = seconds - min * 60;
  if (sec < 10) {
    sec = '0' + sec;
  }

  let message = min.toString() + ':' + sec;
  timeDisplay.innerHTML = message;

  if (seconds === 0) {
    start();
    myBarTimer();
    clearInterval(intervalHandle);
  }

  let minutesForBar = minutes * 60;
  seconds--;

  let width = (seconds / minutesForBar) * 100;
  elem.style.width = width / 2 + '%';
}

function pausePomodoro() {
  clearInterval(intervalHandle);
}
function startPomodoro() {
  intervalHandle = setInterval(tick, 1000);
}
