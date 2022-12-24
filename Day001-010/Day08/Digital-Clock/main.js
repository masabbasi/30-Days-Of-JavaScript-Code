let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let amPm = document.querySelector(".ampm");

setInterval(function () {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
	amPm.innerText = (h>=0 && h<12) ? "AM" : "PM";
	if (h>12) { h -= 12;}
	if (h===24) { h = 0;}
	h = (h<10) ? `0${h}` : h;
	m = (m<10) ? `0${m}` : m;
	s = (s<10) ? `0${s}` : s;
	hour.innerText = h;
	minute.innerText = m;
	second.innerText = s;
}, 1000);