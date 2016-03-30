var body = document.body;

var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset');
var lap = document.querySelector('.lap');

var lapContainer = document.querySelector('.lapContainer');

var mil = document.querySelector('.milis');
var sec = document.querySelector('.secs');
var min = document.querySelector('.mins');

// Create blocks for time markers
function createTimeBlock(type) {
  lapBlock = document.createElement('div');
  lapBlock.classList.add('lapBlock');
  lapContainer.appendChild(lapBlock);
  var lapText = document.createElement('div');

  lapText.classList.add('lapText');
  lapBlock.appendChild(lapText);
  lapText.innerHTML = (type);

  var lapMin = document.createElement('div');
  lapMin.classList.add('lapSection');
  lapBlock.appendChild(lapMin);
  lapMin.innerHTML = (minutes);

  var lapDiv = document.createElement('div');
  lapDiv.classList.add('lapSection');
  lapBlock.appendChild(lapDiv);
  lapDiv.innerHTML = (':');

  var lapSec = document.createElement('div');
  lapSec.classList.add('lapSection');
  lapBlock.appendChild(lapSec);
  lapSec.innerHTML = (seconds);

  var lapDiv = document.createElement('div');
  lapDiv.classList.add('lapSection');
  lapBlock.appendChild(lapDiv);
  lapDiv.innerHTML = (':');

  var lapMilis = document.createElement('div');
  lapMilis.classList.add('lapSection');
  lapBlock.appendChild(lapMilis);
  lapMilis.innerHTML = (milliseconds);
}

// hide/display START/STOP buttons
function displayStopButton() {
  start.style.display = 'none';
  stop.style.display = 'block';
}

function displayStartButton() {
  start.style.display = 'block';
  stop.style.display = 'none';
}


// Get Date start point
function startStopwatch() {
  initialDate = new Date;
}



function getTime() {

  var currentDate = new Date;
  var timer = currentDate - initialDate;

  milliseconds = (timer % 1000);
  timer -= milliseconds;
  milliseconds = Math.floor(milliseconds / 10);
  timer = Math.floor(timer / 1000);

  seconds = Math.floor (timer % 60);
  timer -= seconds;
  timer = Math.floor(timer / 60);

  minutes = Math.floor (timer % 60);
  timer -= minutes;
  timer = Math.floor(timer / 60);

  if(milliseconds < 100){
    milliseconds = '0' + milliseconds;
  }
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  if (minutes < 10){
    minutes = '0' + minutes;
  }
}


function counter() {
  getTime();
  mil.innerHTML = milliseconds;
  sec.innerHTML = seconds;
  min.innerHTML = minutes;
}


function displayTimer() {
  timerId = setInterval(counter, 10);
}


function pauseStopwatch() {
  start.style.display = 'block';
  stop.style.display = 'none';
}


function newLap() {
  var currentDate = new Date;
  var timer = currentDate - initialDate;
  getTime();
  createTimeBlock('LAP')
}


function stopTimer() {
  clearInterval(timerId);
  var currentDate = new Date;
  var timer = currentDate - initialDate;
  getTime();
  createTimeBlock('STOP');
}


function resetTimer() {
  clearInterval(timerId);
  start.style.display = 'block';
  stop.style.display = 'none';
  mil.innerHTML = '00';
  min.innerHTML = '00';
  sec.innerHTML = '00';
  document.querySelector('.lapContainer').innerHTML = '';
}

start.addEventListener('click', startStopwatch);
start.addEventListener('click', displayStopButton);
start.addEventListener('click', displayTimer);

lap.addEventListener('click', newLap)

stop.addEventListener('click', stopTimer)
stop.addEventListener('click', displayStartButton);

reset.addEventListener('click', resetTimer);