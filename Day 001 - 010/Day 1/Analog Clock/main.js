const hour = document.querySelector ("#hour");
const minute = document.querySelector ("#minute");
const second = document.querySelector ("#second");

setInterval(function(){
	let day = new Date();
	let h = day.getHours() * 30; // 360/12=30
	let m = day.getMinutes() * 6; // 360/60=6
	let s = day.getSeconds() * 6; // 360/60=6

	hour.style.transform = `rotateZ(${h+(m/12)}deg)`; // m/12 ==> (0-5)
	minute.style.transform = `rotateZ(${m}deg)`;
	second.style.transform = `rotateZ(${s}deg)`;
}, 1000);