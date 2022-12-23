const date = document.querySelector("#date")
const day = document.querySelector(".day")
const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")


date.addEventListener("change",function(){
	
})

setInterval(function(){
	let localDate = new Date();
	let dayF = 
	let dayN = localDate.getDate();
	let hourN = localDate.getHours();
	let minuteN = localDate.getMinutes()
	let secondN = localDate.getSeconds();
	console.log(dayN);
},1000)