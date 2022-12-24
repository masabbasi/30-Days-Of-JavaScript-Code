const date = document.querySelector("#date");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
let timeInterval;
let savedDate = localStorage.getItem("localDate") || false;
let timeStart = true;

if (savedDate) {
  startTimer(savedDate);
  date.valueAsDate = new Date(savedDate);
}

date.addEventListener("change", function (e) {
  e.preventDefault();
  clearInterval(timeInterval);
  let myDate = new Date(date.value);
  localStorage.setItem("localDate", myDate);
  timeStart = true;
  startTimer(myDate);
});

function startTimer(d) {
  function updateTimer() {
		let tl = timeLeft(d);
		if (tl.total <= 0) {
			timeStart = false;
			day.innerText = 0;
			hour.innerText = 0;
			minute.innerText = 0;
			second.innerText = 0;
		}
		day.innerText = tl.day;
		hour.innerText = tl.hour;
		minute.innerText = tl.minute;
		second.innerText = tl.second;
	}

  updateTimer();

  if (timeStart) {
    timeInterval = setInterval(updateTimer, 1000);
  } else {
    clearInterval(timeInterval);
  }
}

function timeLeft(d) {
	let currentDate = new Date();
	let t = Date.parse(d) - Date.parse(currentDate);
	let day = Math.floor(t / (1000 * 60 * 60 * 24));
	let hour = Math.floor((t / (1000 * 60 * 60)) % 24);
	let minute = Math.floor((t / 1000 / 60) % 60);
	let second = Math.floor((t / 1000) % 60);
	return {
		total: t,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
	};
}
