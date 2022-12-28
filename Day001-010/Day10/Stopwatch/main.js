const sec = document.querySelector(".sec");
const millisec = document.querySelector(".millisec");
const controller = document.querySelectorAll(".controller span")

let second = 00;
let millisecond = 00;
let myTimer;

controller.forEach(function(item){
	item.addEventListener("click",function(item){
		if (item.target.classList.contains("start")) {
			clearInterval(myTimer);
			myTimer = setInterval(update,10);
		} else if (item.target.classList.contains("stop")) {
			clearInterval(myTimer);
		} else {
			clearInterval(myTimer);
			second = "00";
			millisecond = "00";
			sec.innerText=second;
			millisec.innerText=millisecond;
		}
	})
})


function update() {
	millisecond++;
	if (millisecond > 99) {
		second++;
		if (second < 10) {
			second = `0${second}`;
		}
		millisecond = 0;
		console.log("sec:"+second);
	}

	if (millisecond < 10) {
		millisecond = `0${millisecond}`;
		console.log(millisecond);
	}

	sec.innerText=second;
	millisec.innerText=millisecond;
}