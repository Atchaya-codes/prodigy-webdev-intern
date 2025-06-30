let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("time");
let laps = document.getElementById("laps");
let timer = null;

function updateTime() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = `${h}:${m}:${s}`;
}

function startStop() {
  if (timer !== null) return;
  timer = setInterval(updateTime, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
  laps.innerHTML = "";
}

function lap() {
  let li = document.createElement("li");
  li.innerText = displayTime.innerHTML;
  laps.appendChild(li);
}
