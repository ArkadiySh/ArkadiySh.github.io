var body = document.body;

var start = document.querySelector('.start');
var reset = document.querySelector('.stop');
var sec = document.querySelector('.secs');
var min = document.querySelector('.mins');
var mil = document.querySelector('.milis');
var pause = document.querySelector('.pause');
var lap = document.querySelector('.lap');

var milliseconds = 0
var seconds = 0;
var minutes = 0;

function altButton() {
  start.style.display = 'none';
  pause.style.display = 'block';
}

function reStart() {
  start.style.display = 'block';
  pause.style.display = 'none';
}

function counter() {
  mil.innerHTML = milliseconds;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;

  milliseconds = milliseconds + 200;
  
  if (milliseconds > 999) {
    milliseconds = 0;
    seconds++;
  };

  if (seconds > 59) {
    seconds = 0;
    minutes++;
  };
  
}

function timer() {
  timerId = setInterval(counter, 200);
}



function stopTimer() {
  clearInterval(timerId);

  var lapBlock = document.createElement('div');
  lapBlock.classList.add('lapBlock');
  body.appendChild(lapBlock);

  var lapText = document.createElement('div');
  lapText.classList.add('lapText');
  lapBlock.appendChild(lapText);
  lapText.innerHTML = ('Stop');

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



function newLap() {
  var lapBlock = document.createElement('div');
  lapBlock.classList.add('lapBlock');
  body.appendChild(lapBlock);

  var lapText = document.createElement('div');
  lapText.classList.add('lapText');
  lapBlock.appendChild(lapText);
  lapText.innerHTML = ('Lap');

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



function resetTimer() {
  clearInterval(timerId);

  start.style.display = 'block';
  pause.style.display = 'none';

  milliseconds = 0;
  seconds = 0;
  minutes = 0;

  mil.innerHTML = milliseconds;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
}



start.addEventListener('click', timer);
start.addEventListener('click', altButton);
pause.addEventListener('click', reStart)
lap.addEventListener('click', newLap)



pause.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

