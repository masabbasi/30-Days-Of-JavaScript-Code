const body = document.querySelector("body");
const eyes = document.querySelectorAll(".eye");

body.addEventListener("mousemove", eyeball);

function eyeball () {
		eyes.forEach(function(eye){
		let x = eye.getBoundingClientRect().left + eye.clientWidth/2;
		let y = eye.getBoundingClientRect().top + eye.clientHeight/2;
		console.log(x);
		console.log(y);
		let radian = Math.atan2(event.pageX - x, event.pageY - y);
		console.log(radian);
		let rotate = radian * (180/Math.PI)* -1 + 270;
		console.log(rotate);
		eye.style.transform = `rotate(${rotate}deg)`;
	})
}